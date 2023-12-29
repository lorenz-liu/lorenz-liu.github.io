import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Position = ({
  data: {
    name, position, startDate, endDate, summary, highlights,
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
          marginBottom: 25,
        }}
      >
        {dayjs(startDate).format('MMMM YYYY')} - {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}
      </p>
    </header>
    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {summary}
      </Markdown>
    ) : null}
    {highlights ? (
      <ul className="points">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

Position.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Position;
