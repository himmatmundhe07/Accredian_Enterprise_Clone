import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/Button';

const FacebookIcon = ({ className }) => (
  <svg className={className} focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="mt-12 sm:mt-0 py-10 bg-[#1d1d1d] sm:bg-white w-full border-t border-slate-200">
      <div className="max-w-[85rem] w-full px-6 md:px-12 xl:px-12 mx-auto">
        
        {/* Top Section: Logo, Socials, CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 sm:border-slate-200 pb-8">
          
          <div className="flex flex-col">
            <div className="relative w-36 h-10 mb-6">
              {/* Desktop Logo */}
              <div className="hidden sm:block">
                <Image 
                  src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp" 
                  alt="Accredian Logo" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
              {/* Mobile Logo */}
              <div className="block sm:hidden">
                <Image 
                  src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/accredainnew.webp" 
                  alt="Accredian Logo" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="https://facebook.com/accredianlearn" className="text-white sm:text-slate-500 hover:text-[#1a73e8] transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/accredianedu/" className="text-white sm:text-slate-500 hover:text-[#1a73e8] transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com/accredianedu" className="text-white sm:text-slate-500 hover:text-[#1a73e8] transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/accredian_edu" className="text-white sm:text-slate-500 hover:text-[#1a73e8] transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" className="text-white sm:text-slate-500 hover:text-[#1a73e8] transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="mt-8 md:mt-0 text-center md:text-right w-full md:w-auto flex flex-col items-center md:items-end">
            <Button className="w-full sm:w-auto px-8 min-w-[180px]">Enquire Now</Button>
            <p className="text-slate-300 sm:text-slate-600 text-sm mt-3">Speak with our Advisor</p>
          </div>
        </div>

        {/* Middle Section: Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 pb-8 gap-8 mt-8 border-b border-gray-700 sm:border-slate-200">
          <div>
            <h3 className="font-semibold text-lg text-white sm:text-slate-900 mb-4">Accredian</h3>
            <ul className="text-slate-300 sm:text-slate-600 space-y-3">
              <li><Link href="https://accredian.com/About" className="hover:text-blue-400 sm:hover:text-[#1a73e8] transition-colors">About</Link></li>
              <li><Link href="https://blog.accredian.com/" className="hover:text-blue-400 sm:hover:text-[#1a73e8] transition-colors">Blog</Link></li>
              <li><Link href="https://accredian.com/whyaccredian" className="hover:text-blue-400 sm:hover:text-[#1a73e8] transition-colors">Why Accredian</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white sm:text-slate-900 mb-4">Contact Us</h3>
            <p className="text-slate-300 sm:text-slate-600 mt-2">
              Email us: <Link href="mailto:enterprise@accredian.com" className="text-blue-400 sm:text-[#1a73e8] hover:underline">enterprise@accredian.com</Link>
            </p>
            <p className="text-slate-300 sm:text-slate-600 mt-3 max-w-sm">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-6 text-center">
          <p className="text-slate-400 sm:text-slate-500 text-sm">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
