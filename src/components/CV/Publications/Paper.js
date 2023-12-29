import React from 'react';
import PropTypes from 'prop-types';

const Paper = ({
  data: {
    title, authors, url, pub,
  },
}) => (
  <article className="jobs-container">
    <header>
      <p
        style={{
          textTransform: 'none',
          letterSpacing: '0.16em',
          fontSize: '.8em',
          marginBottom: 0,
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
      </p>
      <p
        style={{
          marginBottom: 0,
          fontSize: 11,
        }}
      >
        {authors}
      </p>
      <p
        style={{
          textTransform: 'none',
        }}
      >
        {pub}
      </p>
    </header>
  </article>
);

Paper.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    pub: PropTypes.string.isRequired,
  }).isRequired,
};

export default Paper;
