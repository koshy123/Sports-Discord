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
      <form onSubmit={onSubmit}>
        {/* col 1 */}

        <h3 className="titleLine">
          Create A <span className="topic">Topic</span>
        </h3>

        <div style={{ display: "flex", alignItems: "center", gap: "4rem" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div
              className="form-group"
              style={{ display: "flex", gap: "1rem" }}
            >
              <label
                htmlFor="topic"
                style={{ textAlign: "left", width: "35%" }}
              >
                Topic
              </label>
              <input
                type="text"
                className="form-control"
                id="topic"
                value={form.topic}
                onChange={(e) => updateForm({ topic: e.target.value })}
                placeholder="add topic name"
                style={{ borderRadius: 50 }}
              />
            </div>

            <div
              className="form-group"
              style={{ display: "flex", gap: "1rem" }}
            >
              <label
                htmlFor="comments"
                style={{ textAlign: "left", width: "35%" }}
              >
                Comments
              </label>
              <input
                type="text"
                className="form-control"
                id="comments"
                value={form.comments}
                onChange={(e) => updateForm({ comments: e.target.value })}
                placeholder="add comments"
                style={{ borderRadius: 50 }}
              />
            </div>

            <div
              className="form-group"
              style={{ display: "flex", gap: "1rem" }}
            >
              <label
                htmlFor="image"
                style={{ textAlign: "left", width: "35%" }}
              >
                Image
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                value={form.image}
                onChange={(e) => updateForm({ image: e.target.value })}
                placeholder="upload image"
                style={{ borderRadius: 50 }}
              />
            </div>
          </div>

          <div className="form-group-button">
            <button
              className="create-button"
              // style={{
              //   borderRadius: 20,
              //   color: white,
              //   background-color: red,
              //   fontSize: "1.5rem",
              //   padding: "0.75rem 1.25rem",
              // }}
              type="submit"
              // className="pointer"
            >
              Create Topic
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
