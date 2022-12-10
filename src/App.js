import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";


import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import Topic from "./Topic";
import Create from "./Create";

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
  }, []);
  return (
    <div className="App">
      <Nav />
      <main>
      <Create/>
        <Routes>
          <Route path="/" element={<Home topics={topics} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/topics/:topicId"
            element={<Topic topics={topics} />}
          />
        </Routes>
      </main>
      <footer className="bottom">
        @Copyright 2022 by Sports-Discord corporations.
      </footer>
    </div>
  );
}
export default App;

