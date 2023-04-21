import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const WeChatPart = () => (
  <div className="email-at">
    <p>
      Feel free to get in touch. My WeChat ID: <br />
    </p>
    <a href="/contact">
      LuvPungGaw
    </a>
  </div>
);

const EmailPart = () => (
  <div className="email-at">
    <p>Feel free to get in touch. You can email me at: </p>
    <EmailLink />
  </div>
);

const Contact = () => (
  <Main
    title="Contact"
    description='Contact Zhaoxun "Laszlo" Liu'
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <WeChatPart />
      <EmailPart />
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
