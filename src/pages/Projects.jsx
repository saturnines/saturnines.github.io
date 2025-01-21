import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Game Market Analysis API",
      fullDescription: `A backend system designed for real-time market data analysis, 
      showcasing distributed systems concepts and API development.
      
      Key Features:
      • Real-time data processing with Redis caching
      • RESTful API endpoints with FastAPI
      • Docker containerization
      • Automated deployment to GCP`,
      tech: ["Python", "FastAPI", "Redis", "Docker", "GCP", "Nginx"],
      apiDemo: {
        baseUrl: "https://api.kevinsapi.net/items/",
        description: "Try out the live API by searching for market items:",
        examples: ["wheat", "gold", "enchanted packed ice"]
      }
    },
    {
      title: "Data Processing Pipeline",
      fullDescription: `A distributed data processing system focused on efficient data handling 
      and microservices architecture. Currently expanding with additional services.
      
      Key Features:
      • Microservices architecture with Kafka message streaming
      • Asynchronous data processing with PostgreSQL
      • Circuit breaker implementation for resilience
      • Connection pooling for improved performance`,
      tech: ["Python", "FastAPI", "PostgreSQL", "Kafka", "Docker", "asyncpg"],
      status: "In active development - adding new services",
      github: "https://github.com/saturnines/multicloud-llm"
    }
  ];

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="mt-24 mb-24">
        <h1 className="text-3xl font-medium mb-12 tracking-wide text-center">PROJECTS</h1>
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-medium">{project.title}</h2>
                {project.status && (
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                    {project.status}
                  </span>
                )}
              </div>
              
              <div className="prose max-w-none mb-6 text-gray-600 whitespace-pre-line">
                {project.fullDescription}
              </div>
              
              {/* API Demo Section */}
              {project.apiDemo && (
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Live API Demo</h3>
                  <p className="text-gray-600 mb-4">{project.apiDemo.description}</p>
                  
                  {/* Example Links */}
                  <div className="mb-4">
                    <span className="text-gray-600">Try these examples: </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.apiDemo.examples.map((example) => (
                        <a
                          key={example}
                          href={`${project.apiDemo.baseUrl}?search_term=${example}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-white text-blue-600 border border-blue-200 rounded hover:bg-blue-50 transition-colors"
                        >
                          {example}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* API URL Display */}
                  <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                    <p className="text-gray-400 mb-2">Base URL:</p>
                    <div className="flex items-center gap-2">
                      <code className="text-green-400">
                        {project.apiDemo.baseUrl}?search_term=[your-search-term]
                      </code>
                    </div>
                  </div>
                </div>
              )}

              {/* Direct GitHub Link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  View on GitHub
                </a>
              )}

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
