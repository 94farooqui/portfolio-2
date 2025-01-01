import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  

  return (
 
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index path="/" element={<Home/>}/>
          <Route index path="/resume" element={<Resume/>}/>
          <Route index path="/portfolio" element={<Portfolio/>}/>
          <Route index path="/blog" element={<Blog/>}/>
          <Route index path="/contact" element={<Contact/>}/>

        </Route>
      </Routes>

  );
}

export default App;
