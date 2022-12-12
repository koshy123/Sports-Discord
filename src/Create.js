import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Create({ setTopics }) {
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
    e.preventDefault();

    const newTopic = { ...form };

    await fetch("https://sports-discord.fly.dev/api/topics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTopic),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ topic: "", comments: "", image: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3 className="titleLine">
        Create A <span className="topic">Topic</span>
      </h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input
            type="text"
            className="form-control"
            id="topic"
            value={form.topic}
            onChange={(e) => updateForm({ topic: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">comments</label>
          <input
            type="text"
            className="form-control"
            id="comments"
            value={form.comments}
            onChange={(e) => updateForm({ comments: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="toppings">image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={form.image}
            onChange={(e) => updateForm({ image: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Topic" className="pointer" />
        </div>
      </form>
    </div>
  );
}
