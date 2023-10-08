import React, { useEffect } from 'react';
import './Header.css';


function Header() {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = '/header.js'; // Path relative to the public directory
    
        // Append the script to the document body
        document.body.appendChild(script);
    
        // Clean up the script when the component unmounts
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    return (
      <>
        <nav>
        <div class="logo"></div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Developer</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </nav>
      <header>
        <div class="headline">
          <div class="inner">
            <h1>Hackathon</h1>
            <p>Community Website</p>
          </div>
        </div>
      </header>
      </>
    );
  }
  
  export default Header;
  