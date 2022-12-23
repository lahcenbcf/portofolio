import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/skills/Skill";
import Labs from "./components/labs/Labs";
import Footer from "./components/footer/Footer";
import Comments from "./components/comments/Comments";
import RegisterLogin from "../src/components/auth/RegisterLogin";
function App() {
  const [found,setFound]=useState(false)
  return (
   
    <div>
      {
        found ?<>
        <Navbar />
        <Home setFound={setFound} />
        <About />
        <Skill />
        <Labs />
        <Comments />
        <Footer />
        </> :
      
          <RegisterLogin setFound={setFound} found={found} />
      
        
      }
    
    </div>
  );
}

export default App;
