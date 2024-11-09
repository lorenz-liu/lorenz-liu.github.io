/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'University Health Network',
    position: 'Team Lead, Machine Learning',
    url: 'https://temertysimcentre.com/surgical-artificial-intelligence-research-academy-sara/',
    startDate: '2025-02-01',
    summary: 'University Health Network (UHN) is an alliance of leading healthcare research facilities at the forefront of medical innovation, advancing cutting-edge AI research to transform healthcare and improve patient outcomes. In 2024, Toronto General Hospital, part of UHN, was ranked as the No. 3 hospital worldwide. ',
    highlights: [
      'I lead the Machine Learning Research Team at the SARA Lab, UHN, overseeing research in computer vision, graphics, and reinforcement learning. I also supervise healthcare-tailored game development and web application projects.',
      'Our mission is to pioneer AI-driven solutions for surgical and clinical applications. ',
    ],
  },
  {
    name: 'University Health Network',
    position: 'Machine Learning Researcher',
    url: 'https://temertysimcentre.com/surgical-artificial-intelligence-research-academy-sara/',
    startDate: '2024-05-01',
    endDate: '2024-12-31',
    summary: 'The Surgical AI Research Academy (SARA) is dedicated towards research and innovation in areas related to surgical training, intra-operative performance augmentation, robotic surgery and telecoaching. We use various methodologies, including artificial intelligence, AR/VR modelling, and simulation-based training to improve patient outcomes through surgical excellence.',
    highlights: [
      'Introduced MasTER, a data-intensive triage dashboard with a user-friendly human interface to enable fast patient dispatch in mass-casualty incidents by leveraging PPO-based deep reinforcement learning and large language models.',
    ],
  },
  {
    name: 'Ubisoft',
    position: 'Intern Gameplay Programmer',
    url: 'https://www.ubisoft.com/',
    startDate: '2022-09-01',
    endDate: '2023-03-01',
    summary: "Ubisoft is a leading video game company that develops and publishes popular game franchises such as Assassin's Creed, Far Cry, and Tom Clancy's Rainbow Six. Chengdu Studio's representative work is the Rabbids series. ",
    highlights: [
      'Researched reinforcement learning (DQN, DDPG) on non-player character actions, behaviours, and interactions.',
      'Assassin’s Creed Mirage downloadable contents (DLCs), excelling in C# and Unity3D and performance optimization.',
      'Achieved notable improvements in DLC performance and functionality, streamlined project workflows with Perforce and Confluence, and successfully delivered high-quality content. ',
    ],
  },
];

export default work;
