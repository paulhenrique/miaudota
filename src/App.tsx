import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./theme/ThemeProvider";
import SubHeader from "./components/SubHeader";
import "./assets/style/global.css";
import MeowFriends from "./components/MeowFriends";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Header />
      <SubHeader />
      <Hero />
      <MeowFriends />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
