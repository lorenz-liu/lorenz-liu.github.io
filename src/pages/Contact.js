import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const WeChatPart = () => (
  <div className="email-at">
    <p>
      By the way, I use <b>WeChat</b>. <br />
      Send me an email if you prefer to use instant messaging :)
    </p>
  </div>
);

const EmailPart = () => (
  <div className="email-at">
    <p> <b>Feel free to get in touch!</b></p>
    <p style={{ marginTop: '4%' }}>You can email me at: </p>
    <EmailLink mail="lorenz [at] null [dot] net" />
    <p style={{ marginTop: '4%' }}>If it is for academic or professional purposes, preferably: </p>
    <EmailLink mail="lorenz [at] cs [dot] toronto [dot] edu" />
    <EmailLink mail="zhaoxun [dot] liu [at] uhn [dot] ca" />
    <EmailLink mail="zhaoxun [dot] liu [at] mail [dot] utoronto [dot] ca" />
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
      <EmailPart />
      <WeChatPart />
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
