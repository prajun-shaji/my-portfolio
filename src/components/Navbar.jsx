import { styles } from "../styles.js";
import { navLinks } from "../constants/constants.js";
import { close, logo, menu } from "../assets/index.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} bg-primary fixed z-20 flex w-full items-center py-5`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="size-10 object-contain" />
          <p className="text-lg font-bold text-white">PRAJUN SHAJI</p>
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`${active === title ? "text-white" : "text-secondary"} text-lg font-medium duration-200 hover:text-white`}
              onClick={() => setActive(title)}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="size-7 cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${toggle ? "flex" : "hidden"} black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-36 rounded-xl p-6`}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {navLinks.map(({ id, title }) => (
                <li
                  key={id}
                  className={`${active === title ? "text-white" : "text-secondary"} font-poppins font-medium`}
                  onClick={() => {
                    setActive(title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  ); 
};

export default Navbar;
