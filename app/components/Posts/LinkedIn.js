"use client";
import React, { useState } from "react";

export default function LinkedIn({ post }) {
  const MAX_PARAGRAPHS_DISPLAYED = 1;
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="md:w-1/2 w-full p-4 border rounded-lg shadow-lg mb-4">
      {post.type === "repost" && (
        <>
          <div className=" border-gray-200 px-2 ">
            <div className="flex items-center justify-between space-x-4 my-2">
              <div className="flex items-center space-x-2">
                <img
                  src="https://techcrunch.com/wp-content/uploads/2016/07/george-geohot-hotz.jpg"
                  alt="highlight"
                  className="h-16 w-16 rounded-full border-2 border-double border-gray-200"
                />
                <div>
                  <h1 className="text-xl font-semibold">{post.name}</h1>
                  <h2 className="text-sm text-gray-600">{post.skill}</h2>
                  <h2 className="text-sm text-gray-600">{post.timeAgo}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-base leading-relaxed p-2  border-b">
            {post.content
              .slice(
                0,
                expanded ? post.content.length : MAX_PARAGRAPHS_DISPLAYED
              )
              .map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            {post.content.length > MAX_PARAGRAPHS_DISPLAYED && (
              <button
                onClick={toggleExpanded}
                className="text-blue-500 hover:text-blue-700"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </>
      )}
      <div className=" border-gray-200 px-2">
        <div className="flex items-center justify-between space-x-4 my-2">
          <div className="flex items-center space-x-2">
            <img
              src={post.authorImage || post.avatar}
              alt="highlight"
              className="h-16 w-16 rounded-full border-2 border-double border-gray-200"
            />
            <div>
              <h1 className="text-xl font-semibold">{post.author}</h1>
              <h2 className="text-sm text-gray-600">{post.profession}</h2>
              <h2 className="text-sm text-gray-600">{post.timeAgo}</h2>
            </div>
          </div>
          {post.type === "repost" && (
            <button className="text-blue-500 hover:text-blue-700">
              View Profile
            </button>
          )}
        </div>
        <div className="space-y-4 text-base leading-relaxed p-2">
          {post.type === "repost" ? (
            <>
              {post.authorContent
                .slice(
                  0,
                  expanded
                    ? post.authorContent.length
                    : MAX_PARAGRAPHS_DISPLAYED
                )
                .map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              {post.authorContent.length > MAX_PARAGRAPHS_DISPLAYED && (
                <button
                  onClick={toggleExpanded}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              )}
            </>
          ) : (
            <>
              {post.content
                .slice(
                  0,
                  expanded ? post.content.length : MAX_PARAGRAPHS_DISPLAYED
                )
                .map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              {post.content.length > MAX_PARAGRAPHS_DISPLAYED && (
                <button
                  onClick={toggleExpanded}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              )}
            </>
          )}
        </div>{" "}
        {post.imageUrl && (
          <img src={post.imageUrl} alt={`post image`} className="" />
        )}
        {/* <div className="flex flex-wrap mt-4">
          {post.imageUrls.map((imageUrl, index) => (
         
          ))}
        </div> */}
      </div>
    </div>
  );
}
