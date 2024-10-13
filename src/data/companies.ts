import { Company } from '../types';

export const companies: Company[] = [
  {
    id: '1',
    name: 'TechCorp',
    description: 'A leading technology company specializing in AI and machine learning.',
    jobRoles: [
      {
        title: 'AI Engineer',
        description: 'Develop and maintain cutting-edge AI applications.',
        requiredSkills: ['JavaScript', 'React', 'Node.js', 'Python'],
        studyMaterials: [
          'https://reactjs.org/docs/getting-started.html',
          'https://nodejs.org/en/docs/',
          'https://www.python.org/doc/',
          'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
        ],
        interviewTips: [
          'Practice coding challenges on LeetCode and HackerRank.',
          'Prepare for behavioral questions focusing on teamwork and problem-solving.',
          'Showcase your understanding of React and Node.js frameworks.',
          'Demonstrate your ability to learn new technologies quickly.'
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
        interviewTips: [
          'Prepare to discuss your experience with machine learning algorithms.',
          'Be ready to answer questions about statistical concepts and data analysis.',
          'Showcase your ability to communicate complex technical information clearly.',
          'Demonstrate your problem-solving skills through case studies.'
        ],
      },
    ],
    preferredSkills: ['Problem-solving', 'Teamwork', 'Communication'],
    preferredLanguages: ['JavaScript', 'Python', 'Java'],
    companyInterviewTips: [
      'Research the company\'s recent projects and initiatives.',
      'Prepare questions to ask the interviewer about the company culture and work environment.',
      'Dress professionally and arrive on time for your interview.'
    ]
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
        interviewTips: [
          'Practice financial modeling questions and case studies.',
          'Demonstrate your proficiency in Excel and SQL.',
          'Showcase your ability to interpret and communicate financial data effectively.',
          'Be prepared to discuss your understanding of financial markets.'
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
        interviewTips: [
          'Prepare to discuss your experience with blockchain technology and smart contracts.',
          'Showcase your understanding of Solidity and Ethereum.',
          'Demonstrate your ability to design and implement secure blockchain solutions.',
          'Be prepared to discuss the challenges and opportunities of blockchain in finance.'
        ],
      },
    ],
    preferredSkills: ['Analytical Thinking', 'Attention to Detail', 'Innovation'],
    preferredLanguages: ['Python', 'R', 'Solidity'],
    companyInterviewTips: [
      'Research the company\'s recent projects and initiatives in the fintech space.',
      'Prepare questions to ask the interviewer about the company\'s approach to innovation.',
      'Dress professionally and arrive on time for your interview.'
    ]
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
        interviewTips: [
          'Prepare to discuss your understanding of renewable energy technologies.',
          'Showcase your experience with CAD software and design principles.',
          'Demonstrate your ability to solve complex engineering problems.',
          'Be prepared to discuss the challenges and opportunities of sustainable energy.'
        ],
      },
    ],
    preferredSkills: ['Sustainability', 'Project Management', 'Problem-solving'],
    preferredLanguages: ['Python', 'MATLAB'],
    companyInterviewTips: [
      'Research the company\'s commitment to sustainability and its projects.',
      'Prepare questions to ask the interviewer about the company\'s culture and values.',
      'Dress professionally and arrive on time for your interview.'
    ]
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
        interviewTips: [
          'Prepare to discuss your experience with machine learning in the healthcare domain.',
          'Showcase your understanding of TensorFlow and other relevant libraries.',
          'Demonstrate your ability to work with medical data and ensure data privacy.',
          'Be prepared to discuss ethical considerations in AI-powered healthcare.'
        ],
      },
    ],
    preferredSkills: ['Medical Domain Knowledge', 'Data Privacy', 'Research'],
    preferredLanguages: ['Python', 'R', 'SQL'],
    companyInterviewTips: [
      'Research the company\'s AI-powered healthcare solutions and their impact.',
      'Prepare questions to ask the interviewer about the company\'s approach to data privacy.',
      'Dress professionally and arrive on time for your interview.'
    ]
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
        interviewTips: [
          'Prepare to discuss your experience with full-stack development and relevant technologies.',
          'Showcase your understanding of React, Node.js, MongoDB, and AWS.',
          'Demonstrate your ability to build scalable and maintainable web applications.',
          'Be prepared to discuss your experience with UX/UI design and agile methodologies.'
        ],
      },
    ],
    preferredSkills: ['UX/UI Design', 'Agile Methodologies', 'EdTech Experience'],
    preferredLanguages: ['JavaScript', 'TypeScript', 'Python'],
    companyInterviewTips: [
      'Research the company\'s approach to personalized learning and its educational platform.',
      'Prepare questions to ask the interviewer about the company\'s culture and its impact on education.',
      'Dress professionally and arrive on time for your interview.'
    ]
  },
  {
    id: '6',
    name: 'Google',
    description: 'A leading technology company.',
    jobRoles: [{
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
      requiredSkills: ['Java', 'Python', 'C++'],
      studyMaterials: [],
      interviewTips: ['Practice coding challenges on LeetCode', 'Prepare for system design questions']
    }],
    preferredSkills: ['Problem-solving', 'Communication'],
    preferredLanguages: ['Java', 'Python', 'C++'],
    companyInterviewTips: ['Research Google\'s products and services', 'Prepare behavioral questions']
  },
  {
    id: '7',
    name: 'Amazon',
    description: 'A leading e-commerce company.',
    jobRoles: [{
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
      requiredSkills: ['Java', 'Python', 'C#'],
      studyMaterials: [],
      interviewTips: ['Practice coding challenges on LeetCode', 'Prepare for system design questions']
    }],
    preferredSkills: ['Problem-solving', 'Communication'],
    preferredLanguages: ['Java', 'Python', 'C#'],
    companyInterviewTips: ['Research Amazon\'s products and services', 'Prepare behavioral questions']
  },
  {
    id: '8',
    name: 'Microsoft',
    description: 'A leading technology company.',
    jobRoles: [{
      title: 'Machine Learning Engineer',
      description: 'Develop and maintain software applications.',
      requiredSkills: ['C#', 'C++', 'Java'],
      studyMaterials: [],
      interviewTips: ['Practice coding challenges on LeetCode', 'Prepare for system design questions']
    }],
    preferredSkills: ['Problem-solving', 'Communication'],
    preferredLanguages: ['C#', 'C++', 'Java'],
    companyInterviewTips: ['Research Microsoft\'s products and services', 'Prepare behavioral questions']
  },
  {
    id: '9',
    name: 'Accenture',
    description: 'A global professional services company.',
    jobRoles: [{
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
      requiredSkills: ['Java', 'Python', 'JavaScript'],
      studyMaterials: [],
      interviewTips: ['Practice coding challenges on HackerRank', 'Prepare for behavioral questions']
    }],
    preferredSkills: ['Problem-solving', 'Communication'],
    preferredLanguages: ['Java', 'Python', 'JavaScript'],
    companyInterviewTips: ['Research Accenture\'s projects and services', 'Prepare behavioral questions']
  },
  {
    id: '10',
    name: 'IBM',
    description: 'A leading technology company.',
    jobRoles: [{
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
      requiredSkills: ['Java', 'Python', 'C++'],
      studyMaterials: [],
      interviewTips: ['Practice coding challenges on LeetCode', 'Prepare for system design questions']
    }],
    preferredSkills: ['Problem-solving', 'Communication'],
    preferredLanguages: ['Java', 'Python', 'C++'],
    companyInterviewTips: ['Research IBM\'s products and services', 'Prepare behavioral questions']
  },
  {
    id: '11',
    name: 'TCS',
    description: 'A leading IT services company.',
    jobRoles: [{
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
      requiredSkills: ['Java', 'Python', 'JavaScript'],
      studyMaterials: [],
      interviewTips: ['Practice coding challenges on HackerRank', 'Prepare for behavioral questions']
    }],
    preferredSkills: ['Problem-solving', 'Communication'],
    preferredLanguages: ['Java', 'Python', 'JavaScript'],
    companyInterviewTips: ['Research TCS\'s projects and services', 'Prepare behavioral questions']
  },
  {
    id: '12',
    name: 'Wipro',
    description: 'A leading IT services company.',
    jobRoles: [{
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
      requiredSkills: ['Java', 'Python', 'JavaScript'],
      studyMaterials: [],
      interviewTips: ['Practice coding challenges on HackerRank', 'Prepare for behavioral questions']
    }],
    preferredSkills: ['Problem-solving', 'Communication'],
    preferredLanguages: ['Java', 'Python', 'JavaScript'],
    companyInterviewTips: ['Research Wipro\'s projects and services', 'Prepare behavioral questions']
  }
];
