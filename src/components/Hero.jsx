import React from 'react';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import { Box, Text, Heading } from './UI/Atoms';

const Hero = () => {
  return (
    <Box id="hero" className="hero">
      <Box className="container">
        <Box className="hero-content reveal">
          <Box className="hero-profile">
            <img src="profile-hero.jpg" alt="G Meenakshi Sundaram" className="hero-avatar" />
            <Box className="hero-text-content">
              <Heading level={1}>Hi, I'm <span className="text-purple">G Meenakshi</span> <br/><span className="text-cyan">Sundaram</span></Heading>
              <Box className="role-container">
                <Heading level={2} className="hero-role">Software Developer</Heading>
                <Box className="role-line"></Box>
              </Box>
              <Text className="hero-description">"As a dedicated Software Engineer, I'm passionate about the art of coding and the science of problem-solving. With a strong foundation in computer science and a creative approach to development, I thrive on turning complex ideas into elegant, functional software solutions. Welcome to my portfolio, where you can explore my journey in transforming ideas into digital reality."</Text>
              
              <Box className="hero-action-row">
                <Box className="hero-btns">
                  <a href="#contact" className="btn btn-primary">Hire Me</a>
                  <a href="resume.pdf" download className="btn btn-secondary">MY CV</a>
                </Box>
              </Box>
              
              <Box className="social-icons">
                <a href="https://www.instagram.com/g_meenakshi_s/" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
                <a href="https://github.com/gmeenakshisundaram" target="_blank" rel="noreferrer"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/g-meenakshi-sundaram-490977229/" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
