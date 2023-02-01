import React from "react";
import { Link } from "react-router-dom";
import Create from "./Create";
import Image from "../images/main_v03.png";
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
         
          height="400"
          src={Image}
          alt="Image of something"
        />
        <div className="main-title">Welcome to</div>
        <div className="subtitle">Sports Discord</div>
        <div className="subtitle2">Sport Discord is a place to discuss,</div>
        <div className="subtitle3">share, and just talk about sport</div>
        <div className="subtitle4">organised into topic-based themes</div>
      </div>
      <div className="create_format">
      <Create setTopics={setTopics} />
      <div className="photos">{allTopics}</div>
      </div>
    </>
  );
}

export default Home;
