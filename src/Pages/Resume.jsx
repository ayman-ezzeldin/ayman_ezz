const Resume = () => {
  return (
    <div className="bg-black min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-200">My Resume</h1>
          <p className="text-lg text-gray-400 mt-2">A summary of my qualifications and experiences</p>
          <a
            href="/Ayman-ezz_front-end.pdf"
            download
            className="mt-4 inline-block bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900"
          >
            Download Resume (PDF)
          </a>
        </div>

        <div className="shadow-lg rounded-lg p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-300">Education</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <h3 className="font-bold text-gray-400">BSc in Computer and Systems Engineering</h3>
                <p className="text-sm text-gray-400">Zagazig University - Expected 2025</p>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-300">Experience</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <h3 className="font-bold text-gray-400">Frontend Developer</h3>
                <p className="text-sm text-gray-400">Google Developer Groups - Since 2024</p>
                <p className="text-gray-400 mt-2">- Leading frontend track sessions and guiding peers.</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-300">Skills</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <span className="bg-gray-100 font-semibold text-black py-1 px-2 rounded-lg">React.js</span>
              <span className="bg-gray-100 font-semibold text-black py-1 px-2 rounded-lg">TypeScript</span>
              <span className="bg-gray-100 font-semibold text-black py-1 px-2 rounded-lg">Tailwind CSS</span>
              <span className="bg-gray-100 font-semibold text-black py-1 px-2 rounded-lg">Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
