import React from "react";

import { RiMoonFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";

const Index = ({ isDark, setIsDark, setShowBlank, handleNavClick }) => {
  const toggleDark = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <header>
        <ul className="header__nav">
          <li className="header__nav-item">
            <button
              type="button"
              className={isDark ? "header__nav-btn dark" : "header__nav-btn"}
              onClick={() => setShowBlank(false)}
            >
              Home
            </button>
          </li>
          <li className="header__nav-item">
            <button
              type="button"
              className={isDark ? "header__nav-btn dark" : "header__nav-btn"}
              onClick={handleNavClick}
            >
              About
            </button>
          </li>
          <li className="header__nav-item">
            <button
              type="button"
              className={isDark ? "header__nav-btn dark" : "header__nav-btn"}
            >
              Contact
            </button>
          </li>
        </ul>
      </header>
      <section className="home-page-top">
        <div className="home-page-top__box">
          <h1
            className={
              isDark
                ? "home-page-top__app-heading dark"
                : "home-page-top__app-heading"
            }
          >
            devfinder
          </h1>
          {isDark ? (
            <button
              type="button"
              className="home-page-top__theme-toggle-btn dark"
              onClick={toggleDark}
            >
              Light
              <BsFillSunFill className="home-page-top__btn-icon dark" />
            </button>
          ) : (
            <button
              type="button"
              className="home-page-top__theme-toggle-btn"
              onClick={toggleDark}
            >
              Dark
              <RiMoonFill className="home-page-top__btn-icon" />
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Index;
