import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Home from "../components/Home";
import Experience from "../components/Experience";

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <Home />
      <Experience />
    </Layout>
  );
}
