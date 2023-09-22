import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./navBar";
import HeroSection from "./heroSection";
import CardSection from "./cardSection";
import ArticleSection from "./articleSection";
import Footer from "./footer";
import NavMobile from "./navBarMobile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <NavMobile />
    <HeroSection />
    <CardSection />
    <ArticleSection />
    <Footer />
  </React.StrictMode>
);
