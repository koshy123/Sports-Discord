import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "../css/Create.css";

export default function Create({ topics, setTopics }) {
  const [form, setForm] = useState({
    topic: "",
    comments: "",
    image: "",
  });
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    console.log(setTopics);
    e.preventDefault();


    const newTopic = { ...form };

    const update = await axios.post(
      `https://sports-discord.fly.dev/api/topics`,
      newTopic
    );

    setForm({ topic: "", comments: "", image: "" });
    navigate("/");
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="create-form">
          <div className="create-form-vertical">
            <h3 className="titleLine">
              Create a <span className="create-topic">Topic</span>
            </h3>
            <div className="create-form-group">
              <label htmlFor="topic">Topic</label>
              <input
                type="text"
                className="form-control"
                id="topic"
                value={form.topic}
                onChange={(e) => updateForm({ topic: e.target.value })}
                placeholder="add topic"
              />
            </div>
            <div className="create-form-group">
              <label htmlFor="comments">Comments</label>
              <input
                type="text"
                className="form-control"
                id="comments"
                value={form.comments}
                onChange={(e) => updateForm({ comments: e.target.value })}
                placeholder="add comments"
              />
            </div>
            <div className="create-form-group">
              <label htmlFor="image">Image</label>

              <input
                type="text"
                className="form-control"
                id="image"
                value={form.image}
                onChange={(e) => updateForm({ image: e.target.value })}
                placeholder="upload image"
              />
            </div>
          </div>
          <div className="form-group">
            <button className="create-button" type="submit">
              Create Topic
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
