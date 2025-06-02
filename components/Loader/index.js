"use client"
import styled from "styled-components"

const Loader = () => {
  return (
    <StyledWrapper>
      <div id="load">
        <div>H</div>
        <div>S</div>
        <div>E</div>
        <div>H</div>
        <div>T</div>
        <div>I</div>
        <div>R</div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at center, rgb(0, 0, 0) 0%, rgb(5, 0, 34) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;

  #load {
    position: relative;
    width: 600px;
    height: 36px;
    overflow: visible;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;

    @media (max-width: 768px) {
      width: 350px;
      height: 30px;
    }

    @media (max-width: 480px) {
      width: 280px;
      height: 24px;
    }
  }

  #load div {
    position: absolute;
    width: 20px;
    height: 36px;
    opacity: 0;
    font-family: 'Inter', Helvetica, Arial, sans-serif;
    font-size: 36px;
    font-weight: 700;
    animation: move 2s linear infinite;
    -o-animation: move 2s linear infinite;
    -moz-animation: move 2s linear infinite;
    -webkit-animation: move 2s linear infinite;
    transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    color: #854CE6;
    text-shadow: 0 0 10px rgba(133, 76, 230, 0.5);

    @media (max-width: 768px) {
      font-size: 30px;
      height: 30px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
      height: 24px;
      width: 16px;
    }
  }

  #load div:nth-child(2) {
    animation-delay: 0.2s;
    -o-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -webkit-animation-delay: 0.2s;
  }

  #load div:nth-child(3) {
    animation-delay: 0.4s;
    -o-animation-delay: 0.4s;
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.4s;
  }

  #load div:nth-child(4) {
    animation-delay: 0.6s;
    -o-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    -webkit-animation-delay: 0.6s;
  }

  #load div:nth-child(5) {
    animation-delay: 0.8s;
    -o-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    -webkit-animation-delay: 0.8s;
  }

  #load div:nth-child(6) {
    animation-delay: 1s;
    -o-animation-delay: 1s;
    -moz-animation-delay: 1s;
    -webkit-animation-delay: 1s;
  }

  #load div:nth-child(7) {
    animation-delay: 1.2s;
    -o-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
    -webkit-animation-delay: 1.2s;
  }

  @keyframes move {
    0% {
      left: 0;
      opacity: 0;
    }

    35% {
      left: 41%;
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    65% {
      left: 59%;
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    100% {
      left: 100%;
      -moz-transform: rotate(-180deg);
      -webkit-transform: rotate(-180deg);
      -o-transform: rotate(-180deg);
      transform: rotate(-180deg);
      opacity: 0;
    }
  }

  @-moz-keyframes move {
    0% {
      left: 0;
      opacity: 0;
    }

    35% {
      left: 41%;
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    65% {
      left: 59%;
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    100% {
      left: 100%;
      -moz-transform: rotate(-180deg);
      transform: rotate(-180deg);
      opacity: 0;
    }
  }

  @-webkit-keyframes move {
    0% {
      left: 0;
      opacity: 0;
    }

    35% {
      left: 41%;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    65% {
      left: 59%;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    100% {
      left: 100%;
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
      opacity: 0;
    }
  }

  @-o-keyframes move {
    0% {
      left: 0;
      opacity: 0;
    }

    35% {
      left: 41%;
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    65% {
      left: 59%;
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    100% {
      left: 100%;
      -o-transform: rotate(-180deg);
      transform: rotate(-180deg);
      opacity: 0;
    }
  }
`

export default Loader
