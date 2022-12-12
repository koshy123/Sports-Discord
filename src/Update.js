import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";


export default function Update({setTopics}) {
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

  
  const topics = await axios.delete(`http://localhost:4000/api/topics/${params.topicId}`);
   setTopics(topics.data)
   navigate('/')
}


 async function onSubmit(e) {

   e.preventDefault();
   const editedTopic = {
     topic: form.topic,
     comments: form.comments,
     image: form.image,
   };
   console.log(editedTopic)
  const update = await axios.put(`http://localhost:4000/api/topics/${params.topicId}`, editedTopic );
  setTopics(update.data)
  navigate("/");
  }




  
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
                <button className="pointerTwo" onClick={handleDelete}>🗑️</button>
        </div>
     </form>
   </div>
 );
}

