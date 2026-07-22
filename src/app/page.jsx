import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Stats from '@/components/Stats';
import Clients from '@/components/Clients';
import AccredianEdge from '@/components/AccredianEdge';
import CAT from '@/components/CAT';
import Courses from '@/components/Courses';
import WhoShouldJoin from '@/components/WhoShouldJoin';
import CATFramework from '@/components/CATFramework';
import HowItWorks from '@/components/HowItWorks';
import FAQs from '@/components/FAQs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import EnquireModal from '@/components/EnquireModal';

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <Home />
      <Stats />
      <Clients />
      <AccredianEdge />
      <CAT />
      <Courses />
      <WhoShouldJoin />
      <CATFramework />
      <HowItWorks />
      <FAQs />
      <Testimonials />
      <CTA />
      <Footer />
      <EnquireModal />
    </main>
  );
}
