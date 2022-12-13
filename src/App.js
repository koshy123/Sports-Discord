import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Topic from "./components/Topic";

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
        setLoading(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [topics]);

  return (
    <div className="App">
      <Nav />
      <main className="mainPage">
        <Routes>
          <Route
            path="/"
            element={<Home topics={topics} setTopics={setTopics} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/topics/:topicId"
            element={<Topic topics={topics} setTopics={setTopics} />}
          />
        </Routes>
      </main>
      <footer className="bottom">CopyRight@2022</footer>
    </div>
  );
}
export default App;
