import React from "react";

const Index = ({ reposData }) => {
  console.log(reposData);

  return (
    <section className="repos-page">
      <div className="repos-page__wrapper">
        <ul>
          {reposData.map((repo) => {
            return <li key={repo.Index}>{repo.name}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Index;
