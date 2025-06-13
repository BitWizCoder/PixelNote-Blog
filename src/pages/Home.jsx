import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BlogPosts from "../components/BlogPosts";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <BlogPosts />
      <Cta />
      <Footer />
    </>
  );
}
