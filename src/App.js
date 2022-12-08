import './App.css';
import Home from "./Home"
import {Route, Routes} from 'react-router-dom'
import Nav from "./Nav"
import About from "./About"
import { useEffect, useState } from 'react';

function App() {
  const {topic, Topic} = useState
  const {topics, useTopic} = useState    

  

  
  
  
  
  return (
     <div className="App">
      <Nav />
      <main>
        <Routes>
            <Route path= "/" element={<Home />} />
            <Route path= "/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
