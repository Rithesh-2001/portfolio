import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/ThemeContext"
import StarryBackground from "@/components/Background/StarryBackground"
import CustomCursor from "@/components/CustomCursor"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Rithesh's Portfolio",
  description: "Personal portfolio showcasing my skills and projects",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <StarryBackground />
        <CustomCursor />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
