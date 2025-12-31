import React, { useState, useEffect } from 'react';

// --- Reusable Sub-Components ---

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
    {children}
  </a>
);

const ProjectCard = ({ title, desc, tags, github, live, gradient }) => (
  <div className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
    <div className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center p-6 text-center`}>
      <span className="text-white font-black text-2xl tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity uppercase">
        {title}
      </span>
    </div>
    <div className="p-8">
      <div className="flex gap-2 mb-4 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h4>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{desc}</p>
      <div className="flex gap-6">
        <a href={github} target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">Code ↗</a>
        <a href={live} target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">Live Demo ↗</a>
      </div>
    </div>
  </div>
);

// --- Main App Component ---

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-100 dark:selection:bg-blue-900 transition-colors duration-300">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            RISHABH<span className="text-slate-400 dark:text-slate-600">.portfolio</span>
          </h1>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-blue-500/50 transition-all"
              aria-label="Toggle Theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="about" className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-400/10 blur-[120px] rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              AVAILABLE FOR INTERNSHIPS
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Building the Web with <br />
              <span className="text-blue-600">MERN</span> & Logic.
            </h2>
            
            <p className="mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Hi, I'm <span className="font-semibold text-slate-900 dark:text-white">Rishabh Singh</span>. 
              A 3rd-year CS student at BBDU with an <span className="text-blue-600 font-bold underline underline-offset-4">8.9 CGPA</span>. 
              I bridge the gap between complex logic and seamless user experiences.
            </p>
            
            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://docs.google.com/document/d/1NwZEuswsYxlnsbx4xw41vtNRhNAiUk98/edit?usp=sharing" 
                target="_blank" rel="noreferrer"
                className="group relative bg-slate-900 dark:bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:shadow-[0_20px_50px_rgba(37,_99,_235,_0.3)] transition-all flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Open Resume ↗</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#projects" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center">
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <a href="https://github.com/rishabh17-code" target="_blank" rel="noreferrer" className="text-sm font-bold flex items-center gap-2">GITHUB</a>
              <a href="https://www.linkedin.com/in/rishabh-singh-8273292a3" target="_blank" rel="noreferrer" className="text-sm font-bold flex items-center gap-2">LINKEDIN</a>
              <a href="https://leetcode.com/u/Rishabhsingh_17/" target="_blank" rel="noreferrer" className="text-sm font-bold flex items-center gap-2 text-yellow-600">LEETCODE</a>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white">Featured Projects</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Selected works that showcase technical depth.</p>
              </div>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800 mx-8 hidden md:block"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <ProjectCard 
                title="Student Management"
                desc="A robust MERN application with MySQL integration via Aiven Cloud. Focused on relational data integrity and admin workflows."
                tags={['React', 'Node.js', 'MySQL', 'Express']}
                github="https://github.com/rishabh17-code/student-management-system"
                live="https://student-management-system-2-0v8x.onrender.com"
                gradient="from-blue-600 to-cyan-500"
              />
              <ProjectCard 
                title="Placement Tracker"
                desc="MERN-based placement management system featuring real-time drive notifications and automated student eligibility checks. Implemented secure REST APIs for data handling and a responsive UI for seamless student-admin interaction."
                tags={['MERN Stack', 'Tailwind', 'REST API']}
                github="https://github.com/rishabh17-code/Smart-Placement-System"
                live="https://smart-placement-system-kappa.vercel.app/"
                gradient="from-indigo-600 to-purple-600"
              />
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-black mb-16 text-center tracking-tight">Technical Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Frontend', skills: ['React.js', 'Tailwind CSS', 'html'], color: 'text-blue-500' },
                { title: 'Backend', skills: ['Node.js', 'Express', 'REST APIs'], color: 'text-emerald-500' },
                { title: 'Database', skills: ['MongoDB', 'MySQL'], color: 'text-orange-500' },
                { title: 'Languages', skills: ['java', 'Python', 'JavaScript'], color: 'text-purple-500' },
                { title: 'tools', skills: ['postman', 'github', 'atlas','aiven'], color: 'text-yellow-500' }
              ].map((cat) => (
                <div key={cat.title} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h5 className={`${cat.color} font-black mb-6 uppercase text-xs tracking-[0.2em]`}>{cat.title}</h5>
                  <ul className="space-y-4">
                    {cat.skills.map(skill => (
                      <li key={skill} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[3rem] mx-4 mb-10 transition-colors duration-500">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Let's build something together.</h3>
            <p className="text-slate-400 dark:text-slate-500 text-lg mb-16">Open for internship opportunities in 2026.</p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <a href="mailto:rishabhsing6422@gmail.com" className="group p-8 bg-slate-800 dark:bg-slate-50 rounded-3xl transition-all hover:bg-blue-600 dark:hover:bg-blue-600">
                <p className="text-xs font-bold text-slate-500 group-hover:text-blue-200 mb-2 uppercase tracking-widest">Email Me</p>
                <p className="text-lg font-bold group-hover:text-white">rishabhsing6422@gmail.com</p>
              </a>
              <a href="tel:+919628909600" className="group p-8 bg-slate-800 dark:bg-slate-50 rounded-3xl transition-all hover:bg-emerald-600 dark:hover:bg-emerald-600">
                <p className="text-xs font-bold text-slate-500 group-hover:text-emerald-200 mb-2 uppercase tracking-widest">Call Me</p>
                <p className="text-lg font-bold group-hover:text-white">+91 96289 09600</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-slate-100 dark:border-slate-900">
        <p className="text-slate-400 text-sm font-medium">© 2026 Rishabh Singh • Built with React & Tailwind</p>
      </footer>
    </div>
  );
}

export default App;