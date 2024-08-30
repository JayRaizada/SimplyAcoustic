import { useState } from "react";
import "./App.css";
import "primeicons/primeicons.css";
import { Originalsection } from "./components/Originalsection";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import { Class } from "./components/Class";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Class />
      <Originalsection />
      <Footer />
    </>
  );
}

export default App;
