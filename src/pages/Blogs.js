import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Blogs/BlogCell';
import data from '../data/blogs';

const Blogs = () => (
  <Main
    title="Blogs"
    description="Read Zhaoxun's blogs."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/blogs">Blogs</Link></h2>
          <p>Some blogs I wrote, most of which are quite casual. </p>
        </div>
      </header>
      {data.map((blog) => (
        <Cell
          data={blog}
          key={blog.title}
        />
      ))}
    </article>
  </Main>
);

export default Blogs;
