import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 16px;
  box-sizing: border-box;

  /* Glassmorphism background */
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  /* Safe area for mobile browsers */
  padding-top: max(16px, env(safe-area-inset-top));
  padding-bottom: max(16px, env(safe-area-inset-bottom));
  padding-left: max(16px, env(safe-area-inset-left));
  padding-right: max(16px, env(safe-area-inset-right));
`;

const Wrapper = styled.div`
  /* Glass card effect */
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.text_primary};
  border-radius: 16px;
  width: 100%;
  max-width: 800px;
  height: auto;
  max-height: calc(100vh - 32px - env(safe-area-inset-top) - env(safe-area-inset-bottom));
  padding: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 
    0 8px 32px 0 rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 16px;
    max-height: calc(100vh - 32px - env(safe-area-inset-top) - env(safe-area-inset-bottom));
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 12px;
    max-height: calc(100vh - 24px - env(safe-area-inset-top) - env(safe-area-inset-bottom));
  }
`;

// Added a scrollable content container
const ScrollableContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;
  margin-top: 16px;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 12px;
    max-height: 50vh; /* Limit height for mobile */
  }

  @media (max-width: 480px) {
    margin-top: 8px;
    max-height: 55vh; /* More space for small devices */
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 30vh;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    max-height: 25vh;
  }

  @media (max-width: 480px) {
    max-height: 20vh;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: visible; /* Changed to visible */
  flex: 1;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Date = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;

  @media (max-width: 480px) {
    gap: 6px;
    margin: 6px 0;
  }
`;

const Tag = styled.div`
  font-size: 14px;
  padding: 4px 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};
  color: ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 3px 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 6px;
  }
`;

const Desc = styled.div`
  font-size: 15px;
  line-height: 1.4;
  overflow: visible; /* Changed to visible */
  flex: 1;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 12px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    gap: 8px;
  }
`;

const Button = styled.a`
  flex: 1;
  text-align: center;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 13px;
  }
`;

const CloseButton = styled(CloseRounded)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 4px;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    font-size: 28px !important;
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 8px;
    font-size: 24px !important;
  }
`;

const Index = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    
    return (
        <Modal 
            open={true} 
            onClose={() => setOpenModal({ state: false, project: null })}
            BackdropProps={{
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                }
            }}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999
            }}
        >
            <Container>
                <Wrapper>
                    <CloseButton 
                        onClick={() => setOpenModal({ state: false, project: null })}
                        style={{ fontSize: '32px' }}
                    />
                    {/* Added ScrollableContent wrapper */}
                    <ScrollableContent>
                        <Image src={project?.image} alt={project?.title} />
                        <TextContent>
                            <Title>{project?.title}</Title>
                            <Date>{project?.date}</Date>
                            <Tags>
                                {project?.tags?.map((tag, index) => (
                                    <Tag key={index}>{tag}</Tag>
                                ))}
                            </Tags>
                            <Desc>{project?.description}</Desc>
                        </TextContent>
                    </ScrollableContent>
                    <ButtonGroup>
                        <Button 
                            href={project?.github} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Code
                        </Button>
                        <Button 
                            href={project?.webapp} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live App
                        </Button>
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default Index;