
# Sports-Discord

<div align="center">A web-based discussion board tool by <strong>Jeffrey Koshy</strong>, <strong>Humza Zafarullah</strong>, and <strong>Max Bondar</strong> to facilitate the discussion of sports.
<br></br>
<img src= "https://user-images.githubusercontent.com/47038229/229164667-757a16bc-01f6-42b9-ba78-2f2062ff3d4d.png" />
</div>



## Project Overview
The Sports-Discord was built by sports fans and for sports fans. To  facilitate discussion on various topics that are near and dear to them. The data being inputted and shared is open source, so anyone can edit or delete.

+ This repository is the front-end respository for the app
+ The back-end is deployed on Fly.io: [here](https://sports-discord.fly.dev/api/topics)
+ The front-end is deployed on Vercel: [here]([the-dev-hub.vercel.app](https://project3-front-end.vercel.app/))
+ The associated back-end repository can be found: [here](https://github.com/koshy123/project3-back-end) 

## Installation

1. Clone this respository to your desktop.
2. Run `npm i` to download required dependencies.
3. Run `npm start` to run localhost.
4. Work off a new git branch and push up any changes you wish to be displayed.
5 Wait for approval from the host if changes were aproved or denied.


## Deployment
The front-end of this application uses ReactJS as a framwork to quicly have our Javscript application up and running. Best practices is used in naming variables and components. Below are technologies use in the front-end.

### Vercel
Vercel is the most accessible platform to deploy websites. By connecting the ** your GitHub repository** to Vercel, you can simply deploy the main branch to Vercel domains — and it does all the heavy lifting for you. **(Julian Wallis)**

## Technologies
<div display="flex">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width=10% height=10%>
<img
src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width=10% height=10%> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" width=10% height=10%>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" width=10% height=10%>
</div>


## Wireframe
[wireframe](https://media.git.generalassemb.ly/user/45445/files/8629127f-f10e-4cad-be99-d488d6495734)


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
