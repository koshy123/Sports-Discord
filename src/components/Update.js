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

 const [comment, setComment] = useState("");


function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 async function handleDelete (event) {
  event.preventDefault()

  
  const topics = await axios.delete(`https://sports-discord.fly.dev/api/topics/${params.topicId}`);
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
  const update = await axios.put(`https://sports-discord.fly.dev/api/topics/${params.topicId}`, editedTopic );
  setTopics(update.data)
  navigate("/");
  }

  
  async function onPress(e) {
    console.log({comment})
    e.preventDefault();
   const update = await axios.put(`https://sports-discord.fly.dev/api/topics/addComment/${params.topicId}` , {comment});
   console.log(update.data)
   setTopics(update.data)
   setComment('')
   }
 




  
 return (
   <div>
     <p className="topicTitle">Edit Topic</p>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="topic">Topic: </label>
         <input
           type="text"
           className="form-topic"
           id="topic"
           value={form.topic}
           onChange={(e) => updateForm({ topic: e.target.value })}
           placeholder="Topic"
         />
       </div>
       <div className="form-group">
         <label htmlFor="comments">comments: </label>
         <input
           type="text"
           className="form-topic"
           id="comments"
           value={form.comments}
           onChange={(e) => updateForm({ comments: e.target.value })}
           placeholder="comments"
         />
       </div>
       <div className="form-group">
         <label htmlFor="image">image: </label>
         <input
           type="text"
           className="form-topic"
           id="image"
           value={form.image}
           onChange={(e) => updateForm({ image: e.target.value })}
           placeholder="image"
         />
       </div>
       <br />
       <div className="form-group">
         <input
           type="submit"
           value="Update Topic"
           className="buttonTopic"
         />
       </div>
       <div className="delete">
                <button className="buttonTopic" onClick={handleDelete}>🗑️</button>
        </div>
     </form>


 
  <div className="form-group">
         <label >comments: </label>
         <input
           type="text"
           className="form-topic"
           id="comments"
           value={comment}
           onChange={(e) => setComment(e.target.value )}
           placeholder="comments"
         />
       </div>


  <button className="clicksbutton" onClick={e => onPress(e)}> Click</button>
    


   </div>
 );
}


