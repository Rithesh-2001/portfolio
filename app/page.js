"use client"
import { useState, useEffect } from "react"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Loader from "@/components/Loader"
import { CursorProvider } from "@/components/CustomCursor/CursorContext"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Show loader for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

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
