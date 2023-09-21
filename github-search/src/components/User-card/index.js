import React from "react";
import img from "../../assets/temp-files/Oval.png";

import { ImLocation, ImLink } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

const index = () => {
  return (
    <>
      <section className="user-card">
        <div className="user-card__wrapper">
          <div className="user-card__box">
            <div className="user-card__img-box">
              <img src={img} alt="name" className="user-card__avatar" />
            </div>
            <div className="user-card__info-box">
              <div className="user-card__base-info-box row">
                <h2 className="user-card__name col-6">The Octocat</h2>
                <p className="user-card__join-date col-6">Joined 25 Jan 2011</p>
                <a href="#" className="user-card__username col-6">
                  @octocat
                </a>
              </div>
              <div className="user-card__description-box">
                <p className="user-card__description">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros.
                </p>
              </div>
              <div className="user-card__file-info-box">
                <div className="user-card__user-info-box">
                  <h3 className="user-card__info-heading">Repos</h3>
                  <p className="user-card__info-number">8</p>
                </div>
                <div className="user-card__user-info-box">
                  <h3 className="user-card__info-heading">Followers</h3>
                  <p className="user-card__info-number">3938</p>
                </div>
                <div className="user-card__user-info-box">
                  <h3 className="user-card__info-heading">Following</h3>
                  <p className="user-card__info-number">9</p>
                </div>
              </div>
              <div className="user-card__user-links-box">
                <div className="user-card__link-box">
                  <ImLocation className="user-card__link-icon user-card__link-icon--pin" />
                  <p className="user-card__link-text user-card__link-text--town">
                    San Francisco
                  </p>
                </div>
                <div className="user-card__link-box">
                  <BsTwitter className="user-card__link-icon user-card__link-icon--twitter" />
                  <p className="user-card__link-text user-card__link-text--twitter">
                    Not Available
                  </p>
                </div>
                <div className="user-card__link-box">
                  <ImLink className="user-card__link-icon user-card__link-icon--link" />
                  <a
                    href="#"
                    className="user-card__link-text user-card__link-text--github-url"
                  >
                    https://github.blog
                  </a>
                </div>
                <div className="user-card__link-box">
                  <HiMiniBuildingOffice2 className="user-card__link-icon user-card__link-icon--office" />
                  <a
                    href="https://github.blog"
                    className="user-card__link-text user-card__link-text--github-username"
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

export default index;
