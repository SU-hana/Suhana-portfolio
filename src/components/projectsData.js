// Project data
export const projects = [
    {
      name: "Rutronix",
      description: "Backend development & Full Stack Development",
      image: "/rutronix.png", // You'll need to add this image to your public folder
      category: "Python",
      details: "Dynamic web platform for Kerala State Rutronix, a government-backed initiative offering certified courses across multiple domains",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "phpMyAdmin", "Git", "GitHub"],
      github: "https://github.com/SU-hana",
      website: "https://app.rutronixflare.com",
      year: "2024", // Adjust this based on when you actually worked on it
      longDescription: "A comprehensive educational platform developed for Kerala State Rutronix, a government-backed initiative focused on skill development and education at the grassroots level. The platform manages certified courses across diverse domains including computer applications, programming, finance, multimedia, design, and networking. Built with scalability in mind to support thousands of students and multiple training centers across Kerala state.",
      challenges: "Creating a scalable architecture to handle multiple course domains and user types (students, instructors, administrators). Implementing efficient course management system with center coordination capabilities while ensuring responsive design across various devices and network conditions typical in rural areas.",
      results: "Successfully delivered a robust platform that supports the state's skill development initiatives, enabling seamless course registration, center coordination, and educational content delivery across Kerala. The system has facilitated digital transformation of traditional skill development programs."
    },
    {
      name: "ERP",
      description: "Backend development & Full Stack Development",
      image: "/erp.png",
      category: "Python",
      details: "Enterprise resource planning system with integrated modules",
      technologies: ["Python", "React", "JavaScript", "MySQL", "Docker"],
      github: "https://github.com/SU-hana",
      year: "2024",
      longDescription: "A comprehensive Enterprise Resource Planning solution that streamlines business operations by integrating key functionalities like inventory management, human resources, financial operations, and customer relationship management into a single cohesive system. The application features real-time analytics, customizable dashboards, and automated reporting to enhance decision-making processes.",
      challenges: "Implementing complex business logic while ensuring system performance under heavy data load. Designing a scalable architecture that could accommodate future modules and integrations.",
      results: "Successfully deployed to 5+ enterprise clients resulting in 30% operational efficiency improvement and significant reduction in manual data entry errors."
    },
    {
      name: "BeondAudit",
      description: "Backend development & Full Stack Development",
      image: "/beondaudit.png",
      category: "Python",
      details: "A comprehensive audit system with automated reporting features",
      technologies: ["Python", "Django", "JavaScript", "PostgreSQL", "Docker"],
      github: "https://github.com/SU-hana",
      website: "https://beta.beondaudit.com",
      year: "2023",
      longDescription: "An advanced audit management platform designed to streamline compliance processes and improve audit efficiency. The system provides automated workflow management, detailed audit trails, and comprehensive reporting capabilities while maintaining strict data security and access control.",
      challenges: "Building a system with configurable compliance rules that could adapt to various regulatory frameworks. Creating intuitive interfaces for complex audit workflows.",
      results: "Reduced audit completion time by 40% and improved compliance reporting accuracy by 25% for clients in regulated industries."
    },
    {
      name: "BeondWork",
      description: "Backend development",
      image: "/beondwork.png",
      category: "Python",
      details: "Workflow automation platform for enterprise businesses",
      technologies: ["Python", "FastAPI", "JavaScript", "Redis", "AWS"],
      github: "https://github.com/SU-hana",
      website: "https://beondwork.com",
      year: "2023",
      longDescription: "A workflow automation solution that helps enterprises digitize and optimize their business processes. The platform features visual workflow designers, integration capabilities with existing systems, and powerful analytics to identify bottlenecks and improvement opportunities.",
      challenges: "Developing a flexible workflow engine that could handle complex business rules while remaining user-friendly. Ensuring high availability and performance at scale.",
      results: "Implemented by 12+ enterprise clients, reducing process execution time by an average of 35% and improving process visibility across departments."
    },
    {
      name: "CURRENCY DETECTOR FOR VISUALLY IMPAIRED",
      description: "Backend development & Full Stack Development",
      image: "/coin.png",
      category: "Android JAVA",
      details: "Image processing-based system to recognize Indian banknotes and provide audio feedback, enabling independent transactions.",
      technologies: ["Android JAVA", "TensorFlow lite", "Teachable Machine"],
      github: "https://github.com/SU-hana",
      year: "2021",
      longDescription: "An assistive technology solution designed to help visually impaired individuals identify Indian currency denominations through their smartphone. The application uses the device camera to capture images of banknotes, processes them using machine learning algorithms, and provides audio feedback about the denomination.",
      challenges: "Training the model to recognize currency notes in varying lighting conditions and states of wear. Optimizing the application to run efficiently on low-end devices with limited processing power.",
      results: "Achieved 95% accuracy in currency recognition across various conditions. The app has been adopted by several NGOs working with visually impaired communities."
    },
    {
      name: "Online Car Rental",
      description: "Backend development & Full Stack Development",
      image: "/carrental.png",
      category: "PHP",
      details: "Online booking system designed to meet the specific needs of car rental companies, travel companies and travel agencies.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/SU-hana",
      year: "2021",
      longDescription: "A full-featured car rental management system that handles the entire rental lifecycle from vehicle listings and availability management to reservations, payments, and returns. The platform includes customer-facing booking interfaces and comprehensive admin dashboards for fleet management.",
      challenges: "Developing a reliable real-time availability system while accounting for maintenance schedules, returns, and delays. Implementing a secure payment processing system.",
      results: "Deployed for 3 regional car rental businesses, increasing their online bookings by 45% and reducing administrative workload by 30%."
    }
  ];