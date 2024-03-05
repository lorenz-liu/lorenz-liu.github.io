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
        <p><a href="mailto:lorenz@null.net" target="_blank" rel="noopener noreferrer">lorenz@null.net</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Zhaoxun &quot;Lorenz&quot; Liu. <br />
        I am currently pursuing <a href="https://mscac.utoronto.ca" target="_blank" rel="noopener noreferrer">MScAC at UofT</a>.
        My academic interest falls in the area of AI-Driven Human-Computer Interaction.
        For my leisure, I enjoy being an amateur cellist, guitarist, and a sports enthusiast. <br />
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

    <div>
      <script
        type="text/javascript"
        id="clustrmaps"
        src="//cdn.clustrmaps.com/map_v2.js?cl=230505&w=450&t=tt&d=HfwB-ysPDBgnoPg89MNPfnXkiJm3BPHh37SYx1zeuw8&co=f4f4f4&ct=d1d1d1&cmo=b6c7f2&cmn=ffa500"
      />
    </div>
  </section>
);

export default SideBar;
