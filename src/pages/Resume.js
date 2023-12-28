import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Industrial from '../components/Resume/Industrial';
import Academic from '../components/Resume/Academic';
import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import academic from '../data/resume/academic';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Industrial: () => <Industrial data={work} />,
  Academic: () => <Academic data={academic} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  // Courses: () => <Courses data={courses} />,
  // References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Zhaoxun's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <p>
            <a href={`${process.env.PUBLIC_URL}files/Zhaoxun_CV.pdf`} target="_blank" rel="noreferrer">
              PDF Version
            </a>
          </p>
          <h2><Link to="resume">Resume</Link></h2>
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

export default Resume;
