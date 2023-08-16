import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white font-light text-lg text-center py-4">
      <p>&copy; {new Date().getFullYear()} Myblog, Inc. All rights reserved</p>
    </footer>
  );
};

export default Footer;
