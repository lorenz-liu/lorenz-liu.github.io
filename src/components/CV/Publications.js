import React from 'react';
import PropTypes from 'prop-types';

import Paper from './Publications/Paper';

const Publications = ({ data }) => (
  <div className="education">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Publications</h3>
    </div>
    {data.map((paper) => (
      <Paper
        data={paper}
        key={`${paper.title}`}
      />
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    authors: PropTypes.string,
    url: PropTypes.string,
    pub: PropTypes.string,
  })),
};

Publications.defaultProps = {
  data: [],
};

export default Publications;
