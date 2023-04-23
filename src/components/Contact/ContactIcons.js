import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';
import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        {s.label !== 'WeChat' ? <a href={s.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={s.icon} /></a> : <Link to="/contact"><FontAwesomeIcon icon={s.icon} /></Link>}
      </li>
    ))}
  </ul>
);

export default ContactIcons;
