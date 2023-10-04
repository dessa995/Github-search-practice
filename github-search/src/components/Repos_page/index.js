import React from "react";

const Index = ({
  data,
  reposData,
  setOpenReposPage,
  isDark,
  setShowSingleRepo,
  setRepo,
}) => {
  const handleRepoClick = (repo) => {
    setOpenReposPage(false);
    setShowSingleRepo(true);
    setRepo(repo);
  };

  return (
    <section className="repos-page">
      <div
        className={!isDark ? "repos-page__wrapper" : "repos-page__wrapper dark"}
      >
        <h2
          className={
            !isDark ? "repos-page__heading" : "repos-page__heading dark"
          }
        >
          {data.name} Repos
        </h2>
        <ul className={!isDark ? "repos-page__list" : "repos-page__list dark"}>
          {reposData ? (
            reposData.map((repo) => {
              return (
                <li
                  key={repo.id}
                  className={
                    !isDark
                      ? "repos-page__list-item"
                      : "repos-page__list-item dark"
                  }
                >
                  <p>{repo.name}</p>
                  <button
                    className={
                      !isDark
                        ? "repos-page__list-item-btn"
                        : "repos-page__list-item-btn dark"
                    }
                    onClick={() => handleRepoClick(repo)}
                  >
                    More Data
                  </button>
                </li>
              );
            })
          ) : (
            <li
              className={
                !isDark ? "repos-page__list-item" : "repos-page__list-item dark"
              }
            >
              No repositories available
            </li>
          )}
        </ul>
        <button
          className={
            !isDark ? "repos-page__return-btn" : "repos-page__return-btn dark"
          }
          onClick={() => {
            setOpenReposPage(false);
          }}
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default Index;
