import { useState } from 'react';
import nirmaanCert from '../assets/nirmaan.jpeg';

export default function Achievements() {
  const [popup, setPopup] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4 bg-neutral-900 rounded-2xl shadow-lg relative">
      <h1 className="text-4xl font-extrabold text-blue-500 mb-6">Achievements</h1>
      <div className="w-full max-w-3xl flex flex-col gap-8">
        {/* Hackathon Example */}
        <div className="bg-neutral-800 rounded-xl p-6 shadow border border-neutral-700 flex flex-col md:flex-row items-center gap-8">
          <img
            src={nirmaanCert}
            alt="Nirmaan Hackathon Certificate"
            className="w-full md:w-64 h-48 object-contain rounded border-2 border-blue-600 bg-neutral-900"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">Nirmaan Hackathon</h2>
            <p className="text-gray-300 mb-2">
              Participated in the{" "}
              <span className="text-blue-400 font-semibold">Nirmaan Hackathon</span>, a national-level competition focused on innovative solutions for real-world problems.
              Collaborated with a talented team to design and develop a web application under tight deadlines, gaining valuable experience in teamwork, problem-solving, and rapid prototyping.
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-2">
              <li>Developed a full-stack solution in 24 hours</li>
              <li>Worked with React, Node.js, and MongoDB</li>
              <li>Presented the project to industry experts and judges</li>
            </ul>
            <div className="flex gap-4 mt-2 flex-wrap">
            
              <a
                href="https://github.com/mayur13p06/Nirmaan-Hackathon-StudSync-Platform-"
                className="text-blue-400 hover:underline font-semibold"
              >
                Project Source
              </a>
              <button
                onClick={() => setPopup(true)}
                className="text-blue-400 hover:underline font-semibold focus:outline-none"
              >
                View Certificate
              </button>
            </div>
            <span className="inline-block bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium mt-4">
              2024
            </span>
          </div>
        </div>
      </div>
      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative bg-neutral-900 rounded-xl shadow-lg p-4 max-w-2xl w-full flex flex-col items-center">
            <button
              onClick={() => setPopup(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-blue-400"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={nirmaanCert}
              alt="Nirmaan Hackathon Certificate"
              className="max-h-[70vh] w-auto rounded border-4 border-blue-600 object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}