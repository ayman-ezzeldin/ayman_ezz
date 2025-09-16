const Resume = () => {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1wQNjPg0Uj8u7NtEwNzJDJMlq9eo-sF_S"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white flex items-center gap-2 font-semibold"
      aria-label="Download Resume"
    >
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M3 14.5a1.5 1.5 0 001.5 1.5h11a1.5 1.5 0 001.5-1.5V9a.75.75 0 011.5 0v5.5A3 3 0 0115.5 17h-11a3 3 0 01-3-3V9a.75.75 0 011.5 0v5.5zM10.75 2a.75.75 0 00-1.5 0v7.19l-2.22-2.22a.75.75 0 10-1.06 1.06l3.5 3.5a.75.75 0 001.06 0l3.5-3.5a.75.75 0 10-1.06-1.06l-2.22 2.22V2z"
          clipRule="evenodd"
        />
      </svg>
      <span>Resume</span>
    </a>
  );
};

export default Resume;
