"use client";

import React from 'react';
import {  FaLinkedinIn,  FaGlobe, FaLink, FaExclamationTriangle, FaHome, FaInfoCircle,  FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const handleReportIssue = () => {
    window.location.href = 'mailto:tarunkumar0011235@gmail.com';
  };

  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Explore Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaGlobe className="mr-2" />
            Explore
          </h2>
          <ul className="list-none p-0 m-0">
            {[
              { icon: <FaHome />, text: 'Home', link: '/' },
              { icon: <FaInfoCircle />, text: 'About Me', link: 'https://meek-manatee-28f187.netlify.app/' },
            ].map((item, index) => (
              <li key={index} className="mb-2 flex items-center">
                {item.icon}
                <Link href={item.link} className="ml-2 text-white hover:underline">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaLink className="mr-2" />
            Connect
          </h2>
          <ul className="list-none p-0 m-0">
            {[
              { icon: <FaGithub />, text: 'Github', link: 'https://github.com/Be-Useful' },
              { icon: <FaLinkedinIn />, text: 'LinkedIn', link: 'https://www.linkedin.com/in/tarun-kumar-4bb017215/' },
            ].map((item, index) => (
              <li key={index} className="mb-2 flex items-center">
                {item.icon}
                <Link href={item.link} className="ml-2 text-white hover:underline">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Report Issues Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaExclamationTriangle className="mr-2" />
            Report Technical Issues
          </h2>
          <button
            onClick={handleReportIssue}
            className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
          >
            Report Issue
          </button>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-400">
        &copy; {new Date().getFullYear()} Project Tank. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;