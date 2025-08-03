import profileImg from '../assets/profile.jpg';
import About from './About';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';
import Certifications from './Certifications';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-br from-neutral-950 to-neutral-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-5xl py-20">
          {/* Left Section */}
          <div
            className="flex flex-col items-end md:items-start md:w-1/3 animate-fade-in-left"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-white text-lg font-bold tracking-widest mb-2">MAYUR PALVE</span>
            <span className="text-white text-5xl md:text-6xl font-extrabold leading-tight mb-2">FULL STACK</span>
            <span className="text-white text-5xl md:text-6xl font-extrabold leading-tight mb-2">DEVELOPER</span>
            <span className="text-gray-400 text-lg mt-4">
              I'm an India-based full stack web developer.<br />
              I design and build modern web applications.
            </span>
            <span className="text-gray-500 text-base mt-4">
              Skilled in React, Node.js, Express, MongoDB, and UI/UX design.<br />
              Always learning, always building.
            </span>
            <a
              href="#projects"
              className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition transform hover:scale-105 duration-200"
            >
              View My Projects
            </a>
          </div>
          {/* Center Section - Profile Image */}
          <div
            className="flex flex-col items-center relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="rounded-2xl overflow-hidden bg-neutral-800 shadow-xl border-4 border-blue-600 transition-transform duration-300 hover:scale-105">
              <img
                src={profileImg}
                alt="Mayur Palve"
                className="w-64 h-80 object-cover"
              />
            </div>
          </div>
          {/* Right Section - Social Links */}
          <div
            className="flex flex-col items-start md:w-1/3 mt-10 md:mt-0 animate-fade-in-right"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-white text-xl font-bold mb-4">Connect with me</h2>
            <div className="flex flex-col gap-4">
              <a href="mailto:palvemayur192@gmail.com" className="flex items-center gap-2 text-blue-400 hover:underline text-lg transition-transform hover:scale-105">
                <FaEnvelope className="text-blue-400" /> Email
              </a>
              <a href="https://github.com/mayur13p06" className="flex items-center gap-2 text-blue-400 hover:underline text-lg transition-transform hover:scale-105">
                <FaGithub className="text-blue-400" /> GitHub
              </a>
              <a href="https://linkedin.com/in/mayurpalve" className="flex items-center gap-2 text-blue-400 hover:underline text-lg transition-transform hover:scale-105">
                <FaLinkedin className="text-blue-400" /> LinkedIn
              </a>
            </div>
            <div className="mt-8">
              <h2 className="text-white text-xl font-bold mb-2">Skills</h2>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium animate-bounce-slow">React</li>
                <li className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium animate-bounce-slow" style={{ animationDelay: "0.1s" }}>Node.js</li>
                <li className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium animate-bounce-slow" style={{ animationDelay: "0.2s" }}>Express</li>
                <li className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium animate-bounce-slow" style={{ animationDelay: "0.3s" }}>MongoDB</li>
                <li className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium animate-bounce-slow" style={{ animationDelay: "0.4s" }}>JavaScript</li>
                <li className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium animate-bounce-slow" style={{ animationDelay: "0.5s" }}>UI/UX</li>
                <li className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium animate-bounce-slow" style={{ animationDelay: "0.6s" }}>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
        </section>
       
      {/* Projects Section */}
      <section id="projects" className="w-full py-20 flex justify-center bg-neutral-950 border-t border-neutral-800 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <div className="w-full max-w-5xl">
          <Projects />
        </div>
      </section>
      {/* Achievements Section */}
      <section id="achievements" className="w-full py-20 flex justify-center bg-neutral-900 border-t border-neutral-800 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <div className="w-full max-w-5xl">
          <Achievements />
        </div>
      </section>
      {/* Certificate  Section */}
      <section id="certifications" className="w-full py-20 flex justify-center bg-neutral-950 border-t border-neutral-800 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <div className="w-full max-w-5xl">
          <Certifications />
        </div>
      </section>
       {/* About Section */}
        <section id="about" className="w-full py-20 flex justify-center bg-neutral-900 border-t border-neutral-800 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-full max-w-5xl">
            <About />
            </div>
        </section>
      {/* Contact Section */}
      <section id="contact" className="w-full py-20 flex justify-center bg-neutral-950 border-t border-neutral-800 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <div className="w-full max-w-5xl">
          <Contact />
        </div>
      </section>
      
    </div>
  );
}



