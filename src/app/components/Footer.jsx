import React from "react";

const Footer = () => {
  return (
    <div className="max-w-3xl mx-auto px-10 py-4 ">
      <p className="text-xs text-gray-400 text-center"> &copy; {new Date().getFullYear()} All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
