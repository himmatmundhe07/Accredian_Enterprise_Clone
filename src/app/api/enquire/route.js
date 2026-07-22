import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Lead } from '@/models/Lead';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().optional(),
  courseDomain: z.string().optional(),
  candidates: z.string().optional(),
  mode: z.string().optional(),
  location: z.string().optional(),
});

export async function POST(req) {
  try {
    const body = await req.json();
    
    const validation = leadSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: "Validation error", errors: validation.error.flatten().fieldErrors }, 
        { status: 400 }
      );
    }

    await connectToDatabase();
    const newLead = await Lead.create(validation.data);

    // Send confirmation email
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: validation.data.email,
        subject: "Welcome to Accredian Enterprise!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #1a73e8;">Hello ${validation.data.name},</h2>
            <p>Thank you for getting in touch with Accredian Enterprise.</p>
            <p>We have successfully received your enquiry${validation.data.courseDomain ? ` regarding our <strong>${validation.data.courseDomain}</strong> program` : ''}.</p>
            <p>One of our strategic learning advisors will reach out to you shortly to discuss how we can tailor our solutions for your team.</p>
            <br/>
            <p>Best Regards,</p>
            <strong>The Accredian Team</strong>
          </div>
        `,
      };

      // We don't await this to avoid slowing down the user's UI response, 
      // but you can await it if you want strict error handling.
      transporter.sendMail(mailOptions).catch(err => console.error("Email send error:", err));
      
    } catch (emailError) {
      console.error("Failed to setup email:", emailError);
    }

    return NextResponse.json(
      { message: "Successfully submitted!", id: newLead._id }, 
      { status: 201 }
    );
    
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Internal server error" }, 
      { status: 500 }
    );
  }
}
