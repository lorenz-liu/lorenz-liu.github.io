import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Tutoring = () => (
  <Main
    title="Tutoring"
    description="Hire Zhaoxun as Your Tutor"
  >
    <article className="post" id="tutoring">
      <header>
        <div className="title">
          <h2><Link to="/tutoring">Tutoring</Link></h2>
          <p>
            I offer tutoring in computer science,
            academic development, and English language tests.
          </p>
        </div>
      </header>

      <div className="tutoring-areas">
        <section>
          <h3>Computer Science</h3>
          <ul>
            <li>Programming, Data Structures, Algorithms</li>
            <li>Machine Learning Fundamentals</li>
            <li>Full-Stack Development</li>
            <li>Graphics & Game Engines</li>
          </ul>
        </section>

        <section>
          <h3>Academic Development</h3>
          <ul>
            <li>
              Computer Science Master/PhD&apos;s Applications to Top Universities Worldwide
            </li>
            <li>Research & Publishing to Top-Tier Conferences and Journals</li>
          </ul>
        </section>

        <section>
          <h3>English Language Tests</h3>
          <ul>
            <li>TOEFL</li>
            <li>PTE Core/Academic</li>
          </ul>
        </section>

        <section className="contact-info">
          <p>
            💯 Interested in tutoring? <Link to="/contact">Contact me</Link> to discuss your learning
            goals.
          </p>
        </section>
      </div>
    </article>
  </Main>
);

export default Tutoring;
