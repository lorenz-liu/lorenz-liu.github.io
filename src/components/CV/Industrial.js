import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Industrial = ({ data }) => (
  <div className="education">
    <div className="link-to" id="industrial" />
    <div className="title">
      <h3>Industrial</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={`${job.name}-${job.position}`}
      />
    ))}
  </div>
);

Industrial.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    position: PropTypes.string,
    url: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
  })),
};

Industrial.defaultProps = {
  data: [],
};

export default Industrial;
