import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>SANDEEP YADAV</h1>
        <h5 className="text-yellow-500">(Front-end Developer)</h5>

        <h4 className="text-light">"I am an aspiring Full Stack Developer, specializing in the MERN stack
        to build scalable, efficient, and user-friendly applications. I have a
        passion for solving real-world problems through clean, maintainable
        code and modern web technologies."</h4>
        
        <CTA />
        <a href="#contact" className="scroll__down">Scroll Down</a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
