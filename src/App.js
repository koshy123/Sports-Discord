import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Update from "./Update";

import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Topic from "./Topic";

function App() {
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState([]);

  const getTopics = {
    method: "GET",
    url: "http://localhost:4000/api/topics/",
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
    <div className="App" style={{ maxWidth: 1000, margin: "0 auto" }}>
      <Nav />
      <main>
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
      <footer className="bottom">
        @Copyright 2022 by Sports-Discord corporations.
      </footer>
    </div>
  );
}
export default App;
