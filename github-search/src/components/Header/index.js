import React from "react";

import { RiMoonFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";

const Index = ({ isDark, setIsDark }) => {
  const toggleDark = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <header>
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
      </header>
    </>
  );
};

export default Index;
