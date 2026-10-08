import { useEffect, memo, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import logo from "/logo.webp";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Resume from "./Resume";

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
    <nav className={`${styles.paddingX} sticky top-0 z-50 w-full`}>
      <div
        className="
          mx-auto flex w-full max-w-7xl items-center justify-between
          rounded-2xl
          border border-white/[0.08]
          bg-bgColor/70
          px-4 py-2
          backdrop-blur-xl
          md:px-5
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img
            loading="lazy"
            src={logo}
            alt="Ayman Ezz logo"
            className="h-11 w-11 object-contain"
          />

          <p
            className={`
              ${styles.gridentText}
              cursor-pointer text-[18px] font-bold
            `}
          >
            Ayman Ezz
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.title;

            return (
              <li key={link.id}>
                {location !== "/" ? (
                  <Link
                    to={`/#${link.id}`}
                    onClick={() => setActive(link.title)}
                    className={`
                      relative block py-2 text-[16px] font-medium
                      transition-colors duration-200
                      ${
                        isActive
                          ? "text-white"
                          : "text-secondary hover:text-white"
                      }
                    `}
                  >
                    {link.title}

                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary" />
                    )}
                  </Link>
                ) : (
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActive(link.title)}
                    className={`
                      relative block py-2 text-[16px] font-medium
                      transition-colors duration-200
                      ${
                        isActive
                          ? "text-white"
                          : "text-secondary hover:text-white"
                      }
                    `}
                  >
                    {link.title}

                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary" />
                    )}
                  </a>
                )}
              </li>
            );
          })}

          <li>
            <Resume />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={toggle}
            onClick={() => setToggle((prev) => !prev)}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-lg
              border border-white/[0.08]
              bg-white/[0.03]
              transition-all duration-200
              hover:border-primary/40
              hover:bg-primary/5
            "
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="h-6 w-6 object-contain"
            />
          </button>

          {/* Mobile Dropdown */}
          {toggle && (
            <div
              className="
                absolute right-4 top-[72px]
                min-w-[190px]
                rounded-2xl
                border border-white/[0.08]
                bg-bgColor/95
                p-4
                shadow-xl
                backdrop-blur-xl
              "
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = active === link.title;

                  return (
                    <li key={link.id}>
                      {location !== "/" ? (
                        <Link
                          to={`/#${link.id}`}
                          onClick={() => setActive(link.title)}
                          className={`
                            block rounded-lg px-3 py-2.5
                            text-[16px] font-medium
                            transition-colors duration-200
                            ${
                              isActive
                                ? "bg-primary/10 text-white"
                                : "text-secondary hover:bg-white/[0.04] hover:text-white"
                            }
                          `}
                        >
                          {link.title}
                        </Link>
                      ) : (
                        <a
                          href={`#${link.id}`}
                          onClick={() => setActive(link.title)}
                          className={`
                            block rounded-lg px-3 py-2.5
                            text-[16px] font-medium
                            transition-colors duration-200
                            ${
                              isActive
                                ? "bg-primary/10 text-white"
                                : "text-secondary hover:bg-white/[0.04] hover:text-white"
                            }
                          `}
                        >
                          {link.title}
                        </a>
                      )}
                    </li>
                  );
                })}

                <li className="mt-2 border-t border-white/[0.08] pt-3">
                  <Resume />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
