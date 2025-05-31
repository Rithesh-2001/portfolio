import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    position: relative;
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    background: rgba(10, 8, 24, 0.6);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(133, 76, 230, 0.5);
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            45deg,
            rgba(133, 76, 230, 0.1),
            rgba(76, 140, 230, 0.1)
        );
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 0;
    }

    &:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 8px 24px rgba(133, 76, 230, 0.2);

        &::before {
            transform: translate(-50%, -50%) scale(2);
        }
    }
`;

const TopSection = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    position: relative;
    z-index: 1;
`;

const InstitutionLogo = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 6px;
    object-fit: cover;
    transition: transform 0.3s ease;
    background: white;
    padding: 2px;
    
    ${Card}:hover & {
        transform: scale(1.1);
    }
`;

const Details = styled.div`
    flex: 1;
`;

const InstitutionName = styled.h3`
    font-size: 16px;
    margin: 0;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.3s ease;
`;

const DegreeInfo = styled.p`
    font-size: 14px;
    margin: 4px 0;
    color: ${({ theme }) => theme.text_secondary};
    transition: color 0.3s ease;
`;

const DateRange = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.text_secondary + 99};
`;

const Grade = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 8px;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;

    strong {
        color: ${({ theme }) => theme.primary};
    }
`;

const EducationCard = ({ education }) => {
    return (
        <Card>
            <TopSection>
                <InstitutionLogo src={education.img} alt={education.school} />
                <Details>
                    <InstitutionName>{education.school}</InstitutionName>
                    <DegreeInfo>{education.degree}</DegreeInfo>
                    <DateRange>{education.date}</DateRange>
                </Details>
            </TopSection>
            <Grade><strong>Grade:</strong> {education.grade}</Grade>
        </Card>
    );
};

export default EducationCard;