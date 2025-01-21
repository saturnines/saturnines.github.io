import React from 'react';
import { Github, Mail, Linkedin, Database, Server, Code } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Game Market Analysis API",
      description: "Backend API for real-time market data analysis and trading signal generation using FastAPI. Implemented efficient data fetching with Redis caching and rate limiting. Deployed on GCP using Docker and GitHub Actions CI/CD pipeline.",
      tech: ["Python", "FastAPI", "Redis", "Docker", "GCP", "Nginx"]
    },
    {
      title: "Data Processing Pipeline",
      description: "Distributed system for data processing using Kafka streams between microservices. Built with PostgreSQL and asyncpg for async data operations, featuring connection pooling and an in-memory cache based on volatility metrics.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Kafka", "Docker"]
    },
    {
      title: "Psychology Fact Generator",
      description: "RESTful API using Spring Boot with separate loader and API services. Implemented EFK stack for logging and monitoring, with Memcached failover caching between services.",
      tech: ["Java", "Spring Boot", "Elasticsearch", "Fluentd", "Kibana", "Memcached"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-gray-800 font-medium tracking-wide">
          KEVIN LEUNG
        </div>
        <div className="space-x-8">
          <a href="#resume" className="text-gray-600 hover:text-gray-800">RESUME</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800">PROJECTS</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-800">SKILLS</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {/* Introduction */}
        <div className="mt-24 mb-24 max-w-3xl mx-auto">
          <h1 className="text-3xl font-medium mb-4 tracking-wide">
            HI THERE. I'M KEVIN LEUNG.
          </h1>
          <div className="text-gray-600 mb-6">
            LEUNGKE@OREGONSTATE.EDU
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Computer Science student at Oregon State University with a focus on backend development
            and distributed systems. Experienced in building scalable APIs, data processing pipelines,
            and microservices architectures. Expected graduation: December 2025.
          </p>
          <button className="border border-gray-800 px-6 py-2 text-sm tracking-wide hover:bg-gray-800 hover:text-white transition-colors">
            LEARN MORE
          </button>
        </div>

        {/* Projects Section */}
        <section className="mb-24" id="projects">
          <h2 className="text-2xl font-medium mb-12 tracking-wide text-center">FEATURED PROJECTS</h2>
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24" id="skills">
          <h2 className="text-2xl font-medium mb-12 tracking-wide text-center">TECHNICAL SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Languages & Frameworks
              </h3>
              <p className="text-gray-600">Python, Java, FastAPI, Flask, Spring Boot, HTML/CSS, JavaScript</p>
            </div>
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Databases & Message Brokers
              </h3>
              <p className="text-gray-600">PostgreSQL, MongoDB, Kafka, Redis, Memcached</p>
            </div>
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <Server className="w-5 h-5 mr-2" />
                Infrastructure & DevOps
              </h3>
              <p className="text-gray-600">Docker, GCP, Nginx, Git, GitHub Actions, EFK Stack</p>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/saturnines" className="text-gray-400 hover:text-gray-600">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/kevin-leung22" className="text-gray-400 hover:text-gray-600">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:leungke@oregonstate.edu" className="text-gray-400 hover:text-gray-600">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;