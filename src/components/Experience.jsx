import React from 'react';
import { Box, Text, Heading } from './UI/Atoms';

const Experience = () => {
  return (
    <Box id="experience">
      <Box className="container">
        <Box className="section-header reveal">
          <Heading level={2} className="timeline-main-title">Experience<span className="cyan-dot">.</span></Heading>
          <Box className="title-underline"></Box>
        </Box>

        <Box className="timeline-container">

          {/* IBM */}
          <Box className="timeline-card reveal">
            <Box className="company-header">
              <Box className="company-dates">Feb 2026 - Present</Box>
              <Heading level={3}>IBM</Heading>
              <Box className="company-meta">Full-time · 4 mos</Box>
            </Box>

            <Box className="role-timeline">
              <Box className="role-item">
                <Box className="role-dot"></Box>
                <Heading level={4}>Application Developer</Heading>
                <Box className="role-meta">
                  <Box className="role-dates">Feb 2026 - Present · 4 mos</Box>
                  <Box className="role-location">Bangalore</Box>
                </Box>
                <Box className="role-content">
                  <Text><strong>Achievements:</strong></Text>
                  <Text>1. Received recognition from the client side.</Text>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Neudesic */}
          <Box className="timeline-card reveal">
            <Box className="company-header">
              <Box className="company-dates">Oct 2023 - Jan 2026</Box>
              <Heading level={3}>Neudesic, an IBM Company</Heading>
              <Box className="company-meta">Full-time · 2 yrs 4 mos</Box>
            </Box>

            <Box className="role-timeline">
              <Box className="role-item">
                <Box className="role-dot"></Box>
                <Heading level={4}>Consultant II</Heading>
                <Box className="role-meta">
                  <Box className="role-dates">Nov 2025 - Jan 2026 · 3 mos</Box>
                  <Box className="role-location">Bangalore, India</Box>
                </Box>
                <Box className="role-content">
                  <Text>Actively working with .NET, React,  and SQL to build scalable applications. Experienced in handling multiple projects simultaneously and highly enthusiastic about learning and adopting new technologies.</Text>
                </Box>
              </Box>

              <Box className="role-item">
                <Box className="role-dot"></Box>
                <Heading level={4}>Consultant I</Heading>
                <Box className="role-meta">
                  <Box className="role-dates">Nov 2024 - Nov 2025 · 1 yr 1 mo</Box>
                  <Box className="role-location">Bangalore, India</Box>
                </Box>
                <Box className="role-content">
                  <Text>Actively working on multiple projects with a primary focus on React, .NET Passionate about building scalable applications and driving innovation through cutting-edge technologies.</Text>
                </Box>
              </Box>

              <Box className="role-item">
                <Box className="role-dot"></Box>
                <Heading level={4}>Associate Consultant</Heading>
                <Box className="role-meta">
                  <Box className="role-dates">Oct 2023 - Oct 2024 · 1 yr 1 mo</Box>
                  <Box className="role-location">Bengaluru, India</Box>
                </Box>
                <Box className="role-content">
                  <Text>Part of the App Innovation Team, focused on modernizing and enhancing application capabilities.</Text>
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
