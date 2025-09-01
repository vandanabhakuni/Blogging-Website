import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t">
      <p>© {new Date().getFullYear()} AI Blog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
