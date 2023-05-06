import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const italic = {
  fontStyle: 'italic',
};

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
        &quot;Part of what made the Macintosh great was that the people working on it
        were musicians, and artists... they also happened to be the best
        computer scientists in the world&quot;, saying Steve Jobs
      </p>
      <p>
        Visitors since the very first beginning:
      </p>
      <body>
        <script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?cl=d1d1d1&w=300&t=tt&d=bR57N-iXcu_la9k5JdvpKa6scUwEiCpJeRKLSUVdTNk&co=ffffff&cmo=6c5789&ct=808080&cmn=ff5353" />
      </body>
    </article>
  </Main>
);

export default Index;
