import React from 'react';

function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-900 scroll-smooth">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tighter text-blue-600">RISHABH.DEV</h1>
        <div className="space-x-6 hidden md:flex font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="about" className="py-20 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Available for Internships
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Building the Web with <span className="text-blue-600">MERN</span> & Logic
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Hi, I'm <span className="font-semibold text-gray-900">Rishabh Singh</span>, a 3rd-year CS student at BBDU. 
            With an <span className="text-blue-600 font-bold">8.9 CGPA</span> and <span className="text-blue-600 font-bold">120+ LeetCode</span> problems solved, I specialize in full-stack 
            applications and have a deep interest in AI integrations.
          </p>
          
          {/* Social Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://github.com/rishabh17-code" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-black transition">GitHub</a>
            <a href="https://www.linkedin.com/in/rishabh-singh-8273292a3" target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-700 text-white rounded-md text-sm font-medium hover:bg-blue-800 transition">LinkedIn</a>
            <a href="https://leetcode.com/u/Rishabhsingh_17/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-yellow-500 text-white rounded-md text-sm font-medium hover:bg-yellow-600 transition">LeetCode</a>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://docs.google.com/document/d/1NwZEuswsYxlnsbx4xw41vtNRhNAiUk98/edit?usp=sharing" 
              target="_blank" 
              rel="noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
            >
              Open Resume <span>↗</span>
            </a>
            <a href="#projects" className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition flex items-center justify-center">
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl uppercase tracking-widest">Student Management</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold">Student Management System</h4>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">A full-stack MERN application with MySQL database to handle student records, grades, and admin tasks.</p>
                <div className="flex gap-2 mt-4">
                  <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">React</span>
                  <span className="text-[10px] font-bold bg-green-50 text-green-600 px-2 py-1 rounded">Node.js</span>
                  <span className="text-[10px] font-bold bg-orange-50 text-orange-600 px-2 py-1 rounded">MySQL</span>
                </div>
                <div className="mt-6 flex gap-4 text-sm font-bold">
                  <a href="https://github.com/rishabh17-code/student-management-system" className="text-blue-600 hover:underline">GitHub</a>
                  <a href="https://student-management-system-2-0v8x.onrender.com" className="text-blue-600 hover:underline">Live Demo</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl uppercase tracking-widest">Placement Tracker</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold">Placement Drive Tracker</h4>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">System to track upcoming campus drives and student eligibility. Real-time updates for placement cell.</p>
                <div className="flex gap-2 mt-4">
                  <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">Express</span>
                  <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-2 py-1 rounded">MongoDB</span>
                  <span className="text-[10px] font-bold bg-red-50 text-red-600 px-2 py-1 rounded">Tailwind</span>
                </div>
                <div className="mt-6 flex gap-4 text-sm font-bold">
                  <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                  <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-16 text-center">Technical Expertise</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h5 className="text-blue-400 font-bold mb-4 uppercase text-xs tracking-widest">Frontend</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div>
              <h5 className="text-blue-400 font-bold mb-4 uppercase text-xs tracking-widest">Backend</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Node.js / Express</li>
                <li>MongoDB / MySQL</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div>
              <h5 className="text-blue-400 font-bold mb-4 uppercase text-xs tracking-widest">AI & Data</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Python</li>
                <li>Neural Networks</li>
                <li>Machine Learning</li>
              </ul>
            </div>
            <div>
              <h5 className="text-blue-400 font-bold mb-4 uppercase text-xs tracking-widest">Core CS</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>DBMS & SQL</li>
                <li>Operating Systems</li>
                <li>OOPS</li>
                <li>Computer Networks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-12 italic">Currently open for internship opportunities.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-2xl mb-2">📧</div>
              <h4 className="font-bold mb-1">Email</h4>
              <p className="text-sm text-gray-500 mb-3">rishabhsing6422@gmail.com</p>
              <a href="mailto:rishabhsing6422@gmail.com" className="text-xs font-bold text-blue-600">SEND MAIL</a>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-2xl mb-2">📞</div>
              <h4 className="font-bold mb-1">Contact</h4>
              <p className="text-sm text-gray-500 mb-3">+91 9628909600</p>
              <a href="tel:+919628909600" className="text-xs font-bold text-green-600">CALL NOW</a>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-2xl mb-2">📍</div>
              <h4 className="font-bold mb-1">Location</h4>
              <p className="text-sm text-gray-500 mb-3">Lucknow, UP</p>
             {/* <span className="text-[10px] text-gray-400">BBD University</span>*/}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-12 bg-white text-center border-t border-gray-100">
        <p className="text-gray-400 text-xs">© 2025 Rishabh Singh | All Rights Reserved.</p>
        <div className="mt-6 flex justify-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <a href="#" className="hover:text-blue-600">GitHub</a>
          <a href="#" className="hover:text-blue-600">LinkedIn</a>
          <a href="#" className="hover:text-blue-600">LeetCode</a>
        </div>
      </footer>
    </div>
  );
}

export default App;