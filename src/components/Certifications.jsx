import React from 'react';
import { Award, ShieldCheck, Cpu } from 'lucide-react';
import { Box, Text, Heading } from './UI/Atoms';

const Certifications = () => {
  const certs = [
    {
      title: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
      issuer: "Microsoft",
      icon: <Cpu className="edu-icon" />
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      icon: <ShieldCheck className="edu-icon" />
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      icon: <Award className="edu-icon" />
    }
  ];

  return (
    <Box id="certifications">
      <Box className="container">
        <Heading level={2} className="section-title">Certifications</Heading>
        <Box className="education-grid">
          {certs.map((cert, index) => (
            <Box key={index} className="glass-card education-card reveal">
              <Box className="edu-header">
                {cert.icon}
                <Heading level={3}>{cert.title}</Heading>
              </Box>
              <Box className="edu-details">
                <Text className="edu-school">{cert.issuer}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Certifications;
