import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function Update() {
 const params = useParams();
 const navigate = useNavigate();

 const [form, setForm] = useState({
   topic: "",
   comments: "",
   image: "",
 });


function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }


 async function handleDelete (event) {
  event.preventDefault()
  console.log(params.topicId);

  await fetch(`https://sports-discord.fly.dev/api/topics/${params.topicId}`, {
     method: "DELETE",
     headers: {
       'Content-Type': 'application/json'
     },
   });
   navigate("/");
}
 async function onSubmit(e) {
   e.preventDefault();
   const editedTopic = {
     topic: form.topic,
     comments: form.comments,
     image: form.image,
   };
 console.log(editedTopic)
 console.log(params.id)
   // This will send a post request to update the data in the database.
   await fetch(`https://sports-discord.fly.dev/api/topics/${params.id}`, {
     method: "PUT",
     body: JSON.stringify(editedTopic),
     headers: {
       'Content-Type': 'application/json'
     },
   });
   navigate("/");
 }
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <p className="topicTitle">Edit Topic</p>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="topic">Topic: </label>
         <input
           type="text"
           className="form-control"
           id="topic"
           value={form.topic}
           onChange={(e) => updateForm({ topic: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="comments">comments: </label>
         <input
           type="text"
           className="form-control"
           id="comments"
           value={form.comments}
           onChange={(e) => updateForm({ comments: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="image">image: </label>
         <input
           type="text"
           className="form-control"
           id="image"
           value={form.image}
           onChange={(e) => updateForm({ image: e.target.value })}
         />
       </div>
       <br />
       <div className="form-group">
         <input
           type="submit"
           value="Update Topic"
           className="pointerTwo"
         />
       </div>
       <div className="delete">
                <button className="pointerTwo" onClick={handleDelete}>Delete</button>
        </div>
     </form>
   </div>
 );
}

