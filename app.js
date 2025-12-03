import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Terminal, 
  Cpu, 
  Globe, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight, 
  Loader,
  LayoutGrid,
  Download
} from 'lucide-react';

// --- Components ---

const GlowingButton = ({ children, onClick, className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-200"></div>
      <button 
        onClick={onClick}
        className="relative w-full flex items-center justify-center px-6 py-3 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 border border-gray-800 text-gray-100 group-hover:text-white transition duration-200"
      >
        {children}
      </button>
    </div>
  );
};

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
      {title}
    </h2>
    <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4"></div>
    {subtitle && <p className="text-gray-400 max-w-2xl">{subtitle}</p>}
  </div>
);

const BentoCard = ({ title, icon: Icon, children, className = "", span = "" }) => (
  <div className={`bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-900/80 group ${span} ${className}`}>
    <div className="flex items-start justify-between mb-4">
      <div className="p-2 bg-neutral-800/50 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
        <Icon size={24} />
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <div className="text-gray-400 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <span className="text-xl font-bold tracking-tighter text-white">
          PK<span className="text-cyan-500">.</span>A
        </span>
        <div className="hidden md:flex space-x-8">
          {['Skills', 'API Showcase', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="text-sm px-4 py-2 rounded-full border border-neutral-700 text-white hover:bg-neutral-800 transition-colors">
          Hire Me
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-start justify-center min-h-[80vh]">
    <div className="absolute top-20 right-0 -z-10 opacity-20">
      <div className="w-96 h-96 bg-cyan-500 rounded-full blur-[128px]"></div>
      <div className="w-96 h-96 bg-purple-500 rounded-full blur-[128px] absolute top-20 -right-20"></div>
    </div>
    
    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
      </span>
      <span>Available for Full Stack Projects</span>
    </div>

    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
      Hello, I'm <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        Praveen Kumar.A
      </span>
    </h1>
    
    <p className="text-xl text-gray-400 max-w-2xl mb-10">
      Architecting scalable backend logic with <span className="text-white font-medium">Node.js</span> & <span className="text-white font-medium">Python</span>. 
      Designing robust data structures with <span className="text-white font-medium">MongoDB</span> & <span className="text-white font-medium">MySQL</span>.
    </p>

    <div className="flex flex-col sm:flex-row gap-4">
      <GlowingButton onClick={() => alert("Resume download simulated.")}>
        <Download size={18} className="mr-2" />
        Download Resume
      </GlowingButton>
      
      <button className="px-6 py-3 rounded-lg border border-neutral-700 text-white hover:bg-neutral-800 transition-all flex items-center justify-center">
        <Github size={18} className="mr-2" />
        View Github
      </button>
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <SectionTitle 
      title="Technical Architecture" 
      subtitle="A bento-grid overview of my core technical competencies and tools." 
    />
    
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
      
      {/* Large Focus Item */}
      <BentoCard 
        title="Backend Engineering" 
        icon={Server} 
        span="md:col-span-2 lg:col-span-2 row-span-2"
        className="bg-gradient-to-br from-neutral-900 to-neutral-900/50"
      >
        <p className="mb-4 text-gray-300">
          Specialized in building high-performance RESTful APIs and Microservices using Node.js (Express) and Python (Django/FastAPI).
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded">Node.js</span>
          <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs rounded">Python</span>
          <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded">Docker</span>
          <span className="px-2 py-1 bg-white/10 border border-white/20 text-white text-xs rounded">Redis</span>
        </div>
      </BentoCard>

      {/* Database Item */}
      <BentoCard title="Database Design" icon={Database} span="md:col-span-1 lg:col-span-1">
        Mastery in SQL (MySQL, PostgreSQL) for relational data and NoSQL (MongoDB) for flexible schemas.
      </BentoCard>

      {/* Frontend Item */}
      <BentoCard title="Modern UI/UX" icon={LayoutGrid} span="md:col-span-1 lg:col-span-1">
        Building responsive interfaces with React.js, Tailwind CSS, and Framer Motion.
      </BentoCard>

      {/* API Item */}
      <BentoCard title="API Integration" icon={Globe} span="md:col-span-1 lg:col-span-2">
        Seamless 3rd party integrations (Stripe, Twilio, AWS S3) and secure JWT authentication systems.
      </BentoCard>

      {/* Tools Item */}
      <BentoCard title="DevOps & Tools" icon={Terminal} span="md:col-span-2 md:col-start-2 lg:col-span-2">
        <ul className="grid grid-cols-2 gap-2 text-sm mt-2">
          <li className="flex items-center"><ChevronRight size={14} className="text-cyan-500 mr-1"/> Git/GitHub</li>
          <li className="flex items-center"><ChevronRight size={14} className="text-cyan-500 mr-1"/> AWS EC2/Lambda</li>
          <li className="flex items-center"><ChevronRight size={14} className="text-cyan-500 mr-1"/> CI/CD Pipelines</li>
          <li className="flex items-center"><ChevronRight size={14} className="text-cyan-500 mr-1"/> Linux Admin</li>
        </ul>
      </BentoCard>

    </div>
  </section>
);

const ApiShowcase = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');

  const fetchData = async () => {
    setLoading(true);
    try {
      // Simulating a slight network delay for effect
      await new Promise(resolve => setTimeout(resolve, 800));
      const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("API Error", error);
    } finally {
      setLoading(false);
    }
  };

  const codeString = `
// Asynchronous Data Fetching
const fetchUsers = async () => {
  try {
    const response = await fetch(
      'https://api.example.com/users?limit=3'
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch", err);
  }
};`;

  return (
    <section id="api-showcase" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-neutral-900/20">
      <SectionTitle 
        title="Live API Integration" 
        subtitle="Demonstrating async/await patterns, state management, and data rendering in React." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Code Block */}
        <div className="bg-[#0d1117] rounded-xl border border-neutral-800 overflow-hidden font-mono text-sm">
          <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-neutral-800">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-xs">api_service.js</span>
          </div>
          <div className="p-4 text-gray-300 overflow-x-auto">
            <pre className="language-javascript">
              <code>
                <span className="text-purple-400">const</span> <span className="text-blue-400">fetchUsers</span> = <span className="text-purple-400">async</span> () ={'>'} {'{'}{'\n'}
                {'  '}<span className="text-purple-400">try</span> {'{'}{'\n'}
                {'    '}<span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> <span className="text-yellow-300">fetch</span>({'('}<span className="text-green-400">'/api/users'</span>{')'};{'\n'}
                {'    '}<span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> response.<span className="text-blue-400">json</span>();{'\n'}
                {'    '}<span className="text-purple-400">return</span> data;{'\n'}
                {'  '} {'}'} <span className="text-purple-400">catch</span> (err) {'{'}{'\n'}
                {'    '}console.<span className="text-blue-400">error</span>(err);{'\n'}
                {'  '} {'}'}{'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </div>

        {/* Right: Live Demo */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col relative min-h-[300px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Live Result</h3>
            <button 
              onClick={fetchData}
              disabled={loading}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm rounded-lg transition-colors flex items-center gap-2 border border-neutral-700"
            >
              {loading ? <Loader size={16} className="animate-spin" /> : <Code size={16} />}
              {loading ? 'Fetching...' : 'Run Request'}
            </button>
          </div>

          <div className="flex-1 bg-black rounded-lg border border-neutral-800 p-4 overflow-y-auto">
            {!data && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-gray-500">
                <Terminal size={48} className="mb-4 opacity-50" />
                <p>Click "Run Request" to fetch JSON data.</p>
              </div>
            )}
            
            {loading && (
              <div className="h-full flex items-center justify-center">
                 <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {data && !loading && (
              <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {data.map((user) => (
                  <div key={user.id} className="p-3 rounded bg-neutral-900 border border-neutral-800 hover:border-cyan-900/50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-cyan-400">{user.name}</p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                      </div>
                      <span className="text-xs bg-neutral-800 text-gray-500 px-2 py-1 rounded">ID: {user.id}</span>
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-2 border-t border-neutral-800 text-xs text-green-500 font-mono">
                  {'>'} HTTP 200 OK • {data.length} records fetched
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Scalable</h2>
      <p className="text-gray-400 mb-10 max-w-lg mx-auto">
        I'm currently available for freelance projects and full-time opportunities.
        Let's discuss how I can contribute to your backend architecture.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href="mailto:praveen@example.com" className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
          <div className="p-3 bg-neutral-900 rounded-full group-hover:bg-neutral-800 transition-colors border border-neutral-800">
            <Mail size={20} className="text-cyan-500" />
          </div>
          <span className="font-medium">praveen@example.com</span>
        </a>
        
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
          <div className="p-3 bg-neutral-900 rounded-full group-hover:bg-neutral-800 transition-colors border border-neutral-800">
            <Linkedin size={20} className="text-blue-500" />
          </div>
          <span className="font-medium">LinkedIn</span>
        </a>
      </div>
      
      <div className="mt-20 text-sm text-gray-600">
        © {new Date().getFullYear()} Praveen Kumar.A. All rights reserved. Built with React & Tailwind.
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
        <ApiShowcase />
      </main>
      <Contact />
    </div>
  );
};

export default App;

