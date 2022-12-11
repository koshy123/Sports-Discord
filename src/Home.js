import React from "react";
import { Link } from "react-router-dom";

import Create from "./Create";
import Update from "./Update";

function Home({ topics }) {
  const allTopics = topics.map((topic) => {
    return (
      <div>
        <Link to={`/topics/${topic._id}`}>
          <img className="imageMainPages" src={`${topic.image}`} />
          <h3>{`${topic.topic}`}</h3>
        </Link>
      </div>
    );
  });

  return (
    <>
      <main>
      <h1 className="main-title">Welcome to Sports Discord</h1>
      <img
          className="square"
          width="400"
          height="300"
          src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1194.jpg?w=2000"
          alt="Image of something"
        />
        <Create/>
        <div className="photos">{allTopics}</div>       
      </main>
      <footer></footer>
    </>
  );
}

export default Home;
