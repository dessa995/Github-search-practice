import React, { useState } from "react";
import img from "../../assets/temp-files/Oval.png";

import { ImLocation, ImLink } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

const Index = ({ isDark }) => {
  console.log(isDark);

  const [isAvailable, setisAvailable] = useState(false);

  return (
    <>
      <section className="user-card">
        <div className="user-card__wrapper">
          <div className={isDark ? "user-card__box dark" : "user-card__box"}>
            <div className="user-card__img-box">
              <img src={img} alt="name" className="user-card__avatar" />
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
                  The Octocat
                </h2>
                <p
                  className={
                    isDark
                      ? "user-card__join-date col-6 dark"
                      : "user-card__join-date col-6"
                  }
                >
                  Joined 25 Jan 2011
                </p>
                <a href="#" className="user-card__username col-6">
                  @octocat
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
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros.
                </p>
              </div>
              <div
                className={
                  isDark
                    ? "user-card__file-info-box dark"
                    : "user-card__file-info-box"
                }
              >
                <div className="user-card__user-info-box">
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
                    8
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
                    3938
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
                    9
                  </p>
                </div>
              </div>
              <div className="user-card__user-links-box">
                <div className="user-card__link-box user-card__link-box--location">
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
                    San Francisco
                  </p>
                </div>
                <div className="user-card__link-box user-card__link-box--twitter">
                  <BsTwitter
                    className={
                      isDark
                        ? "user-card__link-icon user-card__link-icon--twitter dark"
                        : "user-card__link-icon user-card__link-icon--twitter"
                    }
                  />
                  <p
                    className={
                      isDark
                        ? "user-card__link-text user-card__link-text--twitter dark"
                        : "user-card__link-text user-card__link-text--twitter"
                      // isAvailable
                      //   ? "user-card__link-text user-card__link-text--twitter"
                      //   : "user-card__link-text user-card__link-text--twitter not-available"
                    }
                  >
                    Not Available
                  </p>
                </div>
                <div className="user-card__link-box user-card__link-box--github-url">
                  <ImLink
                    className={
                      isDark
                        ? "user-card__link-icon user-card__link-icon--link dark"
                        : "user-card__link-icon user-card__link-icon--link"
                    }
                  />
                  <a
                    href="#"
                    className={
                      isDark
                        ? "user-card__link-text user-card__link-text--github-url dark"
                        : "user-card__link-text user-card__link-text--github-url"
                    }
                  >
                    https://github.blog
                  </a>
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
                    href="https://github.blog"
                    className={
                      isDark
                        ? "user-card__link-text user-card__link-text--github-username dark"
                        : "user-card__link-text user-card__link-text--github-username"
                    }
                  >
                    @github
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
