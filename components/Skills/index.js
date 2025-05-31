import React from 'react'
import styled from 'styled-components'
import Tilt from 'react-parallax-tilt'
import AOS from 'aos';
import { skills } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const GradientBorder = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  background: transparent;
  transition: all 0.3s;
  z-index: 1;
  
  /* Gradient border */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px; 
    padding: 2px;
    background: linear-gradient(45deg, #00ff75, #3700ff);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    transition: all 0.3s;
  }

  &:hover::before {
    background: linear-gradient(45deg, #00ff75, #3700ff);
    box-shadow: 0px 0px 20px 1px rgba(0, 255, 117, 0.6);
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
  }
`;

const Skill = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 18px 36px;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: scale(0.98);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.6);
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="skills" data-aos="fade-up">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt 
              key={skill.title || index}
              options={{
                max: 15,
                scale: 1.05,
                speed: 250,
                glare: true,
                "max-glare": 0.2,
              }}
            >
              <GradientBorder>
                <Skill>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillList>
                    {skill.skills.map((item, idx) => (
                      <SkillItem key={item.name || idx}>
                        <SkillImage src={item.image} />
                        {item.name}
                      </SkillItem>
                    ))}
                  </SkillList>
                </Skill>
              </GradientBorder>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;