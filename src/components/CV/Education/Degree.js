import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="department">{data.department}</p>
      <p className="school"><a href={data.link} target="_blank" rel="noopener noreferrer">{data.school}</a>, {data.year} - {data.end}</p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    end: PropTypes.number,
  }).isRequired,
};

export default Degree;
