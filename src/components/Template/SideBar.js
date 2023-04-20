import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/About" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Zhaoxun Liu</h2>
        <p><a href="mailto:laszlau@proton.me" target={'_blank'}>laszlau@proton.me</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Zhaoxun "Laszlo" Liu. I am currently pursuing <a href="https://mscac.utoronto.ca">MScAC at UofT</a>.
        I am a Human-Centered AI practitioner, an amateur cellist and guitarist, and a sports enthusiast.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Zhaoxun "Laszlo" Liu.</p>
    </section>
  </section>
);

export default SideBar;
