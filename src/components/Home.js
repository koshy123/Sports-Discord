import React from "react";
import { Link } from "react-router-dom";
import Create from "./Create";
import Image from "../images/main_final.png";
import "../css/Home.css";


function Home({ topics, setTopics }) {
  const allTopics = topics.map((topic) => {
    return (
      <div>
        <Link to={`/topics/${topic._id}`}>
          <img className="imageMainPages" src={`${topic.image}`} />
          <h3 className="nameTopic">{`${topic.topic}`}</h3>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="title">
        <img

          className="mainPhoto"
          // className="square"

          // width="1400"
          height="400"
          src={Image}
          alt="Image of something"
        />
        <div className="main-title">Welcome to</div>
        <div className="subtitle">Sports Discord</div>
      </div>
      <Create setTopics={setTopics} />
      <div className="photos">{allTopics}</div>
    </>
  );
}

export default Home;
