import React from "react";

const Index = ({ data, reposData, setOpenReposPagePage, isDark }) => {
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
              console.log(repo);
              return (
                <li
                  key={repo.id}
                  className={
                    !isDark
                      ? "repos-page__list-item"
                      : "repos-page__list-item dark"
                  }
                >
                  <a href={repo.html_url} target="_blank">
                    {repo.name}
                  </a>
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
            setOpenReposPagePage(false);
          }}
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default Index;
