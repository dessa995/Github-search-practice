import React, { useState } from "react";

const Index = ({ isDark, repo, setOpenReposPage, setShowSingleRepo }) => {
  const data = repo;

  const [showClipboardModal, setShowClipboardModal] = useState(false);

  const githubDate = new Date(data.created_at);
  const createdAt = `${githubDate.getDate()} ${githubDate.toLocaleString(
    "default",
    {
      month: "short",
    }
  )} ${githubDate.getFullYear()}`;

  const cloneUrl = () => {
    const value = data.clone_url;
    console.log(value);
    setShowClipboardModal(true);
    navigator.clipboard
      .writeText(value)
      .then(() => {
        console.log("copied! " + value);
      })
      .catch((error) => {
        console.log("not copied " + error);
      });

    setTimeout(() => {
      setShowClipboardModal(false);
    }, 1500);
  };

  return (
    <section className="single-repo-page">
      <div
        className={
          !isDark
            ? "single-repo-page__wrapper"
            : "single-repo-page__wrapper dark"
        }
      >
        <div
          className={
            !isDark
              ? "single-repo-page__img-box"
              : "single-repo-page__img-box dark"
          }
        >
          <img
            src={data.owner.avatar_url}
            alt={data.owner.login}
            className="single-repo-page__user-avatar"
          />
        </div>

        <div
          className={
            !isDark
              ? "single-repo-page__repo-data-box"
              : "single-repo-page__repo-data-box dark"
          }
        >
          <div className="single-repo-page__repo-info-box">
            <h2
              className={
                !isDark
                  ? "single-repo-page__repo-heading"
                  : "single-repo-page__repo-heading dark"
              }
            >
              {data.name}
            </h2>
            <p
              className={
                !isDark
                  ? "single-repo-page__repo-date"
                  : "single-repo-page__repo-date dark"
              }
            >
              {createdAt}
            </p>
          </div>
          <div
            className={
              !isDark
                ? "single-repo-page__repo-url-box"
                : "single-repo-page__repo-url-box dark"
            }
          >
            <p
              className={
                !isDark
                  ? "single-repo-page__repo-clone-url"
                  : "single-repo-page__repo-clone-url dark"
              }
              onClick={cloneUrl}
              target="_blank"
              rel="noreferrer"
            >
              Clone repo
            </p>
            {showClipboardModal ? <ClipboardModal /> : ""}
            <a
              href={data.html_url}
              className={
                !isDark
                  ? "single-repo-page__repo-open-url"
                  : "single-repo-page__repo-open-url dark"
              }
            >
              Open repo page
            </a>
          </div>
          <div
            className={
              !isDark
                ? "single-repo-page__description-box"
                : "single-repo-page__description-box dark"
            }
          >
            <p
              className={
                !isDark
                  ? "single-repo-page__description-text"
                  : "single-repo-page__description-text dark"
              }
            >
              {data.description
                ? data.description
                : "This repo has no description"}
            </p>
          </div>
          <div className="single-repo-page__return-btn-box">
            <button
              className={
                !isDark
                  ? "single-repo-page__return-btn"
                  : "single-repo-page__return-btn dark"
              }
              onClick={() => {
                setShowSingleRepo(false);
                setOpenReposPage(true);
              }}
            >
              Back To Repos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClipboardModal = () => {
  return <div className="clipboard-notification">coppied to clipboard!</div>;
};

export default Index;
