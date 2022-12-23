import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/skills/Skill";
import Labs from "./components/labs/Labs";
import Footer from "./components/footer/Footer";
import Comments from "./components/comments/Comments";
function App() {
 
  return (
   
    <div>
      
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Labs />
        <Comments />
        <Footer />
      
    
    </div>
  );
}

export default App;
