import { useState } from 'react';
import gd from '../assets/gd.jpg';
import certnode from '../assets/node.jpg';
import certMongoDB from '../assets/mongo.jpg';
import cergithub from '../assets/github.jpg';

const certificates = [
  {
    img: gd,
    title: 'Group Discussion',
    org: 'Coursera | 2024',
  },
  {
    img: certnode,
    title: 'NODE JS',
    org: 'Udemy | 2023',
  },
  {
    img: certMongoDB,
    title: 'MongoDB Basics',
    org: 'MongoDB University | 2023',
  },
  {
    img: cergithub,
    title: 'GitHub Basics',
    org: 'Coursera | 2022',
  },
];

export default function Certifications() {
  const [popupImg, setPopupImg] = useState(null);

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4 bg-neutral-900 rounded-2xl shadow-lg relative">
      <h1 className="text-4xl font-extrabold text-blue-500 mb-4">Certifications</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        Here are some of my professional certifications that showcase my skills and commitment to continuous learning.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        {certificates.map((cert, idx) => (
          <div
            key={cert.title}
            className="bg-neutral-800 rounded-xl p-6 shadow border border-neutral-700 flex flex-col items-center"
          >
            <img
              src={cert.img}
              alt={cert.title + ' Certificate'}
              className="w-full h-40 object-contain rounded mb-4 border border-blue-600"
            />
            <h2 className="text-xl font-bold text-white mb-2">{cert.title}</h2>
            <p className="text-gray-400 mb-2">{cert.org}</p>
            <button
              onClick={() => setPopupImg(cert.img)}
              className="text-blue-400 hover:underline focus:outline-none"
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>
      {/* Popup */}
      {popupImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative bg-neutral-900 rounded-xl shadow-lg p-4 max-w-2xl w-full flex flex-col items-center">
            <button
              onClick={() => setPopupImg(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-blue-400"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={popupImg}
              alt="Certificate"
              className="max-h-[70vh] w-auto rounded border-4 border-blue-600 object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}