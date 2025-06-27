import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa'; // Facebook icon
import { FaInstagram } from 'react-icons/fa'; // Instagram icon

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="www.linkedin.com/in/sandeep-yadav-bb022222a" target="_blank" rel="noreferrer" >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Sandeep945060" target="_blank" rel="noreferrer" >
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100021525751717" target="_blank" rel="noreferrer" > {/* Add your Facebook profile link */}
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/sandeepy_18/" target="_blank" rel="noreferrer" > {/* Add your Instagram profile link */}
        <FaInstagram />
      </a>
    </div>
  )
}

export default HeaderSocials;
