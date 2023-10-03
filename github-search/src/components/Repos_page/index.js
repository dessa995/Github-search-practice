import React from "react";

const Index = ({ data, reposData }) => {
  return (
    <section className="repos-page">
      <div className="repos-page__wrapper">
        <h2 className="repos-page__heading">{data.name} Repos</h2>
        <ul className="repos-page__list">
          {reposData ? (
            reposData.map((repo) => {
              return (
                <li key={repo.id} className="repos-page__list-item">
                  {repo.name}
                </li>
              );
            })
          ) : (
            <li>No repositories available</li>
          )}
        </ul>
        <button className="repos-page__return-btn">Back</button>
      </div>
    </section>
  );
};

export default Index;
