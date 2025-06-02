// app/page.js
"use client"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { CursorProvider } from "@/components/CustomCursor/CursorContext"

export default function Home() {
  return (
    <CursorProvider>
      <main className="min-h-screen">
        <HeroSection />
        <Navbar />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </CursorProvider>
  )
}
