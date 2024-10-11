import { Company } from '../types';

export const companies: Company[] = [
  {
    id: '1',
    name: 'TechCorp',
    description: 'A leading technology company specializing in AI and machine learning.',
    jobRoles: [
      {
        title: 'Software Engineer',
        description: 'Develop and maintain cutting-edge software applications.',
        requiredSkills: ['JavaScript', 'React', 'Node.js', 'Python'],
        studyMaterials: [
          'https://reactjs.org/docs/getting-started.html',
          'https://nodejs.org/en/docs/',
          'https://www.python.org/doc/',
          'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
        ],
      },
      {
        title: 'Data Scientist',
        description: 'Analyze complex data sets and develop predictive models.',
        requiredSkills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
        studyMaterials: [
          'https://www.coursera.org/specializations/machine-learning',
          'https://www.kaggle.com/learn/intro-to-machine-learning',
          'https://www.youtube.com/watch?v=ua-CiDNNj30',
        ],
      },
    ],
    preferredSkills: ['Problem-solving', 'Teamwork', 'Communication'],
    preferredLanguages: ['JavaScript', 'Python', 'Java'],
  },
  {
    id: '2',
    name: 'FinanceHub',
    description: 'A fintech company revolutionizing the banking industry.',
    jobRoles: [
      {
        title: 'Financial Analyst',
        description: 'Analyze financial data and provide insights for decision-making.',
        requiredSkills: ['Financial Modeling', 'Excel', 'SQL', 'Data Visualization'],
        studyMaterials: [
          'https://www.wallstreetprep.com/',
          'https://www.datacamp.com/courses/introduction-to-sql',
          'https://www.youtube.com/watch?v=eE1XCgPYZkE',
        ],
      },
      {
        title: 'Blockchain Developer',
        description: 'Develop and implement blockchain solutions for financial applications.',
        requiredSkills: ['Solidity', 'Ethereum', 'Smart Contracts', 'JavaScript'],
        studyMaterials: [
          'https://ethereum.org/en/developers/docs/',
          'https://cryptozombies.io/',
          'https://www.youtube.com/watch?v=M576WGiDBdQ',
        ],
      },
    ],
    preferredSkills: ['Analytical Thinking', 'Attention to Detail', 'Innovation'],
    preferredLanguages: ['Python', 'R', 'Solidity'],
  },
  {
    id: '3',
    name: 'GreenEnergy',
    description: 'A startup focused on developing sustainable energy solutions.',
    jobRoles: [
      {
        title: 'Renewable Energy Engineer',
        description: 'Design and implement renewable energy systems.',
        requiredSkills: ['Solar Technology', 'Wind Energy', 'Energy Storage', 'CAD'],
        studyMaterials: [
          'https://www.edx.org/course/introduction-to-solar-energy',
          'https://www.youtube.com/watch?v=1kIf1KyfZCE',
        ],
      },
    ],
    preferredSkills: ['Sustainability', 'Project Management', 'Problem-solving'],
    preferredLanguages: ['Python', 'MATLAB'],
  },
  {
    id: '4',
    name: 'HealthTech',
    description: 'An innovative startup developing AI-powered healthcare solutions.',
    jobRoles: [
      {
        title: 'Machine Learning Engineer',
        description: 'Develop ML models for medical diagnosis and treatment planning.',
        requiredSkills: ['Python', 'TensorFlow', 'Computer Vision', 'NLP'],
        studyMaterials: [
          'https://www.coursera.org/specializations/deep-learning',
          'https://www.youtube.com/watch?v=aircAruvnKk',
        ],
      },
    ],
    preferredSkills: ['Medical Domain Knowledge', 'Data Privacy', 'Research'],
    preferredLanguages: ['Python', 'R', 'SQL'],
  },
  {
    id: '5',
    name: 'EduTech',
    description: 'A startup revolutionizing online education with personalized learning experiences.',
    jobRoles: [
      {
        title: 'Full Stack Developer',
        description: 'Build and maintain the core learning platform.',
        requiredSkills: ['React', 'Node.js', 'MongoDB', 'AWS'],
        studyMaterials: [
          'https://fullstackopen.com/',
          'https://www.youtube.com/watch?v=7CqJlxBYj-M',
        ],
      },
    ],
    preferredSkills: ['UX/UI Design', 'Agile Methodologies', 'EdTech Experience'],
    preferredLanguages: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    id: '6',
    name: 'Google',
    description: 'Making AI revolutionizing to the World.',
    jobRoles: [
      {
        title: 'AI Engineer',
        description: 'Develop and implement AI solutions for various applications.',
        requiredSkills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
        studyMaterials: [
          'https://www.wallstreetprep.com/',
          'https://www.datacamp.com/courses/introduction-to-sql',
          'https://www.youtube.com/watch?v=eE1XCgPYZkE',
        ],
      },
      {
        title: 'Blockchain Developer',
        description: 'Develop and implement blockchain solutions for AI applications.',
        requiredSkills: ['Solidity', 'Ethereum', 'Smart Contracts', 'JavaScript'],
        studyMaterials: [
          'https://ethereum.org/en/developers/docs/',
          'https://cryptozombies.io/',
          'https://www.youtube.com/watch?v=M576WGiDBdQ',
        ],
      },
    ],
    preferredSkills: ['Analytical Thinking', 'Attention to Detail', 'Innovation'],
    preferredLanguages: ['Python', 'R', 'Java'],
  },
  {
    id: '7',
    name: 'Microsoft',
    description: 'Manage and scale AI-powered services for businesses.',
    jobRoles: [
      {
        title: 'AI Developer',
        description: 'Develop AI solutions for various applications.',
        requiredSkills: ['Pythorch', 'Machine Learning', 'SQL', 'Data Visualization'],
        studyMaterials: [
          'https://www.wallstreetprep.com/',
          'https://www.datacamp.com/courses/introduction-to-sql',
          'https://www.youtube.com/watch?v=eE1XCgPYZkE',
        ],
      },
      {
        title: 'Blockchain Developer',
        description: 'Develop and implement blockchain solutions for financial applications.',
        requiredSkills: ['Solidity', 'Ethereum', 'Smart Contracts', 'JavaScript'],
        studyMaterials: [
          'https://ethereum.org/en/developers/docs/',
          'https://cryptozombies.io/',
          'https://www.youtube.com/watch?v=M576WGiDBdQ',
        ],
      },
    ],
    preferredSkills: ['Analytical Thinking', 'Attention to Detail', 'Innovation'],
    preferredLanguages: ['Python', 'R', 'Java'],
  },
  {
    id: '8',
    name: 'Amazon',
    description: 'Product development and innovation for businesses.',
    jobRoles: [
      {
        title: 'Product Manager',
        description: 'Manage and develop products for various .',
        requiredSkills: ['Industry Knowledge', 'Excel', 'Product Development', 'Data Visualization'],
        studyMaterials: [
          'https://www.wallstreetprep.com/',
          'https://www.datacamp.com/courses/introduction-to-sql',
          'https://www.youtube.com/watch?v=eE1XCgPYZkE',
        ],
      },
      {
        title: 'A',
        description: 'Develop and implement blockchain solutions for financial applications.',
        requiredSkills: ['Solidity', 'Ethereum', 'Smart Contracts', 'JavaScript'],
        studyMaterials: [
          'https://ethereum.org/en/developers/docs/',
          'https://cryptozombies.io/',
          'https://www.youtube.com/watch?v=M576WGiDBdQ',
        ],
      },
    ],
    preferredSkills: ['Analytical Thinking', 'Attention to Detail', 'Innovation'],
    preferredLanguages: ['Python', 'R', 'Solidity'],
  },
  {
    id: '9',
    name: 'TCS',
    description: 'A leading technology company specializing in AI and machine learning.',
    jobRoles: [
      {
        title: 'Software Engineer',
        description: 'Develop and maintain cutting-edge software applications.',
        requiredSkills: ['JavaScript', 'React', 'Node.js', 'Python'],
        studyMaterials: [
          'https://reactjs.org/docs/getting-started.html',
          'https://nodejs.org/en/docs/',
          'https://www.python.org/doc/',
          'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
        ],
      },
      {
        title: 'Data Scientist',
        description: 'Analyze complex data sets and develop predictive models.',
        requiredSkills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
        studyMaterials: [
          'https://www.coursera.org/specializations/machine-learning',
          'https://www.kaggle.com/learn/intro-to-machine-learning',
          'https://www.youtube.com/watch?v=ua-CiDNNj30',
        ],
      },
    ],
    preferredSkills: ['Problem-solving', 'Teamwork', 'Communication'],
    preferredLanguages: ['JavaScript', 'Python', 'Java'],
  },
  {
    id: '10',
    name: 'Wipro',
    description: 'A fintech company revolutionizing the banking industry.',
    jobRoles: [
      {
        title: 'Financial Analyst',
        description: 'Analyze financial data and provide insights for decision-making.',
        requiredSkills: ['Financial Modeling', 'Excel', 'SQL', 'Data Visualization'],
        studyMaterials: [
          'https://www.wallstreetprep.com/',
          'https://www.datacamp.com/courses/introduction-to-sql',
          'https://www.youtube.com/watch?v=eE1XCgPYZkE',
        ],
      },
      {
        title: 'Blockchain Developer',
        description: 'Develop and implement blockchain solutions for financial applications.',
        requiredSkills: ['Solidity', 'Ethereum', 'Smart Contracts', 'JavaScript'],
        studyMaterials: [
          'https://ethereum.org/en/developers/docs/',
          'https://cryptozombies.io/',
          'https://www.youtube.com/watch?v=M576WGiDBdQ',
        ],
      },
    ],
    preferredSkills: ['Analytical Thinking', 'Attention to Detail', 'Innovation'],
    preferredLanguages: ['Python', 'R', 'Solidity'],
  },
  // Add 15 more startup companies here with similar structure
];
