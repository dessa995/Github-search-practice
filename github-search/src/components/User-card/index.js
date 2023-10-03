import React from "react";
// import img from "../../assets/temp-files/Oval.png";

import { ImLocation, ImLink } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

const Index = ({ isDark, data, getRepos, setOpenReposPagePage }) => {
  const githubDate = new Date(data.created_at);
  const createdAt = `${githubDate.getDate()} ${githubDate.toLocaleString(
    "default",
    {
      month: "short",
    }
  )} ${githubDate.getFullYear()}`;

  const openReposPage = async () => {
    getRepos();
    setOpenReposPagePage(true);
  };

  return (
    <>
      <section className="user-card">
        <div className="user-card__wrapper">
          <div className={isDark ? "user-card__box dark" : "user-card__box"}>
            <div className="user-card__img-box">
              <img
                src={data.avatar_url}
                alt={data.name}
                className="user-card__avatar"
              />
            </div>
            <div className="user-card__info-box">
              <div className="user-card__base-info-box row">
                <h2
                  className={
                    isDark
                      ? "user-card__name col-6 dark"
                      : "user-card__name col-6"
                  }
                >
                  {data.name}
                </h2>
                <p
                  className={
                    isDark
                      ? "user-card__join-date col-6 dark"
                      : "user-card__join-date col-6"
                  }
                >
                  {"Joined " + createdAt}
                </p>
                <a href={data.html_url} className="user-card__username col-6">
                  @{data.login}
                </a>
              </div>
              <div className="user-card__description-box">
                <p
                  className={
                    isDark
                      ? "user-card__description dark"
                      : "user-card__description"
                  }
                >
                  {data.bio ? data.bio : "This profile has no bio"}
                </p>
              </div>
              <div
                className={
                  isDark
                    ? "user-card__file-info-box dark"
                    : "user-card__file-info-box"
                }
              >
                <div
                  className="user-card__user-info-box repos"
                  onClick={openReposPage}
                >
                  <h3
                    className={
                      isDark
                        ? "user-card__info-heading dark"
                        : "user-card__info-heading"
                    }
                  >
                    Repos
                  </h3>
                  <p
                    className={
                      isDark
                        ? "user-card__info-number dark"
                        : "user-card__info-number"
                    }
                  >
                    {data.public_repos}
                  </p>
                </div>
                <div className="user-card__user-info-box">
                  <h3
                    className={
                      isDark
                        ? "user-card__info-heading dark"
                        : "user-card__info-heading"
                    }
                  >
                    Followers
                  </h3>
                  <p
                    className={
                      isDark
                        ? "user-card__info-number dark"
                        : "user-card__info-number"
                    }
                  >
                    {data.followers}
                  </p>
                </div>
                <div className="user-card__user-info-box">
                  <h3
                    className={
                      isDark
                        ? "user-card__info-heading dark"
                        : "user-card__info-heading"
                    }
                  >
                    Following
                  </h3>
                  <p
                    className={
                      isDark
                        ? "user-card__info-number dark"
                        : "user-card__info-number"
                    }
                  >
                    {data.following}
                  </p>
                </div>
              </div>
              <div className="user-card__user-links-box">
                <div className="user-card__link-box user-card__link-box--location">
                  {data.location ? (
                    <>
                      <ImLocation
                        className={
                          isDark
                            ? "user-card__link-icon user-card__link-icon--pin dark"
                            : "user-card__link-icon user-card__link-icon--pin"
                        }
                      />
                      <p
                        className={
                          isDark
                            ? "user-card__link-text user-card__link-text--town dark"
                            : "user-card__link-text user-card__link-text--town"
                        }
                      >
                        {data.location}
                      </p>
                    </>
                  ) : (
                    <>
                      <ImLocation
                        className={
                          isDark
                            ? "user-card__link-icon no-data user-card__link-icon--pin dark"
                            : "user-card__link-icon no-data user-card__link-icon--pin"
                        }
                      />
                      <p className="user-card__link-text user-card__link-text--no-data">
                        Not Available
                      </p>
                    </>
                  )}
                </div>
                <div className="user-card__link-box user-card__link-box--twitter">
                  {data.twitter_username ? (
                    <>
                      <BsTwitter
                        className={
                          isDark
                            ? "user-card__link-icon user-card__link-icon--twitter dark"
                            : "user-card__link-icon user-card__link-icon--twitter"
                        }
                      />
                      <a
                        href={`https://twitter.com/${data.twitter_username}`}
                        className={
                          isDark
                            ? "user-card__link-text user-card__link-text--twitter dark"
                            : "user-card__link-text user-card__link-text--twitter"
                        }
                      >
                        {data.twitter_username}
                      </a>
                    </>
                  ) : (
                    <>
                      <BsTwitter
                        className={
                          isDark
                            ? "user-card__link-icon no-data user-card__link-icon--twitter dark"
                            : "user-card__link-icon no-data user-card__link-icon--twitter"
                        }
                      />
                      <p className="user-card__link-text user-card__link-text--no-data">
                        Not Available
                      </p>
                    </>
                  )}
                </div>
                <div className="user-card__link-box user-card__link-box--github-url">
                  {data.blog ? (
                    <>
                      <ImLink
                        className={
                          isDark
                            ? "user-card__link-icon user-card__link-icon--link dark"
                            : "user-card__link-icon user-card__link-icon--link"
                        }
                      />
                      <a
                        href={data.blog}
                        className={
                          isDark
                            ? "user-card__link-text user-card__link-text--github-url dark"
                            : "user-card__link-text user-card__link-text--github-url"
                        }
                      >
                        {data.login + "@blog"}
                      </a>
                    </>
                  ) : (
                    <>
                      <ImLink
                        className={
                          isDark
                            ? "user-card__link-icon no-data user-card__link-icon--link dark"
                            : "user-card__link-icon no-data user-card__link-icon--link"
                        }
                      />
                      <p className="user-card__link-text user-card__link-text--no-data">
                        Not Available
                      </p>
                    </>
                  )}
                </div>
                <div className="user-card__link-box user-card__link-box--github-username">
                  <HiMiniBuildingOffice2
                    className={
                      isDark
                        ? "user-card__link-icon user-card__link-icon--office dark"
                        : "user-card__link-icon user-card__link-icon--office"
                    }
                  />
                  <a
                    href={data.html_url}
                    className={
                      isDark
                        ? "user-card__link-text user-card__link-text--github-username dark"
                        : "user-card__link-text user-card__link-text--github-username"
                    }
                  >
                    {data.html_url ? data.login + "@github" : "Not Available"}
                  </a>
                </div>
              </div>
              {/*^^ user-card__links-box*/}
            </div>
            {/*^^ user-card__info-box*/}
          </div>
          {/*^^ user-card__box*/}
        </div>
        {/*^^ user-card__wrapper */}
      </section>
    </>
  );
};

export default Index;
