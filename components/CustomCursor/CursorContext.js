"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CursorContext = createContext({
  cursorType: "default",
  setCursorType: () => {},
})

export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState("default")
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if device is touch-based
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)

    // Add class to html element for global cursor styling
    if (!isTouchDevice) {
      document.documentElement.classList.add("has-custom-cursor")
    }

    return () => {
      document.documentElement.classList.remove("has-custom-cursor")
    }
  }, [isTouchDevice])

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType, isTouchDevice }}>{children}</CursorContext.Provider>
  )
}

export const useCursor = () => useContext(CursorContext)
