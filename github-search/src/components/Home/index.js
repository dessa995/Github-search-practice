import { React, useState, useEffect } from "react";

import Header from "../Header";
import InputSection from "../Input-section";
import ReposPage from "../repos_page";
import SingleRepo from "../Single-repo";

// const DataContext = React.createContext();

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [data, setData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [openReposPage, setOpenReposPage] = useState(false);
  const [reposData, setReposData] = useState(null);
  const [showSingleRepo, setShowSingleRepo] = useState(false);
  const [repo, setRepo] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getUser = async (username) => {
    const response = await fetch(
      `https://api.github.com/users/${username.trim()}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
        setModalContent("No Results");
        openModal();
      });
    setData(response);
  };

  const getRepos = async () => {
    const repos = await fetch(data.repos_url).then((response) => {
      return response.json();
    });
    setReposData(repos);
  };

  useEffect(() => {
    getUser("octocat");
  }, []);

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />

      {!openReposPage && !showSingleRepo ? (
        <InputSection
          isDark={isDark}
          getUser={getUser}
          data={data}
          modalIsOpen={modalIsOpen}
          modalContent={modalContent}
          closeModal={closeModal}
          getRepos={getRepos}
          setOpenReposPage={setOpenReposPage}
        />
      ) : showSingleRepo ? (
        <SingleRepo
          isDark={isDark}
          repo={repo}
          setOpenReposPage={setOpenReposPage}
          setShowSingleRepo={setShowSingleRepo}
        />
      ) : (
        <ReposPage
          data={data}
          reposData={reposData}
          setOpenReposPage={setOpenReposPage}
          isDark={isDark}
          showSingleRepo={showSingleRepo}
          setShowSingleRepo={setShowSingleRepo}
          repo={repo}
          setRepo={setRepo}
        />
      )}
    </>
  );
};

export default Index;
