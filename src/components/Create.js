import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";



export default function Create({topics, setTopics}) {


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
    

    // async function onSubmit(e) {
    //     e.preventDefault();
      
       
    //     const newTopic = { ...form };
      
    //     await fetch("https://sports-discord.fly.dev/api/topics", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(newTopic),
    //     })
    //     .catch(error => {
    //       window.alert(error);
    //       return;
    //     });
      
    //     setForm({ topic: "", comments: "", image: "" });
    //     navigate("/");
    //   }
      async function onSubmit(e) {
        console.log(setTopics)
        e.preventDefault()


        const newTopic = { ...form };

       const update = await axios.post(`http://localhost:4000/api/topics`, newTopic);
  
  
       setForm({ topic: "", comments: "", image: "" });
       navigate("/");
       }



     

     

    // This following section will display the form that takes the input from the user.
    return (
      <div>
        <h3 className="titleLine">Create-A-Topic</h3>
        <form onSubmit={onSubmit}  >
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
            <label >image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              value={form.image}
              onChange={(e) => updateForm({ image: e.target.value })}
            />
          </div>
          
          <div className="form-group">
            <input
              type="submit"
              value="Create Topic"
              className="pointer"
            />
          </div>
        </form>
      </div>
    );
   }
   