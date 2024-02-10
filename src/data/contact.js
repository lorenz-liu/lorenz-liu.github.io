import { faWeixin } from '@fortawesome/free-brands-svg-icons/faWeixin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: '/contact',
    label: 'WeChat',
    icon: faWeixin,
  },
  {
    link: 'https://github.com/GitLorenzL',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/Zhaoxun-Lorenz-Liu',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: 'https://angel.co/michael-d-angelo',
  //   label: 'Angel List',
  //   icon: faAngellist,
  // },
  // {
  //   link: 'https://twitter.com/dangelosaurus',
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
  {
    link: 'mailto:zhaoxun.liu@proton.me',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://www.instagram.com/llorenzll/',
    label: 'Instagram',
    icon: faInstagram,
  },
];

export default data;
