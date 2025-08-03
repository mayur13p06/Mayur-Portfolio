export default function About() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4 bg-neutral-900 rounded-2xl shadow-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <h1 className="text-4xl font-extrabold text-blue-500 mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>About Me</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        Hello! I'm Mayur Palve, a passionate Full Stack Web Developer based in
        India. I specialize in building modern, scalable, and responsive web
        applications using the latest technologies. My journey in web development
        started with curiosity and has grown into a deep love for creating
        digital experiences that solve real-world problems.
      </p>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
        <div className="bg-neutral-800 rounded-xl p-6 shadow border border-neutral-700 w-full md:w-1/2 animate-fade-in-left" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-xl font-bold text-white mb-2">Education</h2>
          <ul className="text-gray-400 list-disc list-inside">
            <li>Bachelor's in Computer Science</li>
            <li>Certified Full Stack Developer</li>
          </ul>
        </div>
        <div className="bg-neutral-800 rounded-xl p-6 shadow border border-neutral-700 w-full md:w-1/2 animate-fade-in-right" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-xl font-bold text-white mb-2">Interests</h2>
          <ul className="text-gray-400 list-disc list-inside">
            <li>Web & App Development</li>
            <li>UI/UX Design</li>
            <li>Open Source Contribution</li>
            <li>Learning New Technologies</li>
          </ul>
        </div>
      </div>
      <div className="max-w-2xl text-center animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
        <h2 className="text-xl font-bold text-white mb-2">My Approach</h2>
        <p className="text-gray-400">
          I believe in writing clean, maintainable code and collaborating with
          others to deliver the best results. My focus is always on user
          experience, performance, and accessibility. I enjoy working in teams and
          am always eager to learn and grow.
        </p>
      </div>
    </div>
  );
}

/* Add these animations to your global CSS (e.g., index.css or App.css):

@keyframes fade-in-left {
  0% { opacity: 0; transform: translateX(-40px);}
  100% { opacity: 1; transform: translateX(0);}
}
@keyframes fade-in-right {
  0% { opacity: 0; transform: translateX(40px);}
  100% { opacity: 1; transform: translateX(0);}
}
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(40px);}
  100% { opacity: 1; transform: translateY(0);}
}
@keyframes fade-in {
  0% { opacity: 0;}
  100% { opacity: 1;}
}

.animate-fade-in-left { animation: fade-in-left 1s both; }
.animate-fade-in-right { animation: fade-in-right 1s both; }
.animate-fade-in-up { animation: fade-in-up 1s both; }
.animate-fade-in { animation: fade-in 1.2s both; } */