import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
  Speaker,
  Registration,
  Committee
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

import "./App.css";
import Submissions from "./containers/Submissions/Submissions";

function App() {
  return (
    <div className="App">
      <div className="stickyNav gradient__bg">
        <Navbar />
      </div>
      <div className="gradient__bg">
        <Header />
      </div>
      <Possibility />
      <Brand />
      <WhatGPT3 />
      <Speaker />
      <Features />
      <Registration />
      <Submissions />
      <Committee></Committee>
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
