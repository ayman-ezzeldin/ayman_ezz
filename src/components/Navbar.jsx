import { useEffect, memo, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import logo from "/logo.webp";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = window.location.pathname;

  useEffect(() => {
    setToggle(false);
  }, [active]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center  bg-blur sticky top-0 z-50  `}
    >
      <div
        className="w-full flex justify-between items-center max-w-7xl mx-auto
          backdrop-blur-md backdrop-saturate-200 rounded-xl shadow-sm px-4 py-3"
      >
        {" "}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain aspect-square"
          />
          <p
            className={`text-[18px] ${styles.gridentText} font-bold cursor-pointer flex `}
          >
            Ayman Ezz
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {/* <li>
            <Link
              to="/resume"
              className={`${
                active === "Resume" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              onClick={() => setActive("Resume")}
            >
              Resume
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="/blog"
              className={`${
                active === "Blog" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              onClick={() => setActive("Blog")}
            >
              Blog
            </Link>
          </li> */}
          {navLinks.map((link) =>
            location !== "/" ? (
              <li>
                <Link
                  to={`/`}
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </Link>
              </li>
            ) : (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            )
          )}

          <li>
            <a
              href="https://drive.google.com/uc?export=download&id=1NqPvbP8HogDtJ-Vugkon4xy9eNgEJRLG"
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
          </li>
        </ul>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain aspect-square cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {/* <li>
                <Link
                  to="/resume"
                  className={`${
                    active === "Resume" ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => setActive("Resume")}
                >
                  Resume
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="/blog"
                  className={`${
                    active === "Blog" ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer `}
                  onClick={() => setActive("Blog")}
                >
                  Blog
                </Link>
              </li> */}
              {navLinks.map((link) =>
                location !== "/" ? (
                  <li>
                    <Link
                      to={`/`}
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } hover:text-white text-[18px] font-medium cursor-pointer`}
                      onClick={() => setActive(link.title)}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </Link>
                  </li>
                ) : (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(link.title)}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                )
              )}

              <li>
                <a
                  href="https://drive.google.com/uc?export=download&id=1NqPvbP8HogDtJ-Vugkon4xy9eNgEJRLG"
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
