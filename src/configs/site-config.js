import React from 'react';
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Nazu Fernandes. All Rights Reserved.`,
  author: {
    name: 'Nazu Fernandes',
    accounts: [
      {
        url: 'https://github.com/nazufernandes',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://www.linkedin.com/in/nazu-fernandes',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      }  
    ]
  }
};

export default siteConfig;
