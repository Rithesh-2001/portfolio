'use client';
import React, { useEffect } from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import Typewriter from 'typewriter-effect';
import Button from './Button';  // Make sure this path is correct

import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
} from './HeroStyle';
import { Bio } from '../../data/constants';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StarryBackground from '../Background/StarryBackground';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', offset: 50 });
  }, []);

  return (
    <div id="about" className="mt-20" data-aos='zoom-in'>
      <StarryBackground/>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            {/* Replaced ResumeButton with Button component */}
            <Button 
              href={Bio.resume} 
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Resume
            </Button>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Tilt
              tiltEnable={true}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={false}
              scale={1.05}
              transitionSpeed={1500}
            >
              <div
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: '300px',
                  height: '300px',
                  boxShadow: '0 0 35px rgba(0, 255, 255, 0.5)',
                  backgroundColor: 'transparent',
                }}
              >
                <Image
                  src="/photo.jpg"
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                  }}
                />
              </div>
            </Tilt>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;