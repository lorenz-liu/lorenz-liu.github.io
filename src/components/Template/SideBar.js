import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/about" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Zhaoxun Liu</h2>
        <p><a href="mailto:laszlau@proton.me" target="_blank" rel="noopener noreferrer">laszlau@proton.me</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Zhaoxun &quot;Laszlo&quot; Liu. <br />
        I am currently pursuing <a href="https://mscac.utoronto.ca">MScAC at UofT</a>.
        My interests fall in the broad area of HCI,
        focusing on human-centered AI, extended reality and gaming technologies.
        For my leisure, I enjoy being a cellist, guitarist, and a sports enthusiast. <br />
        🥂 Cheers!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Zhaoxun &quot;Laszlo&quot; Liu.</p>
    </section>
  </section>
);

export default SideBar;
