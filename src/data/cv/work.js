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
    position: 'Machine Learning Researcher',
    url: 'https://temertysimcentre.com/surgical-artificial-intelligence-research-academy-sara/',
    startDate: '2024-05-01',
    summary: 'The Surgical AI Research Academy (SARA) is dedicated towards research and innovation in areas related to surgical training, intra-operative performance augmentation, robotic surgery and telecoaching. We use various methodologies, including artificial intelligence, AR/VR modelling, and simulation-based training to improve patient outcomes through surgical excellence.',
    highlights: [
      'Leveraging reinforcement learning and large language models to optimally manage mass-casualty trauma.',
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
      'Spearheaded the enhancement of an AAA-level video game’s downloadable contents (DLCs), excelling in C# and Unity3D for development, debugging, and performance optimization.',
      'Achieved notable improvements in DLC performance and functionality, streamlined project workflows with Perforce and Confluence, and successfully delivered high-quality content.',
    ],
  },
];

export default work;
