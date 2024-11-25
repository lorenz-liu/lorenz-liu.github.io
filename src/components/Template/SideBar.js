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
        I am currently pursuing <a href="https://mscac.utoronto.ca" target="_blank" rel="noopener noreferrer">M.Sc. in Applied Computing at UofT CS</a>.
        My interest falls in Human-AI Interaction. <br />
        Fun fact: besides my profession in computer science, I am also an amateur cellist. <br />
        🥂 Cheers!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/cv') ? <Link to="/cv" className="button">Curriculum Vitae</Link> : <Link to="/" className="button">About Me</Link>}
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
