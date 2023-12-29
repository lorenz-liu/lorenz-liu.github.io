import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Position = ({
  data: {
    name, url, school, position, startDate, endDate,
  },
}) => (
  <article className="jobs-container">
    <header>
      <p
        style={{
          textTransform: 'none',
          letterSpacing: '0.16em',
          fontSize: '.8em',
          marginBottom: '.1em',
        }}
      >
        {name}
      </p>
      <p
        style={{
          marginBottom: 0,
        }}
      >
        {position}
      </p>
      <p
        style={{
          textTransform: 'none',
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">{school}</a>, {dayjs(startDate).format('MMMM YYYY')} - {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}
      </p>
    </header>
  </article>
);

Position.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Position;
