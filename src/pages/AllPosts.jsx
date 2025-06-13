import React from "react";
import BlogCard from "../components/BlogCard";

export default function AllPosts() {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}
