module.exports = {
  siteTitle: 'Zhaoxun "Laszlo" Liu | LaszLau',
  siteDescription:
    'Zhaoxun "Laszlo" Liu is a Human-Computer Interaction researcher and game developer.',
  siteKeywords:
    'Zhaoxun "Laszlo" Liu, Zhaoxun, Liu, LaszLau, human-computer interaction, hci, game developer',
  siteUrl: 'https://lazlau.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Zhaoxun "Laszlo" Liu',
  location: 'Chengdu, China',
  email: 'sprlau.me@proton.me',
  github: 'https://github.com/LaszLau',
  twitterHandle: '@SprLau',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/LaszLau',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/LaszLau/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/springslau',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/SprLau',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
