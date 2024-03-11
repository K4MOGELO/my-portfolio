"use client";
import StoryHighlight from "./StoryHightlight.";

import { useState } from "react";

export default function page() {
  const [showstory, setShowStory] = useState(false);
  return (
    <>
      <h1 onClick={() => setShowStory(true)}>helo</h1>
      {showstory && <StoryHighlight HideStory={setShowStory} />}
    </>
  );
}
