export const siteConfig = {
  name: "Shahir Ali",
  title: "Software Engineer",
  description: "Portfolio website of Shahir Ali",
  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/shahir00ali",
    twitter: "https://codeforces.com/profile/shahir28",
    github: "https://github.com/shahir28",
    codeforces: "https://codeforces.com/profile/Shahirali82",
    leetcode: "https://leetcode.com/your-leetcode-username",
  },
  aboutMe:
    "Aspiring software engineer with hands-on experience in backend, frontend, and AI-driven solutions. Passionate about building scalable systems and deploying production-grade applications.",
  skills: [
    "Javascript",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "Spring Boot",
    "Oracle SQL",
    "PL/SQL",
    "TensorFlow",
    "Kubernetes",
    "Express.js",
    "Redis",
    "MongoDB",
  ],
  projects: [
    {
      name: "Cyber.AI",
      description:
        "Cybercrime forensics platform with 95% phishing and 92% image anomaly detection accuracy. Trained ML models for log and document anomaly detection using TensorFlow (0.94 F1-score). Directed deployment of microservices on AWS EC2 using Docker, Kubernetes, and MongoDB Atlas for scalable storage.",
      link: "https://cybrai.netlify.app/",
      skills: [
        "React.js",
        "Node.js",
        "Python",
        "TensorFlow",
        "AWS",
        "Docker",
        "Kubernetes",
      ],
      dateRange: "Sept 2024 – Oct 2024",
    },
    {
      name: "ShopSpree",
      description:
        "Modular e-commerce platform using Node.js and Redis, reducing frontend latency by 40%. Implemented secure JWT-based auth with bcryptjs, increasing user retention by 30%. Integrated Stripe and Cloudinary for payments and media; deployed Dockerized app on AWS.",
      link: "https://github.com/shahir28/ShopSpree",
      skills: ["Node.js", "Express.js", "Stripe", "Redis", "MongoDB", "AWS"],
      dateRange: "Jun 2024 – Jul 2024",
    },
    {
      name: "CBLOS (Corporate Banking Loan Origination System)",
      description:
        "Developed and deployed RESTful APIs for a Corporate Banking Loan Origination System using Spring Boot, automating workflows and reducing loan processing time by 40%. Architected performance-tuned queries and indexing strategies for Oracle SQL and PL/SQL, reducing API response time by 30% and improving system throughput. Designed comprehensive test suites using JUnit and Mockito, boosting code coverage to 85% and increasing deployment confidence.",
      link: "https://github.com/shahir28/CBLOS",
      skills: ["Spring Boot", "Oracle SQL", "PL/SQL", "JUnit", "Mockito", "REST API"],
      dateRange: "Feb 2025 – Jun 2025",
    },
  ],
  experience: [
    {
      company: "Cognizant Technology Solutions",
      location: "Chennai, India",
      title: "Programmer Analyst Intern",
      dateRange: "Feb 2025 – Jun 2025",
      bullets: [
        "Led development and deployment of RESTful APIs for a Corporate Banking Loan Origination System using Spring Boot, automating workflows and reducing loan processing time by 40%.",
        "Architected performance-tuned queries and indexing strategies for Oracle SQL and PL/SQL, reducing API response time by 30% and improving system throughput.",
        "Designed comprehensive test suites using JUnit and Mockito, boosting code coverage to 85% and increasing deployment confidence.",
        "Collaborated across Agile teams, participated in 10+ code reviews and sprint demos, and delivered three production-grade backend modules.",
      ],
    },
    {
      company: "YBI Foundation",
      location: "Bangalore, India",
      title: "Python Developer",
      dateRange: "May 2024 – Jul 2024",
      bullets: [
        "Architected a scalable, AI-augmented web scraping system leveraging Selenium and Bright Data proxies to achieve a 99% anti-bot bypass rate and high-volume extraction.",
        "Integrated Ollama for intelligent summarization and metadata transformation, cutting data storage by 40% and doubling retrieval performance in a Django-backed API.",
      ],
    },
  ],
  education: [
    {
      school: "RNS Institute of Technology",
      degree: "Bachelor of Engineering in Computer Science(AI & ML)",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
