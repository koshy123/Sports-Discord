import React from "react";
import { Link } from "react-router-dom";

function Home({ topics }) {
  console.log(topics);
  const allTopics = topics.map((topic) => {
    return (
      <div>
        <Link to={`/topics/${topic._id}`}>
          <img
            width="108"
            height="108"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5e33fd4ed3c4398d/629877b0f608d43e6c1c0b14/RonMessi.jpg"
            alt="Image of something"
          />
          {topic.image}
        </Link>
      </div>
    );
  });

  return (
    <>
      <main>
        <div className="photos">{allTopics}</div>
        <h1>Welcome to Sports Discord</h1>
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
