import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Zhaoxun "Laszlo" Liu, a MScAC at UofT, a Human-Centered AI practitioner, an amateur cellist and guitarist, and a sports enthusiast. '}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Welcome to My Site</h2>
          <p>
            I introduce myself, record myself, and propagate myself here.
          </p>
        </div>
      </header>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p style={italic}>
        "Part of what made the Macintosh great was that the people working on it
        were musicians, and artists... they also happened to be the best
        computer scientists in the world", saying Steve Jobs
      </p>
      <p> Source available <a href="https://github.com/LaszLau/LaszLau.github.io">here</a>.</p>
    </article>
  </Main>
);

const italic = {
  fontStyle: 'italic',
};

export default Index;
