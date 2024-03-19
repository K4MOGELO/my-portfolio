import React from "react";

import { useState } from "react";
import Stories from "react-insta-stories";

export default function StoryHighlight({ title, story, index, HideStory }) {
  const storyContent = {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  };

  const [stories] = useState(story);
  const onAllStoriesEndHandler = () => {
    HideStory();
    console.log("close this");
  };
  return (
    <div className="  fixed flex top-0 left-0 right-0 w-screen h-screen z-50  bg-black flex-col items-center">
      <div className=" w-96 flex  justify-between p-2">
        <h1>{title}</h1>

        <h1 onClick={onAllStoriesEndHandler}>close(doesnt work currently)</h1>
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
