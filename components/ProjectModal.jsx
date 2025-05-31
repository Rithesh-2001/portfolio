import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { CloseRounded } from '@mui/icons-material';
import { FaGithub } from 'react-icons/fa';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(36, 41, 46, 0.7);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(36, 41, 46, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(36, 41, 46, 0);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 8px;
  box-sizing: border-box;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding-top: max(8px, env(safe-area-inset-top));
  padding-bottom: max(8px, env(safe-area-inset-bottom));
  padding-left: max(8px, env(safe-area-inset-left));
  padding-right: max(8px, env(safe-area-inset-right));
`;

const ModalContent = styled.div`
  background: rgba(25, 25, 35, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: white;
  padding: 1.5rem;
  border-radius: 14px;
  width: 95%;
  max-width: min(95vw, 1000px);
  height: auto;
  max-height: min(90vh, 800px);
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1.5rem;
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.08) inset;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1.2rem;
    gap: 1.2rem;
    max-height: 95vh;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 12px;
    max-height: 98vh;
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 360px) {
    padding: 0.8rem;
    border-radius: 10px;
    gap: 0.8rem;
    max-height: 100vh;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 900px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 1200px) {
    height: 320px;
  }
  
  @media (max-width: 900px) {
    height: 260px;
  }

  @media (max-width: 768px) {
    height: 240px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }

  @media (max-width: 360px) {
    height: 160px;
    border-radius: 8px;
  }
`;

const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  
  @media (max-width: 900px) {
    padding-right: 0;
    min-height: 0; /* Fix for flexbox overflow */
  }
`;

const ScrollableContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding-right: 0.7rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 900px) {
    max-height: 45vh;
    padding-right: 0.3rem;
  }

  @media (max-width: 480px) {
    max-height: 50vh;
  }

  @media (max-width: 360px) {
    max-height: 55vh;
    padding-right: 0.2rem;
  }
`;

const CloseButton = styled(CloseRounded)`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  padding: 5px;
  color: white;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  font-size: 1.7rem !important;
  border: 1px solid rgba(255, 255, 255, 0.15);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  @media (max-width: 900px) {
    top: 0.9rem;
    right: 0.9rem;
    font-size: 1.5rem !important;
  }

  @media (max-width: 480px) {
    top: 0.6rem;
    right: 0.6rem;
    font-size: 1.3rem !important;
  }

  @media (max-width: 360px) {
    top: 0.4rem;
    right: 0.4rem;
    font-size: 1.1rem !important;
    padding: 3px;
  }
`;

const Header = styled.div`
  margin-bottom: 1.2rem;
  padding-right: 0.7rem;
  
  h2 {
    font-size: 1.7rem;
    margin-bottom: 0.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
  }
  
  p {
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.85rem;
  }

  @media (max-width: 900px) {
    margin-bottom: 1rem;
    
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 0.8rem;
    
    h2 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 360px) {
    margin-bottom: 0.6rem;
    padding-right: 0.3rem;
    
    h2 {
      font-size: 1.2rem;
      margin-bottom: 0.1rem;
    }
    
    p {
      font-size: 0.75rem;
    }
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow: visible;

  h3 {
    font-size: 1rem;
    margin-bottom: 0.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
  }
  
  p {
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.9rem;
  }

  @media (max-width: 900px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    
    h3 {
      font-size: 0.95rem;
      margin-bottom: 0.3rem;
    }
    
    p {
      font-size: 0.82rem;
      line-height: 1.55;
    }
  }

  @media (max-width: 360px) {
    gap: 0.7rem;
    
    h3 {
      font-size: 0.88rem;
    }
    
    p {
      font-size: 0.78rem;
      line-height: 1.5;
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.2rem;
  padding-bottom: 4px;

  @media (max-width: 360px) {
    gap: 0.35rem;
  }
`;

const TechPill = styled.span`
  padding: 0.3rem 0.8rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  white-space: nowrap;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 900px) {
    padding: 0.25rem 0.7rem;
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.22rem 0.6rem;
    font-size: 0.72rem;
  }

  @media (max-width: 360px) {
    padding: 0.18rem 0.55rem;
    font-size: 0.68rem;
    border-radius: 14px;
  }
`;

const GithubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 1.3rem;
  background: rgba(36, 41, 46, 0.95);
  color: white;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(36, 41, 46, 1);
    animation: ${pulse} 1.5s infinite;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(88, 101, 242, 0.1), transparent);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::before {
    opacity: 1;
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s;
    color: #f0f6fc;
  }
  
  &:hover svg {
    transform: scale(1.15);
  }

  @media (max-width: 900px) {
    padding: 0.8rem 1.1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 360px) {
    padding: 0.65rem 0.9rem;
    font-size: 0.8rem;
    gap: 0.5rem;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const ButtonText = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  letter-spacing: 0.2px;

  @media (max-width: 480px) {
    gap: 6px;
    font-size: 0.9rem;
  }

  @media (max-width: 360px) {
    gap: 5px;
    font-size: 0.85rem;
    letter-spacing: normal;
  }
`;

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose} />
                
                <ImageColumn>
                    <ModalImage src={project.image} alt={project.title} />
                    {project.githubUrl && (
                        <GithubButton
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ButtonText>
                                <FaGithub />
                                Source Code
                            </ButtonText>
                        </GithubButton>
                    )}
                </ImageColumn>

                <DetailsColumn>
                    <ScrollableContent>
                        <Header>
                            <h2>{project.title}</h2>
                            <p>{project.date}</p>
                        </Header>

                        <ContentSection>
                            {project.description && (
                                <div>
                                    <h3>Project Overview</h3>
                                    <p>{project.description}</p>
                                </div>
                            )}

                            {project.techStack && (
                                <div>
                                    <h3>Technology Stack</h3>
                                    <TechStack>
                                        {project.techStack.map((tech, index) => (
                                            <TechPill key={index}>{tech}</TechPill>
                                        ))}
                                    </TechStack>
                                </div>
                            )}
                        </ContentSection>
                    </ScrollableContent>
                </DetailsColumn>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ProjectModal;