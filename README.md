
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
<img src="https://user-images.githubusercontent.com/47038229/229183825-ec6b2069-2110-423b-b508-23d343c99cc9.png" width=10% height=10%>
</div>



## Wireframe
<img src= "https://user-images.githubusercontent.com/47038229/229177241-01b7ade6-ef25-4f03-ac93-9ff6a6551b59.png" />




### As User
As an user, I can add tew topics to discuss.
As an user, I can edit existing topics.
As an user, I can delete a topic.
As an user, I can view all current topics. 
As an user, I can add an image top the topic and leaves notes on the topic.







### Code Example

Lines 44-43 in src/Create.js.
github-frontend


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
-If you are able to see ALL crud functionality ,and the data changes on the screen. Then the app is fully functional and has no issues. Otherwise, please contact the host of this repository. 




### Authors
@Bigs55stock   
-Humza Zafarullah
@Max12345-ally    
-Max Bondar
@koshy123     
-Jeffrey Koshy


### Acknowledgments
[David Magbee](https://www.linkedin.com/in/davidmagbee/)
[Jan Horak](https://www.linkedin.com/in/jan-horak/)
[Alondra Maldonado](https://www.linkedin.com/in/alondra-maldonado-0a0958183/)
[Hayk Mnatsakanyan](https://www.linkedin.com/in/haykmn/)
[Katharyn Benn](https://www.linkedin.com/in/katharynbenn/)




