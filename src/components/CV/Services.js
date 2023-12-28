import React from 'react';
import PropTypes from 'prop-types';

import Position from './Services/Position';

const Services = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Services</h3>
    </div>
    {data.map((job) => (
      <Position
        data={job}
        key={`${job.name}-${job.position}`}
      />
    ))}
  </div>
);

Services.propTypes = {
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

Services.defaultProps = {
  data: [],
};

export default Services;
