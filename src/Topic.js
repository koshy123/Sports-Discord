import React from "react";
import {useParams} from "react-router-dom"


function Topic({ topics }) {
  const {topicId} = useParams()
  const oneTopic = topics.find(({_id}) => _id === topicId)

    return (
      <div key= {oneTopic._id} >
       <h3>
        {`${oneTopic.comments}`}</h3>
      </div>
    );


  // return (
  //     <main>
  //       <h1>{oneTopic}</h1>
  //     </main>
  // );
}

export default Topic;
