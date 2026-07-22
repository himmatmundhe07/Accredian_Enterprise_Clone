import { MonitorCheck, MonitorOff, GraduationCap, Briefcase, BarChart2, Presentation, MonitorPlay } from 'lucide-react';


export const ASSET_BASE_URL = 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other';

export const BENEFITS = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
  "Measurable Impact"
];

export const STATS = [
  { value: "10K+", description: "Professionals trained for exceptional career success" },
  { value: "200+", description: "Sessions delivered with unmatched learning excellence" },
  { value: "5K+", description: "Active learners engaged in dynamic courses" },
];

export const CLIENTS = [
  { name: 'Reliance', src: 'rel.png' },
  { name: 'HCL', src: 'hcl.png' },
  { name: 'IBM', src: 'ibm.png' },
  { name: 'CRIF', src: 'crif.png' },
  { name: 'ADP', src: 'adp.svg' },
  { name: 'Bayer', src: 'bayer.svg' },
];

export const COURSES = [
  { title: "Program Specific", description: "Certificate, Executive, Post Graduate Certificate", image: "project-management-v2.webp" },
  { title: "Industry Specific", description: "IT, Healthcare, Retail, Finance, Education, Manufacturing", image: "digital-transformation-v2.webp" },
  { title: "Topic Specific", description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud", image: "data-science-v2.webp" },
  { title: "Level Specific", description: "Senior Leadership, Mid-Career Professionals, Freshers", image: "senior-management-v2.webp" }
];

export const AUDIENCES = [
  { icon: MonitorCheck, title: "Tech Professionals", description: "Enhance expertise, embrace tech, drive innovation." },
  { icon: MonitorOff, title: "Non-Tech Professionals", description: "Adapt digitally, collaborate in tech environments." },
  { icon: GraduationCap, title: "Emerging Professionals", description: "Develop powerful skills for rapid career growth." },
  { icon: Briefcase, title: "Senior Professionals", description: "Strengthen leadership, enhance strategic decisions." }
];

export const STEPS = [
  { icon: BarChart2, title: "Curriculum Design", description: "Tailored programs matching your enterprise goals." },
  { icon: Presentation, title: "Expert Delivery", description: "Led by industry veterans and domain experts." },
  { icon: MonitorPlay, title: "Continuous Learning", description: "Ongoing support and skill enhancement." }
];

export const TESTIMONIALS = [
  { logo: "adp.svg", company: "ADP", quote: "We would like to thank Accredian for an excellent program delivered to our 100+ high performing product managers...", author: "Rajnish", role: "Sr. Director - Product" },
  { logo: "bayer.svg", company: "Bayer", quote: "A thoroughly professional approach, domain expertise & excellent delivery. Highly recommended for enterprise training.", author: "Sunil", role: "Head - Data Science" },
  { logo: "crif.png", company: "CRIF", quote: "The curriculum was perfectly tailored to our needs. We saw an immediate impact on our team's performance and output.", author: "Amit", role: "VP - Engineering" }
];

export const FAQ_CATEGORIES = [
  "About the Course",
  "About the Delivery",
  "Miscellaneous"
];

export const FAQ_DATA = {
  "About the Course": [
    { question: "What is the duration of the program?", answer: "The program duration varies based on the specific track, but most enterprise programs run for 12-16 weeks." },
    { question: "Are there any prerequisites?", answer: "While basic domain knowledge is helpful, our programs are designed to accommodate various skill levels." },
    { question: "Do you provide certification?", answer: "Yes, all participants receive an industry-recognized certification upon successful completion." },
    { question: "Is the curriculum customizable?", answer: "Absolutely. We tailor the curriculum to meet your organization's specific tech stack and business objectives." }
  ],
  "About the Delivery": [
    { question: "Is it online or offline?", answer: "We offer flexible delivery modes including fully online, hybrid, and in-person workshops." },
    { question: "Who are the instructors?", answer: "Our instructors are industry veterans with 10+ years of experience in top-tier tech companies." }
  ],
  "Miscellaneous": [
    { question: "What is the batch size?", answer: "We recommend batch sizes of 20-30 participants for optimal engagement and personalized attention." },
    { question: "Do you offer post-training support?", answer: "Yes, we provide 3 months of extended support and access to our alumni network." }
  ]
};
