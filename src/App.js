import React from "react";
import { Header, Hero, About, Gallery, Footer, Navbar } from "./containers";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
