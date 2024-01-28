"use client";
import React, { useState } from "react";
import ImageSlider from "./ImageSlider";

export default function PostCard({ post }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="md:w-1/2 w-full p-4 border rounded-lg shadow-lg mb-4">
      <div className=" border-gray-200 px-2">
        <div className="flex items-center justify-between space-x-4 my-2">
          <div className="flex items-center space-x-2">
            <img
              src={post.author.avatarUrl}
              alt="highlight"
              className="h-16 w-16 rounded-full border-2 border-double border-gray-200"
            />
            <div>
              <h1 className="text-md font-semibold">{post.author.name}</h1>
              <h2 className="text-sm text-gray-600">
                {post.author.profession}
              </h2>
              <h2 className="text-sm text-gray-600">{post.timeAgo}</h2>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-base leading-relaxed p-2">
          {post.content
            .slice(0, expanded ? post.content.length : 1)
            .map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          {post.content.length > 1 && (
            <button
              onClick={toggleExpanded}
              className="text-blue-500 hover:text-blue-700"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
        {post.type === "repost" && (
          <div className=" border-gray-500 border-t py-2 ">
            <div className="  ">
              <div className="flex items-center justify-between space-x-4 my-2">
                <div className="flex items-center space-x-2">
                  <img
                    src={post.originalAuthor.avatarUrl}
                    alt="highlight"
                    className="h-16 w-16 rounded-full border-2 border-double border-gray-200"
                  />
                  <div>
                    <h1 className="text-md font-semibold">
                      {post.originalAuthor.name}
                    </h1>
                    <h2 className="text-sm text-gray-600">
                      {post.originalAuthor.profession}
                    </h2>
                    <h2 className="text-sm text-gray-600">{post.timeAgo}</h2>
                  </div>
                </div>
                {post.type === "repost" && (
                  <button className="text-blue-500 hover:text-blue-700">
                    View Post
                  </button>
                )}
              </div>
            </div>
            <div className="space-y-4 text-base leading-relaxed p-2  ">
              {post.authorContent
                .slice(0, expanded ? post.authorContent.length : 1)
                .map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              {post.authorContent.length > 1 && (
                <button
                  onClick={toggleExpanded}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          </div>
        )}

        {/* {post.mainImageUrl && (
          <img src={post.mainImageUrl} alt={`post image`} className="" />
        )} */}
        <ImageSlider images={post.imageUrls} />

        {/* <div className="flex flex-col">
          {post.imageUrls.map((imageUrl, index) => (
            <img src={imageUrl} key={index} alt={`post image`} className="" />
          ))}
        </div> */}
      </div>
    </div>
  );
}
