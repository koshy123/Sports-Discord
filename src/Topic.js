import React from "react";
import {useParams} from "react-router-dom"
import Update from "./Update";

function Topic({ topics, setTopics }) {
  const {topicId} = useParams()
  const oneTopic = topics.find(({_id}) => _id === topicId)

    return (
      <div key= {oneTopic._id} >
<<<<<<< HEAD
       <h1>{`${oneTopic.topic}`}</h1>
       <img className="imageTopicPages" src={`${oneTopic.image}`} />
       <h3>{`${oneTopic.comments}`}</h3>
        <Update />
=======
       <h3>
        {`${oneTopic.comments}`}</h3>
        <Update setTopics={setTopics} />
>>>>>>> df03100 (able to make put and delete live repeate, still fixing the create)
      </div>
      
    );


  // return (
  //     <main>
  //       <h1>{oneTopic}</h1>
  //     </main>
  // );
}

export default Topic;
