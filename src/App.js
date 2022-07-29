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
  Committee,
  Countdown,
  ContactUs,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

import "./App.css";
import Submissions from "./containers/Submissions/Submissions";
import Hero from "./containers/hero/Hero";

function App() {
  return (
    <div className="App">
      <div className="stickyNav gradient__bg">
        <Navbar />
      </div>
      <Hero />
      <div className="gradient__bg">
        <Header />
      </div>
      <Countdown />
      <Possibility />
      <Brand />
      <WhatGPT3 />
      <Speaker />
      <Features />
      <Registration />
      <Submissions />
      <CTA  />
      <Committee></Committee>

      {/* <Blog /> */}
      <ContactUs></ContactUs>
      <Footer />
    </div>
  );
}

export default App;
