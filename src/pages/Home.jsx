import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Optional: a small flicker effect for that old CRT vibe
// You could also place this in a global CSS file instead:
const FlickerStyles = () => (
  <style>{`
    @keyframes flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        opacity: .99;
      }
      20%, 24%, 55% {
        opacity: .4;
      }
    }
    .animate-flicker {
      animation: flicker 2s infinite;
    }
  `}</style>
);

// HackerText (unchanged except for small cosmetic name ref)
const HackerText = ({ text, speed = 50 }) => {
  const [scrambled, setScrambled] = useState(text);
  const iterationsRef = useRef(0);

  useEffect(() => {
    const chars = '!<>-_\\/[]{}—=+*^?#@%$'.split('');
    iterationsRef.current = 0;

    const interval = setInterval(() => {
      setScrambled(prev =>
        prev
          .split('')
          .map((char, idx) => {
            if (idx < Math.floor(iterationsRef.current)) {
              return text[idx];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      iterationsRef.current += 1 / 3;
      if (iterationsRef.current >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{scrambled}</span>;
};

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  const terminalContent = [
    { cmd: 'whoami', output: 'Kevin Leung' },
    {
      cmd: 'cat about.txt',
      output:
        'Backend Developer & Computer Science Student\nPassionate about building scalable systems and solving complex problems',
    },
    {
      cmd: 'cat education.txt',
      output:
        'Oregon State University\nComputer Science Major\nGPA: 3.54\nExpected Graduation: December 2025',
    },
    {
      cmd: 'ls ./projects/',
      output:
        '📁 Game_Market_Analysis_API/\n📁 Data_Processing_Pipeline/\n📁 Psychology_Fact_Generator/',
    },
    {
      cmd: 'cat skills.json',
      output:
        '{\n  "languages": ["Python", "Java", "JavaScript"],\n  "frameworks": ["FastAPI", "Spring Boot"],\n  "infrastructure": ["Docker", "GCP", "PostgreSQL", "Redis"],\n  "tools": ["Git", "GitHub Actions", "Nginx"]\n}',
    },
    {
      cmd: 'cat interests.txt',
      output:
        'Backend Development\nDistributed Systems\nCloud Architecture\nSystem Design',
    },
    {
      cmd: 'echo "Thanks for visiting!"',
      output: 'Feel free to check out my projects or resume 👾',
    },
  ];

  useEffect(() => {
    if (currentLine < terminalContent.length * 2) {
      const timer = setTimeout(() => {
        const item = terminalContent[Math.floor(currentLine / 2)];
        setLines(prev => [
          ...prev,
          currentLine % 2 === 0 ? `$ ${item.cmd}` : item.output,
        ]);
        setCurrentLine(prev => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <div className="relative bg-black text-green-400 p-8 rounded-lg font-mono w-full max-w-4xl mx-auto shadow-xl overflow-hidden">
      {/* The flickering scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Scan-lines.svg/640px-Scan-lines.svg.png')] bg-repeat mix-blend-overlay animate-flicker" />
      
      <div className="relative z-10 flex items-center justify-between mb-4 bg-[#151515] p-2 rounded">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm text-green-400">kevin@portfolio:~</span>
      </div>

      <div className="relative z-10 space-y-2">
        {lines.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
        <span className="inline-block w-2 h-4 bg-green-400 animate-pulse">_</span>
      </div>
    </div>
  );
};

// Simplified TypeWriter
const TypeWriter = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phase, setPhase] = useState(0);
  const fullTexts = ['Hello World!', "I'm Kevin Leung."];

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseBeforeDelete = 1000;

    if (phase === 0 || phase === 2) {
      const currentFullText = fullTexts[phase === 0 ? 0 : 1];
      if (text.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setText(currentFullText.slice(0, text.length + 1));
        }, typeSpeed);
        return () => clearTimeout(timeout);
      } else if (phase === 0) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setPhase(1);
        }, pauseBeforeDelete);
        return () => clearTimeout(timeout);
      } else if (phase === 2 && text === fullTexts[1]) {
        const timeout = setTimeout(() => {
          onComplete();
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else if (phase === 1) {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setPhase(2);
      }
    }
  }, [text, phase, onComplete]);

  return (
    <span className="inline-flex">
      {text}
      <span
        className={`ml-1 border-r-2 border-gray-800 ${
          isDeleting ? 'animate-pulse' : 'animate-blink'
        }`}
      >
        &nbsp;
      </span>
    </span>
  );
};

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [terminalMode, setTerminalMode] = useState(false);

  const toggleMode = () => {
    setTerminalMode(!terminalMode);
    document.body.style.backgroundColor = !terminalMode ? '#111' : '#f9fafb';
  };

  return (
    <main className="max-w-6xl mx-auto p-6 transition-all duration-500">
      {/* Flicker keyframes */}
      <FlickerStyles />

      {!showContent ? (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-medium tracking-wide">
            <TypeWriter onComplete={() => setShowContent(true)} />
          </h1>
        </div>
      ) : (
        <div className="mt-32 mb-24 animate-fade-in">
          {terminalMode ? (
            <Terminal />
          ) : (
            <>
              {/* Hero Section */}
              <div className="text-center mb-16">
                <h1 className="text-6xl font-medium mb-6 tracking-wide">
                  <HackerText text="KEVIN LEUNG" speed={30} />
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                  Computer Science Student at Oregon State University
                  <br />
                  <span className="text-lg">
                    GPA: 3.54 • Expected Graduation: December 2025
                  </span>
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    to="/projects"
                    className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    View Projects
                  </Link>
                  <Link
                    to="/resume"
                    className="px-6 py-3 border border-gray-800 text-gray-800 rounded hover:bg-gray-50 transition-colors"
                  >
                    Resume
                  </Link>
                </div>
              </div>

              {/* About / Focus Areas / Tech ... same as before */}
              <div className="text-center mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  A Little About Me
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                  I'm a computer science student at Oregon State University. Along with that I love backend systems and distributed systems.
                  Right now I'm working on my Docker Certified Associate and in the future the Certified Kubernetes Application Developer exam.
                  Outside of schoolwork, I enjoy playing the guitar and going to the gym. 
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="text-xl font-medium text-gray-800 mb-2">
                    API Development
                  </div>
                  <div className="text-gray-600">
                    Building high-performance REST APIs with FastAPI & Spring Boot
                  </div>
                </div>
                <div className="bg-white p-6 rounded shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="text-xl font-medium text-gray-800 mb-2">
                    Distributed Systems
                  </div>
                  <div className="text-gray-600">
                    Designing microservices with Kafka, Redis, and PostgreSQL
                  </div>
                </div>
                <div className="bg-white p-6 rounded shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="text-xl font-medium text-gray-800 mb-2">
                    DevOps
                  </div>
                  <div className="text-gray-600">
                    CI/CD with GitHub Actions, Docker, and Cloud Platforms
                  </div>
                </div>
              </div>

              <div className="text-center mt-24">
                <h2 className="text-xl font-medium mb-8 text-gray-800">
                  Technologies I Work With
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    'Python',
                    'FastAPI',
                    'Java',
                    'Docker',
                    'PostgreSQL',
                    'Redis',
                  ].map(tech => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-green-50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Tiny, "Secret" Toggle Button */}
          <div className="fixed bottom-4 right-4">
            <button
              onClick={toggleMode}
              className={`px-3 py-2 text-xs rounded font-mono transition-all duration-300 
                ${
                  terminalMode
                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30'
                    : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                }`}
              title="Toggle Terminal Mode"
            >
              {terminalMode ? 'Exit Terminal' : '>_'}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
