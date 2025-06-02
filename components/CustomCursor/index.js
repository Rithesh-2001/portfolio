"use client"

import { useEffect, useState, useRef } from "react"
import styled from "styled-components"

const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
`

const CursorDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #854ce6;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.15s ease-out, height 0.15s ease-out, opacity 0.15s ease-out;
  z-index: 9999;
  pointer-events: none;
  box-shadow: 0 0 10px 2px rgba(133, 76, 230, 0.6);
  
  &.hovered {
    width: 24px;
    height: 24px;
    background: rgba(133, 76, 230, 0.5);
    mix-blend-mode: difference;
  }
`

const CursorRing = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid rgba(133, 76, 230, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.1s ease-out, height 0.1s ease-out, border-width 0.1s ease-out, opacity 0.1s ease-out;
  z-index: 9998;
  pointer-events: none;
  opacity: 0.5;
  
  &.hovered {
    width: 50px;
    height: 50px;
    border-width: 3px;
    opacity: 0.8;
  }
`

const CursorTrail = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(133, 76, 230, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 9997;
  opacity: 0;
  box-shadow: 0 0 5px 1px rgba(133, 76, 230, 0.3);
  
  &.active {
    opacity: 1;
    animation: fadeOut 1s forwards;
  }
  
  @keyframes fadeOut {
    0% {
      opacity: 0.7;
      width: 6px;
      height: 6px;
    }
    100% {
      opacity: 0;
      width: 2px;
      height: 2px;
    }
  }
`

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [trails, setTrails] = useState([])
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const ringRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef()

  useEffect(() => {
    // Check if device is touch-based
    const checkTouch = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
    }

    checkTouch()

    // Don't apply custom cursor on touch devices
    if (isTouchDevice) return

    const addTrail = (x, y) => {
      const timestamp = Date.now()
      setTrails((prevTrails) => [
        ...prevTrails.slice(-12), // Keep only the last 12 trails for better performance
        { x, y, id: timestamp },
      ])

      // Remove trail after animation completes
      setTimeout(() => {
        setTrails((prevTrails) => prevTrails.filter((trail) => trail.id !== timestamp))
      }, 1000)
    }

    // Smooth ring animation using requestAnimationFrame
    const animateRing = () => {
      const speed = 0.15 // Increased from 0.1 for faster response

      ringRef.current.x += (position.x - ringRef.current.x) * speed
      ringRef.current.y += (position.y - ringRef.current.y) * speed

      setRingPosition({
        x: ringRef.current.x,
        y: ringRef.current.y,
      })

      animationRef.current = requestAnimationFrame(animateRing)
    }

    const updateCursorPosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setPosition(newPosition)

      // Add trail with throttling for better performance
      if (Date.now() % 4 === 0) {
        addTrail(e.clientX, e.clientY)
      }
    }

    const handleMouseEnter = () => {
      setHidden(false)
    }

    const handleMouseLeave = () => {
      setHidden(true)
    }

    const handleMouseDown = () => {
      setClicked(true)
    }

    const handleMouseUp = () => {
      setClicked(false)
    }

    const handleLinkHoverStart = () => {
      setLinkHovered(true)
    }

    const handleLinkHoverEnd = () => {
      setLinkHovered(false)
    }

    // Start ring animation
    animateRing()

    document.addEventListener("mousemove", updateCursorPosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Add event listeners to all clickable elements
    const addHoverListeners = () => {
      const clickableElements = document.querySelectorAll(
        'a, button, [role="button"], input[type="submit"], input[type="button"], .button, [data-cursor="pointer"]',
      )

      clickableElements.forEach((element) => {
        element.addEventListener("mouseenter", handleLinkHoverStart)
        element.addEventListener("mouseleave", handleLinkHoverEnd)
      })

      return clickableElements
    }

    let clickableElements = addHoverListeners()

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      // Remove old listeners
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleLinkHoverStart)
        element.removeEventListener("mouseleave", handleLinkHoverEnd)
      })
      // Add new listeners
      clickableElements = addHoverListeners()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Hide default cursor
    document.body.style.cursor = "none"

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)

      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleLinkHoverStart)
        element.removeEventListener("mouseleave", handleLinkHoverEnd)
      })

      observer.disconnect()

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      // Restore default cursor
      document.body.style.cursor = "auto"
    }
  }, [position.x, position.y, isTouchDevice])

  // Don't render custom cursor on touch devices
  if (isTouchDevice) return null

  return (
    <CursorContainer>
      {trails.map((trail) => (
        <CursorTrail
          key={trail.id}
          className="active"
          style={{
            left: trail.x,
            top: trail.y,
          }}
        />
      ))}
      <CursorRing
        className={linkHovered ? "hovered" : ""}
        style={{
          left: ringPosition.x,
          top: ringPosition.y,
          opacity: hidden ? 0 : 0.5,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
        }}
      />
      <CursorDot
        className={linkHovered ? "hovered" : ""}
        style={{
          left: position.x,
          top: position.y,
          opacity: hidden ? 0 : 1,
          transform: `translate(-50%, -50%) scale(${clicked ? 1.5 : 1})`,
        }}
      />
    </CursorContainer>
  )
}

export default CustomCursor
