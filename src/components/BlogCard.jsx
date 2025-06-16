import React from "react";
import Button from "./Button";

export default function BlogCard({ post }) {
  const excerpt =
    post.body.length > 100 ? post.body.slice(0, 100) + "." : post.body;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={post.cover} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {excerpt}
        </p>
        <Button text="Read more" link="/" />
      </div>
    </div>
  );
}
