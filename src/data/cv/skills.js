const skills = [
  {
    title: 'C++',
    competency: 4,
    category: ['Programming'],
  },
  {
    title: 'C#',
    competency: 5,
    category: ['Programming'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Programming'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Programming'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Programming'],
  },
  {
    title: 'TypeScript',
    competency: 3,
    category: ['Programming'],
  },
  {
    title: 'SQL',
    competency: 2,
    category: ['Programming'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tool'],
  },
  {
    title: 'Unity3D',
    competency: 5,
    category: ['Research (HCI/AI/Gaming)', 'Tool'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Research (HCI/AI/Gaming)'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Research (HCI/AI/Gaming)'],
  },
  {
    title: 'React Native',
    competency: 4,
    category: ['Software Development'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Software Development'],
  },
  {
    title: 'Google Firebase',
    competency: 4,
    category: ['Software Development', 'Tool'],
  },
  {
    title: 'NumPy',
    competency: 5,
    category: ['Research (HCI/AI/Gaming)'],
  },
  {
    title: 'SciPy',
    competency: 3,
    category: ['Research (HCI/AI/Gaming)'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tool'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Tool'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Software Development'],
  },
  {
    title: 'PostgreSQL',
    competency: 2,
    category: ['Software Development'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Research (HCI/AI/Gaming)', 'Tool'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#0d216b',
  '#0944e1',
  '#08c0ff',
  '#0ffff8',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
