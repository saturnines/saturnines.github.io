import React from 'react';

const Skill = ({ name, highlighted = false }) => (
  <span className={`px-2 py-1 rounded ${
    highlighted 
      ? 'bg-gray-200 text-gray-800 font-medium' 
      : 'text-gray-600'
  }`}>
    {name}
  </span>
);

export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="mt-24 mb-24">
        <h1 className="text-3xl font-medium mb-12 tracking-wide text-center">RESUME</h1>
        
        <div className="bg-white shadow-sm p-8">
          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-xl font-medium mb-4 uppercase">Education</h2>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <div className="font-medium">Oregon State University</div>
                <div className="text-gray-600">Expected December 2025</div>
              </div>
              <div>B.S. Computer Science • GPA: 3.54</div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-12">
            <h2 className="text-xl font-medium mb-4 uppercase">Projects</h2>
            
            {/* Game Market Analysis API */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <div className="font-medium">Game Market Analysis API</div>
                <div className="text-gray-500 text-sm">Python, FastAPI, Redis, Docker, GCP, Nginx</div>
              </div>
              <ul className="list-disc ml-4 space-y-1 text-gray-600">
                <li>Developed and deployed a backend API for real-time market data analysis and trading signal generation using FastAPI</li>
                <li>Implemented efficient data fetching and processing from external financial APIs; used Redis to manage rate limits and cache results</li>
                <li>Configured Cross-Origin Resource Sharing (CORS) and secured API endpoints to enable controlled access to the RESTful FastAPI backend</li>
                <li>Implemented a CI/CD pipeline using GitHub Actions for automated deployment of the FastAPI application to Google Compute Engine, using Docker for containerization</li>
              </ul>
            </div>

            {/* Data Processing Pipeline */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <div className="font-medium">Data Processing Pipeline</div>
                <div className="text-gray-500 text-sm">Python, FastAPI, Docker, PostgreSQL, Kafka</div>
              </div>
              <ul className="list-disc ml-4 space-y-1 text-gray-600">
                <li>Built a distributed data processing system that ingests, analyzes, and caches data</li>
                <li>Used Kafka to stream data between microservices and implemented a hybrid circuit breaker and rate limiter</li>
                <li>Developed a database microservice with PostgreSQL and asyncpg to store and retrieve data asynchronously and used connection pooling to increase performance</li>
                <li>Built an in-memory cache to prioritize data retrieval based on metrics like volatility and liquidity</li>
              </ul>
            </div>

            {/* Psychology Fact Generator */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <div className="font-medium">Psychology Fact Generator</div>
                <div className="text-gray-500 text-sm">Java, Spring Boot, EFK Stack, Memcached</div>
              </div>
              <ul className="list-disc ml-4 space-y-1 text-gray-600">
                <li>Built RESTful API using Spring Boot to generate psychology facts with separate loader and API service</li>
                <li>Implemented logging using the EFK stack (Elasticsearch, Fluentd, Kibana) for log management and service monitoring</li>
                <li>Used Docker and nginx for containerization and deployment, and GitHub Actions for a CI/CD pipeline</li>
                <li>Used Memcached as a failover cache between services</li>
              </ul>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium uppercase">Technical Skills</h2>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="text-gray-600">things I've used</span>
                <span>and</span>
                <span className="bg-gray-200 px-2 py-1 rounded">things I use often</span>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Skill name="Python" highlighted={true} />
                  <Skill name="Java" highlighted={true} />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  <Skill name="FastAPI" highlighted={true} />
                  <Skill name="Flask" highlighted={true} />
                  <Skill name="Spring Boot" highlighted={true} />
                  <Skill name="asyncio" highlighted={true} />
                  <Skill name="Pydantic" />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3">Databases & Brokers</h3>
                <div className="flex flex-wrap gap-2">
                  <Skill name="PostgreSQL" highlighted={true} />
                  <Skill name="Redis" highlighted={true} />
                  <Skill name="Kafka" highlighted={true} />
                  <Skill name="MongoDB" />
                  <Skill name="Memcached" />
                  <Skill name="Cassandra" />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3">Infrastructure & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Skill name="Docker" highlighted={true} />
                  <Skill name="Nginx" highlighted={true} />
                  <Skill name="Git" highlighted={true} />
                  <Skill name="GitHub Actions" highlighted={true} />
                  <Skill name="GCP" />
                  <Skill name="AWS" />
                  <Skill name="Kubernetes" />
                  <Skill name="Elasticsearch" />
                  <Skill name="Fluentd" />
                  <Skill name="Kibana" />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3">Testing & Methodologies</h3>
                <div className="flex flex-wrap gap-2">
                  <Skill name="pytest" highlighted={true} />
                  <Skill name="unittest" />
                  <Skill name="Agile" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
