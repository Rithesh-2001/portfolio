'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import Image from 'next/image';

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0;
  overflow: hidden;
  
  /* Dark overlay with transparency */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 8, 24, 0.85);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 30px;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 160px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: calc(100% - 200px);
  background: #854ce6;
  z-index: 1;

  @media (max-width: 768px) {
    left: 20px;
    transform: none;
    height: calc(100% - 100px);
    top: 100px;
    width: 2px;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${({ $left }) => ($left ? 'flex-start' : 'flex-end')};
  margin: 30px 0;
  position: relative;
  z-index: 2;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin: 25px 0;
  }
`;

const CardWrapper = styled.div`
  width: calc(50% - 60px);
  padding: 20px;
  border-radius: 10px;
  background: rgba(10, 8, 24, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(133, 76, 230, 0.5);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  margin: ${({ $left }) => $left ? '0 60px 0 0' : '0 0 0 60px'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin: 0 0 0 60px;
    padding: 15px;
  }
`;

const Dot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background: white;
  box-shadow: 0 0 10px #fff;
  z-index: 3;

  @media (max-width: 768px) {
    left: 20px;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
  }
`;

const DotImage = ({ src, alt }) => (
  <Dot>
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      style={{ objectFit: 'cover' }}
    />
  </Dot>
);

const EducationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <SectionContainer id="education">
      <ContentContainer>
        <SectionTitle data-aos="fade-up">Education</SectionTitle>
        <TimelineLine />
        {education.map((edu, index) => {
          const left = index % 2 === 0;
          return (
            <TimelineItem
              key={index}
              $left={left}
              data-aos={left ? 'fade-right' : 'fade-left'}
            >
              <DotImage src={edu.img} alt={edu.school} />
              <CardWrapper $left={left}>
                <EducationCard education={edu} />
              </CardWrapper>
            </TimelineItem>
          );
        })}
      </ContentContainer>
    </SectionContainer>
  );
};

export default EducationSection;