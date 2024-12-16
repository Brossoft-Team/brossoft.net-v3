import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="   py-8 px-4 md:px-40 flex flex-col items-center">
 
  <div className="w-full flex justify-between items-center mb-4">
    
    <div className="flex items-center space-x-4">
      <div className="w-14 h-14 flex items-center justify-center">
        <p className="font-ephesis text-4xl text-white">B</p>
      </div>
    </div>

    <div className="flex space-x-10">
      
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src="/assets/icons/github-sign.png"
          alt="Facebook"
          className="w-6 h-6 hover:opacity-80"
        />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src="/assets/icons/linkedin.png"
          alt="Twitter"
          className="w-6 h-6 hover:opacity-80"
        />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src="/assets/icons/instagram.png"
          alt="Instagram"
          className="w-6 h-6 hover:opacity-80"
        />
      </a>
    </div>
  </div>

  
  <div className="w-full text-center">
    <p className="text-xs text-gray-500">
      © 2019-∞ <span className="font-semibold text-gray-600">Brossoft AS.</span> All Rights Reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;
