"use client"

import React from "react"
import styled, { keyframes } from "styled-components"
import { useRef } from "react"
import { Snackbar, Alert } from "@mui/material"

// Animated Send Button Component without zoom or lift animations
const StyledWrapper = styled.div`
  .button {
    --primary:rgb(246, 245, 248);
    --neutral-1: #ffffff;
    --neutral-2: #f3f4f6;
    --radius: 8px;

    cursor: pointer;
    border-radius: var(--radius);
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    border: none;
    box-shadow:
      0 1px 1px rgba(254, 253, 253, 0.4),
      0 12px 24px rgba(0, 0, 0, 0.15),
      0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    min-width: 220px;
    padding: 22px;
    height: 72px;
    font-family: "Inter", system-ui, sans-serif;
    font-style: normal;
    font-size: 19px;
    font-weight: 600;
    letter-spacing: -0.2px;
    
    color: #000;
  }

  /* Make all text black */
  .state p {
    color: #000 !important;
  }

  /* Make all icons black */
  .state .icon svg {
    color: #000 !important;
    fill: #000 !important;
    stroke: #000 !important;
  }

  .state .icon svg g {
    filter: none !important;
  }

  /* Rest of your existing styles remain the same */
  .button:hover {
    /* Removed both scale and translateY transformations */
    box-shadow:
      0 2px 2px rgba(255, 255, 255, 0.4),
      0 18px 32px rgba(0, 0, 0, 0.15),
      0 8px 12px rgba(0, 0, 0, 0.1);
  }

  .button:active {
    /* Removed scale transformation */
    box-shadow:
      0 0 1px 2px rgba(255, 255, 255, 0.3),
      0 10px 3px -3px rgba(0, 0, 0, 0.2);
  }
  .button:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: var(--radius);
    border: 2.5px solid transparent;
    background:
      linear-gradient(var(--neutral-1), var(--neutral-2)) padding-box,
      linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.45))
        border-box;
    z-index: 0;
    transition: all 0.4s ease;
  }
  
  /* FIXED: Keep the same border gradient on hover */
  .button:hover::after {
    /* Removed scale transformation */
    box-shadow: inset 0 -1px 3px 0 rgba(255, 255, 255, 1);
    background: 
      linear-gradient(var(--neutral-1), var(--neutral-2)) padding-box,
      linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.45)) border-box;
  }
  
  .button::before {
    content: "";
    inset: 7px 6px 6px 6px;
    position: absolute;
    background: linear-gradient(to top, var(--neutral-1), var(--neutral-2));
    border-radius: 30px;
    filter: blur(0.5px);
    z-index: 2;
  }
  .state p {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .state .icon {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: scale(1.25);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .state .icon svg {
    overflow: visible;
  }

  /* Outline */
  .outline {
    position: absolute;
    border-radius: inherit;
    overflow: hidden;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.4s ease;
    inset: -2px -3.5px;
  }
  .outline::before {
    content: "";
    position: absolute;
    inset: -100%;
    background: conic-gradient(
      from 180deg,
      transparent 60%,
      var(--primary) 85%,
      transparent 100%
    );
    animation: spin 2.5s linear infinite;
    animation-play-state: paused;
    opacity: 0.7;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .button:hover .outline {
    opacity: 1;
  }
  .button:hover .outline::before {
    animation-play-state: running;
  }

  /* Letters */
  .state p span {
    display: block;
    opacity: 0;
    animation: slideDown 0.8s ease forwards calc(var(--i) * 0.03s);
    color: #000;
  }
  .button:hover p span {
    opacity: 1;
    animation: wave 0.5s ease forwards calc(var(--i) * 0.02s);
  }
  .button:focus p span {
    opacity: 1;
    animation: disapear 0.6s ease forwards calc(var(--i) * 0.03s);
  }
  @keyframes wave {
    30% {
      opacity: 1;
      transform: translateY(4px) translateX(0) rotate(0);
    }
    50% {
      opacity: 1;
      transform: translateY(-4px) translateX(0) rotate(0);
    }
    100% {
      opacity: 1;
      transform: translateY(0) translateX(0) rotate(0);
    }
  }
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-20px) translateX(5px) rotate(-90deg);
      filter: blur(5px);
    }
    30% {
      opacity: 1;
      transform: translateY(4px) translateX(0) rotate(0);
      filter: blur(0);
    }
    50% {
      opacity: 1;
      transform: translateY(-3px) translateX(0) rotate(0);
    }
    100% {
      opacity: 1;
      transform: translateY(0) translateX(0) rotate(0);
    }
  }
  @keyframes disapear {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateX(5px) translateY(20px);
      filter: blur(5px);
    }
  }

  /* Plane */
  .state--default .icon svg {
    animation: land 0.6s ease forwards;
  }
  .button:hover .state--default .icon {
    transform: rotate(45deg) scale(1.25);
  }
  .button:focus .state--default svg {
    animation: takeOff 0.8s linear forwards;
  }
  .button:focus .state--default .icon {
    transform: rotate(0) scale(1.25);
  }
  @keyframes takeOff {
    0% {
      opacity: 1;
    }
    60% {
      opacity: 1;
      transform: translateX(80px) rotate(45deg) scale(2.2);
    }
    100% {
      opacity: 0;
      transform: translateX(180px) rotate(45deg) scale(0);
    }
  }
  @keyframes land {
    0% {
      transform: translateX(-60px) translateY(30px) rotate(-50deg) scale(2);
      opacity: 0;
      filter: blur(3px);
    }
    100% {
      transform: translateX(0) translateY(0) rotate(0);
      opacity: 1;
      filter: blur(0);
    }
  }

  /* Contrail */
  .state--default .icon:before {
    content: "";
    position: absolute;
    top: 50%;
    height: 2px;
    width: 0;
    left: -5px;
    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5));
  }
  .button:focus .state--default .icon:before {
    animation: contrail 0.8s linear forwards;
  }
  @keyframes contrail {
    0% {
      width: 0;
      opacity: 1;
    }
    8% {
      width: 15px;
    }
    60% {
      opacity: 0.7;
      width: 80px;
    }
    100% {
      opacity: 0;
      width: 160px;
    }
  }

  /* States */
  .state {
    padding-left: 29px;
    z-index: 2;
    display: flex;
    position: relative;
  }
  .state--default span:nth-child(4) {
    margin-right: 5px;
  }
  .state--sent {
    display: none;
  }
  .state--sent svg {
    transform: scale(1.25);
    margin-right: 8px;
  }
  .button:focus .state--default {
    position: absolute;
  }
  .button:focus .state--sent {
    display: flex;
  }
  .button:focus .state--sent span {
    opacity: 0;
    animation: slideDown 0.8s ease forwards calc(var(--i) * 0.2s);
  }
  .button:focus .state--sent .icon svg {
    opacity: 0;
    animation: appear 1.2s ease forwards 0.8s;
  }
  @keyframes appear {
    0% {
      opacity: 0;
      transform: scale(4) rotate(-40deg);
      filter: blur(4px);
    }
    30% {
      opacity: 1;
      transform: scale(0.6);
      filter: blur(1px);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
      filter: blur(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const SendButton = ({ className, isSent }) => {
  return (
    <StyledWrapper className={className}>
      <button className={`button ${isSent ? "sent" : ""}`} type="submit" suppressHydrationWarning={true}>
        <div className="outline" />
        <div className="state state--default">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1.2em" width="1.2em">
              <g>
                <path
                  fill="currentColor"
                  d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                />
                <path
                  fill="currentColor"
                  d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                />
              </g>
            </svg>
          </div>
          <p>
            <span style={{ "--i": 0 }}>S</span>
            <span style={{ "--i": 1 }}>e</span>
            <span style={{ "--i": 2 }}>n</span>
            <span style={{ "--i": 3 }}>d</span>
            <span style={{ "--i": 4 }}> </span>
            <span style={{ "--i": 5 }}>M</span>
            <span style={{ "--i": 6 }}>e</span>
            <span style={{ "--i": 7 }}>s</span>
            <span style={{ "--i": 8 }}>s</span>
            <span style={{ "--i": 9 }}>a</span>
            <span style={{ "--i": 10 }}>g</span>
            <span style={{ "--i": 11 }}>e</span>
          </p>
        </div>
        <div className="state state--sent">
          <div className="icon">
            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  fill="currentColor"
                />
                <path
                  d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
          <p>
            <span style={{ "--i": 5 }}>S</span>
            <span style={{ "--i": 6 }}>e</span>
            <span style={{ "--i": 7 }}>n</span>
            <span style={{ "--i": 8 }}>t</span>
            <span style={{ "--i": 9 }}>!</span>
          </p>
        </div>
      </button>
    </StyledWrapper>
  )
}

// Container component definition
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0 24px;
  
  @media (max-width: 960px) {
    padding: 0px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 0 20px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  animation: ${fadeIn} 0.6s ease-out forwards;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(123, 31, 162, 0.05) 0%, rgba(0,0,0,0) 70%);
    transform: rotate(30deg);
    z-index: -1;
  }
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.3s ease;
  
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px rgba(123, 31, 162, 0.2);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    transition: opacity 0.3s ease;
    opacity: 0.7;
  }
  
  &:focus::placeholder {
    opacity: 0.4;
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 140px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px rgba(123, 31, 162, 0.2);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    transition: opacity 0.3s ease;
    opacity: 0.7;
  }
  
  &:focus::placeholder {
    opacity: 0.4;
  }
`

// Styled version of the SendButton for the contact form
const FormSendButton = styled(SendButton)`
  width: 100%;
  margin-top: 8px;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);

  .button {
    width: 100%;
    background: transparent;
  }
`

const Contact = () => {
  const [open, setOpen] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [isSent, setIsSent] = React.useState(false)
  const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    setIsSent(false)

    try {
      const formData = new FormData(form.current)
      formData.append("_captcha", "false")
      formData.append("_template", "table")

      const response = await fetch("https://formsubmit.co/ritheshsritheshs@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setOpen(true)
        setIsSent(true)
        form.current.reset()

        // Reset sent state after animation completes
        setTimeout(() => setIsSent(false), 4000)
      } else {
        console.error("Submission failed with status:", response.status)
        setError(true)
      }
    } catch (error) {
      // Only log actual network errors, not abort errors
      if (error.name !== "AbortError") {
        console.error("Network error:", error)
      }
      setError(true)
    }
  }

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact Form</Title>
        <Desc>Get in touch with me </Desc>

        <ContactForm ref={form} onSubmit={handleSubmit} suppressHydrationWarning={true}>
          <ContactTitle>Send a Message 📬</ContactTitle>

          <input type="hidden" name="_subject" value="New Contact Form Submission!" />
          <input type="hidden" name="_autoresponse" value="Thank you for your message! I'll get back to you soon." />

          <ContactInput
            placeholder="Your Full Name"
            name="name"
            required
            minLength={3}
            suppressHydrationWarning={true}
          />

          <ContactInput
            placeholder="Email Address"
            name="email"
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            suppressHydrationWarning={true}
          />

          <ContactInputMessage
            placeholder="Your message..."
            name="message"
            required
            minLength={10}
            suppressHydrationWarning={true}
          />

          {/* Using the animated Send Button component */}
          <FormSendButton isSent={isSent} suppressHydrationWarning={true} />
        </ContactForm>

        {/* Snackbar notifications */}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            severity="success"
            sx={{
              width: "100%",
              background: "linear-gradient(to right, #4CAF50, #2E7D32)",
              color: "white",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              boxShadow: "0 4px 20px rgba(76, 175, 80, 0.3)",
              borderRadius: "12px",
            }}
          >
            <span style={{ marginRight: "8px", fontSize: "20px" }}>✓</span>
            Message successfully sent!
          </Alert>
        </Snackbar>

        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={() => setError(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            severity="error"
            sx={{
              width: "100%",
              background: "linear-gradient(to right, #ff4444, #cc0000)",
              color: "white",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              boxShadow: "0 4px 20px rgba(255, 68, 68, 0.3)",
              borderRadius: "12px",
            }}
          >
            <span style={{ marginRight: "8px", fontSize: "20px" }}>⚠️</span>
            Error sending message. Please try again.
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  )
}

export default Contact
