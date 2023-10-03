import { React, useState } from "react";

import SearchCard from "../User-card";

import { LuSearch } from "react-icons/lu";

const Index = ({
  isDark,
  getUser,
  data,
  closeModal,
  modalIsOpen,
  modalContent,
  getRepos,
  setOpenReposPagePage,
}) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    closeModal();
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(search);
    setSearch("");

    // console.log(data);
    // console.log(search);
  };
  return (
    <>
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
              value={search}
              className={
                isDark
                  ? "input-section__search-bar dark"
                  : "input-section__search-bar"
              }
              placeholder={`Search GitHub username…`}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {modalIsOpen ? <Modal modalContent={modalContent} /> : ""}
          <button type="submit" className="input-section__btn">
            Search
          </button>
        </form>
      </section>
      {data ? (
        <SearchCard
          isDark={isDark}
          data={data}
          getRepos={getRepos}
          setOpenReposPagePage={setOpenReposPagePage}
        />
      ) : (
        ""
      )}
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
