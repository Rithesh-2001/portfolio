// app/page.js
'use client';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import dynamic from 'next/dynamic';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education'
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (  
    <main className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen">
      <HeroSection/>
      <Navbar/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </main>
  )
}