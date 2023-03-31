
# Sports-Discord

<div align="center">A web-based discussion board tool by <strong>Jeffrey Koshy</strong>, <strong>Humza Zafarullah</strong>, and <strong>Max Bondar</strong> to facilitate the discussion of sports.
<br></br>

![example of layout](https://files.slack.com/files-pri/T0351JZQ0-F04EY5S8BD2/2.png)

[wireframe](https://media.git.generalassemb.ly/user/45445/files/8629127f-f10e-4cad-be99-d488d6495734)

### Getting Started

This project exists so that is can be interactive among sports fans. They can discuss hot topic issues and share their opinion to others with comments. 
The front page will do a GET call to do an axious fetch of all the live topics. 


The front page has a create button which can create a new topic with a comment and image. When a user clicks on the image, they are directed to a page, where they can make live updates


### Contributing
In order to make edits to our code, one would first need to run npm i.
The create button is in the Create.js file. This is on the home page. 
The update button is in the Update.js. 
The delete button is in the Update.js file.




### Code Example

Lines 44-43 in Create.js.
github-frontend
it is in src folder

This code we got help with a token and also in office hours. To make the page function live, without needing to refresh the page after making a change.
```
      async function onSubmit(e) {
        console.log(setTopics)
        e.preventDefault();
        const newTopic = { ...form };

       const update = await axios.post(`http://localhost:4000/api/topics`, newTopic);
       setForm({ topic: "", comments: "", image: "" });
       navigate("/");

       }
```

### Testing
-If you are able to see crud functionality ,and the data changes. Then the app is functional. 

### Contribution Guidelines

[front-end-deployed](https://project3-front-end.vercel.app/)

[back-end-deployed](https://sports-discord.fly.dev/api/topics)
[back-end-github](https://github.com/koshy123/project3-back-end)
[front-end-github](https://github.com/koshy123/project3-front-end)


### Built With
Front-End
-Html
-Css
-Javascript
-React
-react-router-dom
-axios 
-cors


### Versioning
-Vercel
For front end deployment. 


### Authors
@Bigs55stock   
-Humza Zafarullah
@Max12345-ally    
-Max Bondar
@koshy123     
-Jeffrey Koshy


### Acknowledgments

David, Alo, Jan, Hayk , Katharyn


### Front-end planning

December 9th
We are building out our front end today. Yesterday we were able to deploy the front-end and back-end while also displaying data.

Today we are making the front page look nicer and building out the routes. Max and Humza are working on the front end routes and dsign right now. While I work with Postman to make sure our data nicer on the API. Before lunch we will plan how to attach the CRUD functionality to the buttons as well

December 10th
Dividing up our roles. Max is looking up some UX features and how to make our app look nicer. Jeffrey is working on the CRUD functionality to work on the page, with assistance from Humza. 


December 11th
Questions - Allow changes to happen live, without refreshing the page.
We also want the comments to be an array, so that we can add and delete comments in the array.
