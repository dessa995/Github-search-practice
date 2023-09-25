import { React, useState } from "react";
import { RiMoonFill } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { BsFillSunFill } from "react-icons/bs";

import SearchCard from "../User-card";

const Index = () => {
  const [search, setSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("No results");
  const [isDark, setIsDark] = useState(false);

  const openModal = () => {
    if (search.trim().length < 1) {
      setModalIsOpen(true);
      setModalContent("please type first");
    }
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
    console.log(modalIsOpen + " modal is");
  };

  const toggleDark = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <header>
        <div className="header__box">
          <h1
            className={
              isDark ? "header__app-heading dark" : "header__app-heading"
            }
          >
            devfinder
          </h1>
          {isDark ? (
            <button
              type="button"
              className="header__theme-toggle-btn dark"
              onClick={toggleDark}
            >
              Light
              <BsFillSunFill className="header__btn-icon dark" />
            </button>
          ) : (
            <button
              type="button"
              className="header__theme-toggle-btn"
              onClick={toggleDark}
            >
              Dark
              <RiMoonFill className="header__btn-icon" />
            </button>
          )}
        </div>
      </header>
      <section className="input-section">
        <form
          className={
            isDark ? "input-section__form dark" : "input-section__form"
          }
          onSubmit={handleSubmit}
        >
          <div className="input-section__input-box">
            <div className="input-section__search-icon-box">
              <LuSearch className="input-section__search-icon" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className={
                isDark
                  ? "input-section__search-bar dark"
                  : "input-section__search-bar"
              }
              placeholder={`Search GitHub username…`}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {modalIsOpen ? <Modal modalContent={modalContent} /> : ""}
          <button type="submit" className="input-section__btn">
            Search
          </button>
        </form>
      </section>
      <SearchCard isDark={isDark} />
    </>
  );
};

const Modal = ({ modalContent }) => {
  return (
    <>
      <div className="input-section__modal">
        <p className="input-section__modal-content">{modalContent}</p>
      </div>
    </>
  );
};

export default Index;
