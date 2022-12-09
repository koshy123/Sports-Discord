import React from "react";
import { Link } from "react-router-dom";

function Home({ topics }) {
  console.log(topics)
  const allTopics = topics.map((topic) => {
    return (
      <div>
        <Link to={`/topics/${topic._id}`}>
          <img src={`${topic.image}`}/>
        </Link>
      </div>
    );
  });

  return (
    <>
      <main>
        <div className="photos">{allTopics}</div>
        <h1 className="main-title">Welcome to Sports Discord</h1>
        <img
          className="square"
          width="408"
          height="508"
          src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1194.jpg?w=2000"
          alt="Image of something"
        />
      </main>
      <footer></footer>
    </>
  );
}

export default Home;
