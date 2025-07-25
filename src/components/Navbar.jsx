import { useEffect, memo, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import logo from "../assets/logo.webp";
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
      className={`${styles.paddingX} w-full flex items-center bg-bgColor py-5 sticky top-0 z-50  `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
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
          <li>
            <Link
              to="/resume"
              className={`${
                active === "Resume" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              onClick={() => setActive("Resume")}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`${
                active === "Blog" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              onClick={() => setActive("Blog")}
            >
              Blog
            </Link>
          </li>
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
              <li>
                <Link
                  to="/resume"
                  className={`${
                    active === "Resume" ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => setActive("Resume")}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`${
                    active === "Blog" ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer `}
                  onClick={() => setActive("Blog")}
                >
                  Blog
                </Link>
              </li>
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
