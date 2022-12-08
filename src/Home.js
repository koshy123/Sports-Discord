import React from "react";


function Home ({topics}){
    
    console.log(topics)
   const allTopics = topics.map((topic) => {
        return (
            <h1>{topic.image}</h1>
        )
    })
        return(
        <div>
           <h1>{allTopics}</h1>
            <h1>Welcome to our Webpage</h1>
        </div>
    )
}


export default Home;
