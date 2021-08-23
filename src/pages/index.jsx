import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Home from "../components/Home";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <Home />
      <Experience />
      <Skills />
      <Projects />
    </Layout>
  );
}
