import { React, useState, useContext } from "react";
import axios from "axios";

import Header from "../Header";
import InputSection from "../Input-section";
import BlankPage from "../Blank-page";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [showBlank, setShowBlank] = useState(false);
  const [data, setData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = () => {
    setModalIsOpen(true);

    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getUser = (username) => {
    axios
      .get(`https://api.github.com/users/${username.trim()}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setModalContent("No Results");
        openModal();
      });
  };

  const handleNavClick = () => {
    setShowBlank(true);
    console.log("show blank is " + showBlank);
  };

  return (
    <>
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        setShowBlank={setShowBlank}
        handleNavClick={handleNavClick}
      />
      {!showBlank ? (
        <InputSection
          isDark={isDark}
          getUser={getUser}
          data={data}
          modalIsOpen={modalIsOpen}
          modalContent={modalContent}
        />
      ) : (
        <BlankPage />
      )}
    </>
  );
};

export default Index;
