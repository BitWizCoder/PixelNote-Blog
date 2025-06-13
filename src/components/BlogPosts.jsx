import React from "react";
import BlogCard from "./BlogCard";
import Button from "./Button";

export default function BlogPosts() {
  return (
    <div className="flex items-center flex-col justify-center gap-12">
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
      <Button text="Read All" />
    </div>
  );
}
