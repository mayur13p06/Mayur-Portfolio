export default function Projects() {
  const projects = [
    {
      title: "Google Pay Clone Website",
      description:
        "The Google Play Clone Website and my team created this project we cloned the website of Google Pay simply using HTML and CSS",
      tech: ["HTML", "CSS", "PHP"],
      link: "https://googlepayclone.netlify.app/",
        demo: "https://googlepayclone.netlify.app/",
    },
    {
      title: "Travel Website",
      description:
        "A travel website that allows to get information about various Travel location. Tech Stack use :- HTML CSS PHP ",
      tech: ["HTML", "CSS", "PHP"],
      link: "https://github.com/mayur13p06/Let-s-Go-Travel-web",
      demo: "https://letgotravel.netlify.app/",
    },
    
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4 bg-neutral-900 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-blue-500 mb-8">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="bg-neutral-800 rounded-xl p-6 shadow border border-neutral-700 flex flex-col"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.link}
                className="text-blue-400 hover:underline font-semibold"
              >
                Source Code
              </a>
              <a
                href={project.demo}
                className="text-blue-400 hover:underline font-semibold"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}