import Image from 'next/image';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectsSections from './components/ProjectsSections';

import Testimonials from './components/TestimonialSection';
import Footer from './components/FooterSection';
// import Chat from './components/chat';
import Chat from './components/Chat';


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <NavBar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectsSections />
        <Testimonials />
      </div>
      <Footer />
      <Chat />
    </main>
  );
}
