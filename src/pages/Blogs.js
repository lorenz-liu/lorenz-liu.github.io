import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Blogs/BlogCell';
import data from '../data/projects';

const Blogs = () => (
  <Main
    title="Blogs"
    description="Read Zhaoxun's blogs."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/blogs">Blogs</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Blogs;
