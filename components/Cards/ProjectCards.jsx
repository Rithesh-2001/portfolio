import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`

const Card = styled.div`
    width: 300px;
    height: 320px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 20px 4px rgba(0,0,0,0.3);
    }
`;
const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 2px solid ${({ theme }) => theme.primary + 50};
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`
const TextContainer = styled.div`
    padding: 1rem;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 8px;

`

const Date = styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({ project, onClick }) => {
    return (
        <Card onClick={onClick}>
            <Image src={project.image} alt={project.title} />
            <TextContainer>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
            </TextContainer>
        </Card>
    );
};

export default ProjectCards;