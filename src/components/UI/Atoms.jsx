import React from 'react';

// A versatile container component that replaces <div>
export const Box = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

// A text component that replaces <p>
export const Text = ({ children, className = '', ...props }) => (
  <p className={className} {...props}>
    {children}
  </p>
);

// A heading component that replaces <h1>, <h2>, <h3>
export const Heading = ({ children, level = 2, className = '', ...props }) => {
  const Tag = `h${level}`;
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
};
