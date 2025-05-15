'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import Image from 'next/image';

// Styled Components
const Container = styled.div`
  background-attachment: fixed;
  padding: 80px 0;
  color: #fff;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: white;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 75%;
  background: #854ce6;
  box-shadow: 0 0 10px #854ce6, 0 0 20px #854ce6;
  z-index: 1;
`;

// 👇 notice $left here — it's a transient prop for styled-components
const TimelineItem = styled.div`
  display: flex;
  justify-content: ${({ $left }) => ($left ? 'flex-start' : 'flex-end')};
  margin: 50px 0;
  position: relative;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #854ce6;
  padding: 20px;
  border-radius: 16px;
  width: 45%;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 15px rgba(133, 76, 230, 0.4);
  z-index: 2;
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
  box-shadow: 0 0 10px white;
  z-index: 3;
`;

const DotImage = ({ src, alt }) => (
  <Dot>
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      style={{ objectFit: 'cover', borderRadius: '50%' }}
    />
  </Dot>
);

const EducationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container id="education">
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
            <ContentWrapper>
              <EducationCard education={edu} />
            </ContentWrapper>
          </TimelineItem>
        );
      })}
    </Container>
  );
};

export default EducationSection;
