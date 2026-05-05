import React from 'react';
import { GraduationCap, BookOpen, Settings, Monitor } from 'lucide-react';
import { Box, Text, Heading } from './UI/Atoms';

const Education = () => {
  return (
    <Box id="education">
      <Box className="container">
        <Heading level={2} className="section-title">My <span className="gradient-text">Education</span></Heading>
        <Box className="education-grid">
          <Box className="glass-card education-card reveal">
            <Box className="edu-header">
              <GraduationCap className="edu-icon" />
              <Heading level={3}>Bachelor of Engineering</Heading>
            </Box>
            <Box className="edu-details">
              <Text className="edu-major" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Settings size={18} /> Mechanical Engineering
              </Text>
              <Text className="edu-school">Global Academy Of Technology, IN</Text>
            </Box>
          </Box>

          <Box className="glass-card education-card reveal">
            <Box className="edu-header">
              <BookOpen className="edu-icon" />
              <Heading level={3}>Higher Secondary (12th Std)</Heading>
            </Box>
            <Box className="edu-details">
              <Text className="edu-major" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Monitor size={18} /> Computer Science
              </Text>
              <Text className="edu-school">Kendriya Vidyalaya</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
