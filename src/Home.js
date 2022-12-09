import React from "react";

function Home({ topics }) {
  console.log(topics);
  const allTopics = topics.map((topic) => {
    return (
      <div>
        <a href="/some-other-page">
          <img
            width="108"
            height="108"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5e33fd4ed3c4398d/629877b0f608d43e6c1c0b14/RonMessi.jpg"
            alt="Image of something"
          />
          {topic.image}
        </a>
      </div>
    );
  });
  return (
    <div>
      <div className="photos">{allTopics}</div>
      <h1>Welcome to our Webpage</h1>
    </div>
  );
}

export default Home;
