"use client"

import React, { useState } from "react"
import styled from "styled-components"
import ProjectCard from "../Cards/ProjectCards"
import ProjectModal from "../ProjectModal"
import { projects } from "../../data/constants"

const Container = styled.div`
    background: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640px) {
        padding: 32px 16px;
    }
    z-index: 1;
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 80px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

// Fixed Issue #1: Changed active prop to use data-active attribute instead
const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ $active, theme }) =>
      $active &&
      `
    background: ${theme.primary + 20};
    `}
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`

const Projects = () => {
  const [toggle, setToggle] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>I have worked on various projects across different domains. Here are some highlights.</Desc>
        <ToggleButtonGroup>
          {["all", "web app", "android app", "machine learning"].map((category) => (
            <React.Fragment key={category}>
              {/* Fixed Issue #1: Changed active={toggle === category} to $active={toggle === category} */}
              <ToggleButton $active={toggle === category} onClick={() => setToggle(category)}>
                {category.replace("-", " ").toUpperCase()}
              </ToggleButton>
              {category !== "machine learning" && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {(toggle === "all" ? projects : projects.filter((item) => item.category === toggle)).map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </CardContainer>

        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </Wrapper>
    </Container>
  )
}

export default Projects
