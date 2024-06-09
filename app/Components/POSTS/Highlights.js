import Image from "next/image";
import React, { useState } from "react";
import Stories from "react-insta-stories";

const highlightData = [
  {
    id: 1,
    name: "",
    imageUrl:
      "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747494/MY%20WEBSITE/posts/Highlights/image1_zgmvlm.jpg",
    title: "Hightlight 1",
    stories: [
      {
        url: "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747494/MY%20WEBSITE/posts/Highlights/image1_zgmvlm.jpg",
        type: "image",
        seeMore: ({ close }) => {
          return <div onClick={close}>Hello, click to close this.</div>;
        },
      },
      {
        url: "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747205/MY%20WEBSITE/posts/Highlights/IMG_6326_phyag1.jpg",
        type: "image",
      },
    ],
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747493/MY%20WEBSITE/posts/Highlights/usa_bph5am.png",
    title: "Hightlight 2",
    stories: [
      {
        url: "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747198/MY%20WEBSITE/posts/Highlights/IMG_6270_hkjli8.jpg",
        type: "image",
      },
      {
        url: "https://res.cloudinary.com/dnp6z6i4u/video/upload/v1710748191/MY%20WEBSITE/posts/Highlights/0318_ao5tt9.mp4",
        type: "video",
      },
      {
        url: "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747181/MY%20WEBSITE/posts/Highlights/20230201_094453_frspp2.jpg",
        type: "image",
      },
      {
        url: "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747204/MY%20WEBSITE/posts/Highlights/IMG_6505_vtdg3p.jpg",
        type: "image",
      },
    ],
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747220/MY%20WEBSITE/posts/Highlights/IMG_6552_b1kz6i.jpg",
    title: "Untitled ",
    stories: [
      {
        url: "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747493/MY%20WEBSITE/posts/Highlights/jaden_c7vvo6.jpg",
        type: "image",
      },
      {
        url: "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747205/MY%20WEBSITE/posts/Highlights/IMG_6326_phyag1.jpg",
        type: "image",
      },
    ],
  },
];

export default function Highlights() {
  const [showstory, setShowStory] = useState(false);
  const handleCloseStory = (index) => {
    setShowStory(false);
  };
  const handleHighlightClick = (index) => {};
  return (
    <div className="flex space-x-4 items-center px-2 mb-3">
      <div className="flex space-x-4">
        {highlightData.map((highlight, index) => (
          <div
            key={highlight.id}
            onClick={() => setShowStory(true)}
            className="space-y-2 justify-center items-center rounded-full flex flex-col"
          >
            <Image
              width={300}
              height={300}
              src={highlight.imageUrl}
              alt={highlight.title}
              className="h-16 w-16 rounded-full "
            />
            <p className="text-sm">{highlight.title}</p>
          </div>
        ))}
      </div>
      {showstory && <Highlight close={handleCloseStory} />}
    </div>
  );
}

function Highlight({ close }) {
  const header = {
    heading: "K4MOGELO",
    subheading: "16 february 2022",
    profileImage:
      "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747521/MY%20WEBSITE/Home/myimage_ookcyh.jpg",
  };
  const stories = [
    {
      url: "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747198/MY%20WEBSITE/posts/Highlights/IMG_6270_hkjli8.jpg",
      type: "image",
      header: header,
    },
    {
      url: "https://res.cloudinary.com/dnp6z6i4u/video/upload/v1710748191/MY%20WEBSITE/posts/Highlights/0318_ao5tt9.mp4",
      type: "video",
      header: header,
    },
    {
      url: "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747181/MY%20WEBSITE/posts/Highlights/20230201_094453_frspp2.jpg",
      type: "image",
      header: header,
    },
    {
      url: "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747204/MY%20WEBSITE/posts/Highlights/IMG_6505_vtdg3p.jpg",
      type: "image",
      header: header,
    },
  ];
  const storyContent = {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  };

  return (
    <div className=" fixed top-0 left-0 w-full h-full z-50 bg-black items-center flex justify-center">
      <div>
        <h1 onClick={close}>close</h1>
        <Stories
          stories={stories}
          defaultInterval={1500}
          onAllStoriesEnd={close}
        />
      </div>
    </div>
  );
}
