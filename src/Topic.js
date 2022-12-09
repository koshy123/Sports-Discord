import React from "react";
import { Link } from "react-router-dom";

function Topic({ topic }) {
  return (
    <main>
      <h1>{topic.title}</h1>
      <img src={topic.imageUrl} />
      <p>{topic.description}</p>
      <ul>
        {topic.comments.map((comment) => (
          <li key={comment.body}>
            <p>{comment.author}</p>
            {comment.body}
            <p>{comment.createdAt.toLocaleString()}</p>
          </li>
        ))}
      </ul>
      <form>
        <div>
          <label htmlFor="comment-body">Comment:</label>
        </div>
        <textarea id="comment-body"></textarea>
        <div>
          <button>Post</button>
        </div>
      </form>
    </main>
  );
}

export default Topic;
