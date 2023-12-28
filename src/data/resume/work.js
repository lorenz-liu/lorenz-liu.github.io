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
    name: 'Ubisoft Entertainment SA',
    position: 'Intern Gameplay Programmer',
    url: 'https://www.ubisoft.com/',
    startDate: '2022-09-01',
    endDate: '2023-03-01',
    summary: "Ubisoft is a leading video game company that develops and publishes popular game franchises such as Assassin's Creed, Far Cry, and Tom Clancy's Rainbow Six. Chengdu Studio's representative work is the Rabbids series. ",
    highlights: [
      'Spearheaded the enhancement of an AAA-level video game’s downloadable contents (DLCs), excelling in C# and Unity3D for development, debugging, and performance optimization.',
      'Achieved notable improvements in DLC performance and functionality, streamlined project workflows with Perforce and Confluence, and successfully delivered high-quality content.',
    ],
  },
];

export default work;
