import React from "react";
import { Hero, About, Gallery, Footer, Navbar } from "./containers";
import Welcome from "./components/welcome/Welcome";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Welcome /> */}
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
