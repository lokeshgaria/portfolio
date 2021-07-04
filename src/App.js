import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Proficiency from "./Components/Proficiency";
import Projects from "./Components/Pojects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Box } from "@material-ui/core";

import "./App.css";
const App = () => {
 
return (
    <div>
      {/*Navbar*/}
      <Navbar />
      {/*Hero section*/}
      <Box pm={2} mt={3}>
        <Intro />
      </Box>
      {/*what i do*/}
      <Box mt={11}>
        <Skills />
      </Box>

      {/*profiecency*/}
      <Box mt={11}>
        <Proficiency />
      </Box>
      {/*Projects*/}
      <Projects />
      {/*contact*/}
       <Contact />

       {/** Fooootter */}
       <Footer />
         </div>
  );
};

export default App;
