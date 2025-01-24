import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img
          style={{
            borderRadius: '20%',
          }}
          src={`${PUBLIC_URL}/images/me.jpg`}
          alt=""
        />
      </Link>
      <header>
        <h2>Zhaoxun Liu</h2>
        <p><a href="mailto:lorenz@null.net" target="_top">lorenz [at] null [dot] net</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Zhaoxun &quot;Lorenz&quot; Liu. <br />
        I am a Team Lead in Machine Learning at
        <a
          href="https://temertysimcentre.com/surgical-artificial-intelligence-research-academy-sara/"
          target="_blank"
          rel="noopener noreferrer"
        >the SARA Lab
        </a>,
        <a
          href="https://www.uhn.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University Health Network (UHN)
        </a>.<br />
        My interests are in interdisciplinary machine learning. <br />
        I am also an amateur cellist. <br />
        🥂 Cheers!
      </p>
      <ul className="actions vertical">
        <li>
          {!window.location.pathname.includes('/cv')
            ? <Link to="/cv" className="button">Curriculum Vitae</Link>
            : <Link to="/" className="button">About Me</Link>}
        </li>
        <li>
          <Link to="/tutoring" className="button orange">
            Hire Me As Your Tutor
          </Link>
        </li>
      </ul>
    </section>
    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Zhaoxun &quot;Lorenz&quot; Liu.</p>
    </section>
  </section>
);

export default SideBar;
