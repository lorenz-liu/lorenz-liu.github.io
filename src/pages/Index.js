import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const italic = {
  fontStyle: 'italic',
};

const Index = () => (
  <Main
    description={'Zhaoxun "Lorenz" Liu, a MScAC at UofT, an HCI practitioner, an amateur cellist and guitarist, and a sports enthusiast. '}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Welcome to My Site</h2>
          <p>
            I am trying my best to keep this website up-to-date.
          </p>
        </div>
      </header>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">statistics of mine</Link>, {' '}
        or <Link to="/contact">contact me</Link>.
      </p>
      <p style={italic}>
        &quot;Part of what made the Macintosh great was that the people working on it
        were musicians, and artists... they also happened to be the best
        computer scientists in the world&quot;, saying Steve Jobs.
      </p>
    </article>
  </Main>
);

export default Index;