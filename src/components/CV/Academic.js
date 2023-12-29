import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Academic = ({ data }) => (
  <div className="education">
    <div className="link-to" id="academic" />
    <div className="title">
      <h3>Academic</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={`${job.name}-${job.position}`}
      />
    ))}
  </div>
);

Academic.propTypes = {
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

Academic.defaultProps = {
  data: [],
};

export default Academic;
