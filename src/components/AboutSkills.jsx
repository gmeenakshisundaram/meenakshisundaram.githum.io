import React from 'react';
import { Box, Text, Heading } from './UI/Atoms';

const AboutSkills = () => {
  return (
    <Box id="about">
      <Box className="container">
        <Box className="about-grid">
          <Box className="about-text reveal">
            <Heading level={2} className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              About <span className="gradient-text">Me</span>
            </Heading>
            <Text>I am a Full-Stack Developer with expertise in .NET (C#), SQL, React, and Python, with hands-on experience in building scalable, high-performance web applications.</Text>
            <Text>Experienced across multiple domains including entertainment, healthcare, and transportation management systems. Adept at developing user-friendly interfaces, integrating AI solutions, and collaborating within agile teams to deliver high-quality solutions.</Text>
          </Box>

          <Box className="skills-container reveal" id="skills">
            <Heading level={2} className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Technical <span className="gradient-text">Skills</span>
            </Heading>

            <Box className="skill-category">
              <Heading level={3}>Frontend</Heading>
              <Box className="skill-tags">
                <Box className="skill-tag">React.js</Box>
                <Box className="skill-tag">React Native</Box>
                <Box className="skill-tag">JavaScript (ES6+)</Box>
                <Box className="skill-tag">TypeScript</Box>
                <Box className="skill-tag">HTML5 / CSS3</Box>
                <Box className="skill-tag">Vite</Box>
              </Box>
            </Box>

            <Box className="skill-category">
              <Heading level={3}>Backend & Database</Heading>
              <Box className="skill-tags">
                <Box className="skill-tag">.NET / C#</Box>
                <Box className="skill-tag">Web API</Box>
                <Box className="skill-tag">RESTful APIs</Box>
                <Box className="skill-tag">SQL Server</Box>
              </Box>
            </Box>

            <Box className="skill-category">
              <Heading level={3}>Cloud & Tools</Heading>
              <Box className="skill-tags">
                <Box className="skill-tag">Microsoft Azure</Box>
                <Box className="skill-tag">Git</Box>
                <Box className="skill-tag">Visual Studio / VS Code</Box>
              </Box>
            </Box>

            <Box className="skill-category">
              <Heading level={3}>Power Platform & Low-Code</Heading>
              <Box className="skill-tags">
                <Box className="skill-tag">Power Apps</Box>
                <Box className="skill-tag">Power Automate</Box>
                <Box className="skill-tag">SharePoint</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSkills;
