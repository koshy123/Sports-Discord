import "./App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Topic from "./Topic";

function App() {
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState([]);

  const getTopics = {
    method: "GET",
    url: "https://sports-discord.fly.dev/api/topics",
  };

  useEffect(() => {
    axios
      .request(getTopics)
      .then(function (response) {
        setTopics(response.data);
        console.log(response.data);
        console.log(response.data[0].image);
        setLoading(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home topics={topics} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/topics/:topicId"
            element={<Topic topic={TOPIC_MOCK} />}
          />
        </Routes>
      </main>
      <footer className="bottom">
        {" "}
        @Copyright 2022 by Sports-Discord corporations.{" "}
      </footer>
    </div>
  );
}

export default App;

const TOPIC_MOCK = {
  title: "Topic",
  description: "Some article description",
  imageUrl: "https://...",
  comments: [
    {
      author: "John Smith",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum assumenda commodi sapiente sequi nemo quaerat hic asperiores provident ea quibusdam?",
      createdAt: new Date(2022, 11, 8),
    },
    {
      author: "John Smith",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum assumenda commodi sapiente sequi nemo quaerat hic asperiores provident ea quibusdam?",
      createdAt: new Date(2022, 11, 9),
    },
  ],
};
