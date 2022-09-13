import React from "react";
import { Outlet, Link } from "react-router-dom";
import {Button, ButtonGroup} from '@chakra-ui/react'
import { Hero, About, Gallery, Footer, Navbar, NavbarNew } from "./containers";
import "./App.css";

function App() {
  return (
      <div>
        <NavbarNew />
        <Hero />
        <About />
        <Gallery />
        <Footer header={'Do you want to turn your project into reality?'} cta='Contact me'  />
      </div>
  );
}

export default App;
