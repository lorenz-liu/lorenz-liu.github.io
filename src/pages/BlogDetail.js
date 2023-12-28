import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const BlogDetail = () => {
  const { blog } = useParams();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import(`../data/blogs/${blog}`)
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main
      title="About"
      description='Learn about Zhaoxun "Lorenz" Liu'
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <a href="/blogs">GO BACK</a>
            <h2>{blog}</h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default BlogDetail;
