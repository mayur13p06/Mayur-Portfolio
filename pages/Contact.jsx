import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-4 bg-neutral-900 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-blue-500 mb-4">Contact Me</h1>
      <p className="text-lg text-gray-300 max-w-xl text-center mb-8">
        Feel free to reach out for collaborations, project discussions, or just to say hello!
      </p>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
        <a
          href="mailto:mayur@example.com"
          className="flex items-center gap-3 bg-neutral-800 hover:bg-blue-900 transition text-white px-6 py-3 rounded-full shadow border border-neutral-700 text-lg font-semibold"
        >
          <FaEnvelope className="text-blue-400 text-2xl" />
          Email
        </a>
        <a
          href="https://github.com/mayurpalve"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-neutral-800 hover:bg-blue-900 transition text-white px-6 py-3 rounded-full shadow border border-neutral-700 text-lg font-semibold"
        >
          <FaGithub className="text-blue-400 text-2xl" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/mayur13p06"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-neutral-800 hover:bg-blue-900 transition text-white px-6 py-3 rounded-full shadow border border-neutral-700 text-lg font-semibold"
        >
          <FaLinkedin className="text-blue-400 text-2xl" />
          LinkedIn
        </a>
      </div>
      <div className="flex gap-8 mt-4">
        <a
          href="https://twitter.com/Mayur_192"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/mayur_p0192"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-pink-400 hover:text-pink-200 transition text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="mt-10 text-gray-500 text-center text-sm">
        &copy; {new Date().getFullYear()} Mayur Palve. All rights reserved.
      </div>
    </div>
  );
}