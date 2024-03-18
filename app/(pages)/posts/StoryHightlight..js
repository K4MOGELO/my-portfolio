import React from "react";

import { useState } from "react";
import Stories from "react-insta-stories";

export default function StoryHighlight({ title, HideStory, story }) {
  const burakHeading = {
    heading: "K4MOGELO",
    subheading: "16 february 2022",
    profileImage: "/images/gallery/image4.jpg",
  };

  const initialStories = [
    {
      url: "https://i.imgur.com/in5Jr1h.jpg",
      type: "image",
      header: burakHeading,
      seeMore: true,
      duration: 1500,
      seeMore: ({ close }) => {
        return <div onClick={close}>Hello, click to close this.</div>;
      },
    },
    {
      url: "/images/gallery/image4.jpg",
      type: "image",
      header: burakHeading,
      seeMore: ({ close }) => {
        return <div onClick={close}>Hello, click to close this.</div>;
      },
    },
    {
      url: "https://i.imgur.com/Zo5Kpnd.mp4",
      type: "video",
      header: burakHeading,
    },
    {
      url: "https://i.imgur.com/LBRXhIq.jpg",
      type: "image",
      header: burakHeading,
    },
    {
      url: "https://i.imgur.com/ARMxyC4.png",
      type: "image",
      header: burakHeading,
    },
  ];
  const storyContent = {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  };
  const onAllStoriesEndHandler = () => {
    HideStory(false);
  };
  const [stories, setStories] = useState(story);

  return (
    <div className=" fixed flex top-0 left-0 right-0 w-screen h-screen z-50  bg-black flex-col items-center">
      <div>
        <h1>{title} Highlights</h1>
      </div>

      <Stories
        stories={stories}
        defaultInterval={1500}
        // width={'100%'}
        // height={'100vh'}
        style={{
          display: "flex",
          justifyContent: "center",
          background: "red",
          cursor: "pointer",
        }}
        storyStyles={storyContent}
        loop={false}
        keyboardNavigation={true}
        isPaused={() => {}}
        currentIndex={() => {}}
        onStoryStart={() => {}}
        onStoryEnd={() => {}}
        onAllStoriesEnd={onAllStoriesEndHandler}
      />
    </div>
  );
}
