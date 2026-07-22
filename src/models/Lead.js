import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: false },
  courseDomain: { type: String, required: false },
  candidates: { type: String, required: false },
  mode: { type: String, required: false },
  location: { type: String, required: false },
}, { timestamps: true });

export const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
