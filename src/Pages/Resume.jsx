const Resume = () => {
  return (
    <div className="min-h-screen py-10 max-w-7xl mx-auto">
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

        <div>
          <h1 className="text-2xl" >Events</h1>
        </div>
      </div>
    </div>
  );
};

export default Resume;
