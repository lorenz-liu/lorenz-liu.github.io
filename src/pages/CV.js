import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/CV/Education';
import Publications from '../components/CV/Publications';
import Services from '../components/CV/Services';
import Industrial from '../components/CV/Industrial';
import Academic from '../components/CV/Academic';
import Skills from '../components/CV/Skills';
// import Courses from '../components/CV/Courses';
// import References from '../components/CV/References';

import degrees from '../data/cv/degrees';
import publications from '../data/cv/publications';
import work from '../data/cv/work';
import academic from '../data/cv/academic';
import services from '../data/cv/services';
import { skills, categories } from '../data/cv/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Publications: () => <Publications data={publications} />,
  Services: () => <Services data={services} />,
  Industrial: () => <Industrial data={work} />,
  Academic: () => <Academic data={academic} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  // Courses: () => <Courses data={courses} />,
  // References: () => <References />,
};

const CV = () => (
  <Main
    title="Curriculum Vitae"
    description="Zhaoxun's CV."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <p>
            <a href={`${process.env.PUBLIC_URL}files/Zhaoxun_CV.pdf`} target="_blank" rel="noreferrer">
              PDF Version
            </a>
          </p>
          <h2><Link to="cv">Curriculum Vitae</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a
                  style={{
                    marginRight: 20,
                  }}
                  href={`#${sec.toLowerCase()}`}
                >
                  {`${sec}`}
                </a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default CV;
