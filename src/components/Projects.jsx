import React from 'react';
import { Box, Text, Heading } from './UI/Atoms';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Key <span className="gradient-text">Projects</span></h2>
        <div className="projects-grid">
          
          <div className="glass-card project-card reveal">
            <span className="project-accent">TRANSPORTATION</span>
            <h3>Downer SPA</h3>
            <p className="project-desc">A train schedule management portal for an Australia-based transportation project. The application enables users to view, update, and manage train schedules in real time through an intuitive and user-friendly interface. Designed and developed responsive user interfaces using React, improving user experience and application performance.</p>
            <div className="project-tags">
              <span>React</span>
              <span>.NET</span>
              <span>SQL Server</span>
            </div>
          </div>

          <div className="glass-card project-card reveal">
            <span className="project-accent">INTERNAL TOOL</span>
            <h3>HYDRA</h3>
            <p className="project-desc">Worked as a Frontend Developer on Hydra, an application accelerator and component generator designed to streamline and speed up mobile and web application development. Contributed to building scalable and reusable UI components, implemented common frameworks for theming, navigation, and component standardization.</p>
            <div className="project-tags">
              <span>React.js</span>
              <span>Component Library</span>
            </div>
          </div>

          <div className="glass-card project-card reveal">
            <span className="project-accent">HEALTHCARE / ENTERTAINMENT</span>
            <h3>AMN</h3>
            <p className="project-desc">Developed and enhanced UI features using React.js, including reusable components, filtering, multi-sort, and X-Grid. Implemented preference storage and key functionalities like Select All, Clear All, and Click Away. Used React Hook Form for form handling and resolved critical bugs to ensure smooth performance.</p>
            <div className="project-tags">
              <span>React.js</span>
              <span>React Hook Form</span>
              <span>X-Grid</span>
            </div>
          </div>

          <div className="glass-card project-card reveal">
            <span className="project-accent">ENTERTAINMENT</span>
            <h3>PVR CINEMAS</h3>
            <p className="project-desc">Worked as a React Developer on the PVR admin portal, developing responsive UI components and integrating REST APIs to manage and display data efficiently. Focused on building user-friendly interfaces and ensuring smooth communication between frontend and backend systems.</p>
            <div className="project-tags">
              <span>React</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="glass-card project-card reveal">
            <span className="project-accent">AUTOMATION</span>
            <h3>Leave Management System</h3>
            <p className="project-desc">Developed a Leave Management System using PowerApps Canvas App and SharePoint to streamline leave requests and approval workflows. Implemented role-based access for Employees, Managers, and HR. Designed intuitive custom forms and integrated SharePoint Lists with Power Automate.</p>
            <div className="project-tags">
              <span>PowerApps</span>
              <span>SharePoint</span>
              <span>Power Automate</span>
            </div>
          </div>

          <div className="glass-card project-card reveal">
            <span className="project-accent">MONITORING</span>
            <h3>NMS Email Monitoring Dashboard</h3>
            <p className="project-desc">Automated client email tracking, priority flagging, and escalation processes using the Power Platform. Built Power Automate flows to extract and store email data in SharePoint. Designed a real-time Power Apps dashboard to provide clear visibility of issues and highlight high-priority emails.</p>
            <div className="project-tags">
              <span>Power Platform</span>
              <span>Power Automate</span>
            </div>
          </div>

          <div className="glass-card project-card reveal">
            <span className="project-accent">MICROSERVICES</span>
            <h3>E-commerce Microservices</h3>
            <p className="project-desc">Contributed to a feature-rich e-commerce application built on a microservices architecture. Worked on the Order Service, handling order placement, modification, cancellation, and shipping workflows. Built RESTful APIs using .NET. Integrated real-time email notifications using SMTP and supported Azure deployment.</p>
            <div className="project-tags">
              <span>.NET</span>
              <span>Microservices</span>
              <span>Azure</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
