import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BlogPosts from "../components/BlogPosts";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BlogPosts />
      <Cta />
      <Footer />
    </>
  );
}
