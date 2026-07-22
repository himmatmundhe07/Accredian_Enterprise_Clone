import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL('https://enterprise.accredian.com'),
  title: {
    default: "Accredian Enterprise - Next-Gen Expertise for Your Teams",
    template: "%s | Accredian Enterprise"
  },
  description: "Cultivate high-performance teams through expert learning. Tailored Solutions, Industry Insights, Expert Guidance, and Measurable Impact for global enterprises.",
  keywords: ["Enterprise Training", "Corporate Learning", "Leadership Development", "AI Training", "Data Science Courses", "Executive Education", "Upskilling"],
  authors: [{ name: "Accredian" }],
  creator: "Accredian",
  publisher: "Accredian",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Accredian Enterprise Learning",
    description: "Cultivate high-performance teams through expert learning. Tailored Solutions, Industry Insights, Expert Guidance, and Measurable Impact.",
    url: "https://enterprise.accredian.com",
    siteName: "Accredian Enterprise",
    images: [
      {
        url: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp",
        width: 1200,
        height: 630,
        alt: "Accredian Enterprise Learning - Cultivate High-Performance Teams",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise Learning",
    description: "Empower your corporate teams with cutting-edge training in AI, Data, and Leadership.",
    images: ["https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
