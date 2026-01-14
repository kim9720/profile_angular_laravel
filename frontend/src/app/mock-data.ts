export const mockData = {
  profile: {
    name: 'Mohamed',
    title: 'Full Stack Software Engineer',
    tagline: 'Passionate about building scalable solutions with clean, maintainable code.',
    bio: 'Passionate full-stack software engineer with 5+ years of experience building scalable, high-performance applications, focused on clean architecture, efficient problem-solving, and great user experience.',
    email: 'john.dev@example.com',
    github: 'https://github.com/johndev',
    linkedin: 'https://linkedin.com/in/johndev',
    twitter: 'https://twitter.com/johndev',
    location: 'Sanawari, Arusha, TZ'
  },

  skills: [
    {
      category: 'Frontend',
      technologies: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend',
      technologies: ['Laravel',  'RESTful APIs', 'Spring Boot']
    },
    {
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL']
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'CI/CD',  'Agile/Scrum']
    }
  ],

  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management and payment processing',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      github: 'https://github.com/johndev/ecommerce',
      demo: 'https://demo-ecommerce.example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates and team collaboration features',
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      github: 'https://github.com/johndev/taskmanager',
      demo: 'https://demo-taskmanager.example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive data visualizations and reporting',
      technologies: ['Angular', 'Python', 'MongoDB', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      github: 'https://github.com/johndev/analytics',
      demo: 'https://demo-analytics.example.com',
      featured: true
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Social networking platform with user profiles, posts, and real-time messaging',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      github: 'https://github.com/johndev/social',
      demo: null,
      featured: false
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'Clean weather application with location-based forecasts and interactive maps',
      technologies: ['Angular', 'TypeScript', 'OpenWeather API'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      github: 'https://github.com/johndev/weather',
      demo: 'https://demo-weather.example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Personal fitness tracking application with workout logging and progress visualization',
      technologies: ['React', 'Express.js', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      github: 'https://github.com/johndev/fitness',
      demo: null,
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      company: 'Tech Innovations Inc.',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      description: [
        'Lead development of microservices architecture serving 1M+ users',
        'Mentor junior developers and conduct code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      location: 'Remote',
      description: [
        'Built scalable web applications using Angular and Node.js',
        'Optimized database queries improving performance by 40%',
        'Collaborated with design team to implement responsive UIs'
      ]
    },
    {
      id: 3,
      company: 'Digital Solutions Co.',
      position: 'Junior Developer',
      duration: '2019 - 2020',
      location: 'New York, NY',
      description: [
        'Developed frontend components using React and TypeScript',
        'Integrated third-party APIs and payment gateways',
        'Participated in agile development processes'
      ]
    }
  ]
};
