import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const WeChatPart = () => (
  <div className="email-at">
    <p>
      Feel free to get in touch! <b>WeChat</b> is my most
      frequently used instant messaging app. <br />
      Send me an email to me if you prefer to talk in WeChat!
    </p>
  </div>
);

const EmailPart = () => (
  <div className="email-at">
    <p>Or, you can email me at: </p>
    <EmailLink mail="zhaoxun.liu@proton.me" />
    <p style={{ marginTop: '4%' }}>If it is for academic or professional purposes, preferably: </p>
    <EmailLink mail="lorenz@cs.toronto.edu" />
    <EmailLink mail="zhaoxun.liu@mail.utoronto.ca" />
  </div>
);

const Contact = () => (
  <Main
    title="Contact"
    description='Contact Zhaoxun "Lorenz" Liu'
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
