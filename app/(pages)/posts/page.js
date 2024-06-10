import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ImageCarousel } from "./ImageCarousel";
import PostContent from "./PostContent";

export default function Page() {
  const author = {
    name: "Kamogelo Sithole",
    profession: "Software Engineer",
    avatarUrl:
      "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747521/MY%20WEBSITE/Home/myimage_ookcyh.jpg",
  };

  const posts = [
    {
      date: " 2",
      content: ["moscow hackathon preparation"],
      imageUrls: [
        "https://res.cloudinary.com/dnp6z6i4u/video/upload/v1717576284/MY%20WEBSITE/posts/posts/xvfzz4uhqxgokqemool3.mp4",
      ],
    },
    {
      date: "7d ago",
      content: ["Being one of the founders of the developer society at the University of Limpopo, we regularly host events for students, bringing in industry experts from different career fields to inspire and provide our students with insights on how they started and how to succeed."],
      imageUrls: [
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1718031559/MY%20WEBSITE/posts/e7nzzvf6kgb7vewn6b8t.jpg",
        "https://res.cloudinary.com/dnp6z6i4u/video/upload/v1718031556/MY%20WEBSITE/posts/l1lpwkapjghuzeszwyma.mp4",
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1718031748/MY%20WEBSITE/posts/qoxl92j04n4utle1jpzb.jpg",
      ],
    },


    {
      date: "7d ago",
      content: [""],
      imageUrls: [
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747493/MY%20WEBSITE/posts/Highlights/jaden_c7vvo6.jpg",
      ],
    },
    {

      date: "7d ago",
      content: [
        "Having previously competed in the International Student Cluster Competition, I was invited to accompany this year's CHPC team to help set up their cluster for ISC24 in Cape Town.",
        "I had the pleasure of visiting some companies like DIPLOMICS, where we had discussions about omics, and Tsolo, where we discussed data storage and its manufacturing process.",
        "We then visited SARAO, where we learned about the MeerKAT Radio Telescope project in depth. Lastly, we visited CSIR's CHPC, where we were building a computer cluster.",
      ],
      imageUrls: [
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1717577230/MY%20WEBSITE/posts/posts/u8w63ew1dz6owq6noq8r.jpg",
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1717577223/MY%20WEBSITE/posts/posts/nihcqo2zagcxvgymg1ew.jpg",
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1717947727/MY%20WEBSITE/posts/posts/qrobl8aob6jnzr7thiql.jpg",
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1717577215/MY%20WEBSITE/posts/posts/fgk1ldbgraxxn0mbsgne.jpg",
      ],
    },
    {
      date: "7d ago",
      content: ["mhh"],
      imageUrls: [
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710748477/MY%20WEBSITE/posts/Highlights/csir_is50mw.jpg",
      ],
    },
    {
      date: "7d ago",
      content: ["CHPC National Conference"],
      imageUrls: [
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710751749/MY%20WEBSITE/posts/talkchpc3_obqvrz.jpg",
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710751658/MY%20WEBSITE/posts/talkchpc1_nfonfc.jpg",
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710751880/MY%20WEBSITE/posts/talkchpc4_qnt1bc.jpg",
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710751671/MY%20WEBSITE/posts/talkchpc2_zzfz5p.jpg",
      ],
    },
    {
      date: "7d ago",
      content: ["I was awarded an incredible opportunity to travel and undergo training at Dell Headquarters in Texas, USA, and the Texas Advanced Computing Center (TACC) in preparation for the ISC Student Cluster Competition hosted in Hamburg, Germany.", "We engaged in hands-on sessions with HPC experts, designed theoretical clusters addressing real-world challenges, and had in-depth discussions on the components of efficient cluster design. "],
      imageUrls: [
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1718030862/MY%20WEBSITE/posts/wx2l0coryci5lvxfejo9.jpg",
        "https://res.cloudinary.com/dnp6z6i4u/video/upload/v1710748191/MY%20WEBSITE/posts/Highlights/0318_ao5tt9.mp4",
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1718030524/MY%20WEBSITE/posts/wbjhrgptfhsadkwnkt2f.jpg",
        "https://res.cloudinary.com/dnp6z6i4u/video/upload/v1718030503/MY%20WEBSITE/posts/oueguhk2kwmnto2tpvho.mp4",
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747198/MY%20WEBSITE/posts/Highlights/IMG_6270_hkjli8.jpg",
      ],
    },

  ];
  return (
    <div className="  flex flex-col items-center   ">
      {posts.map((post, index) => (
        <Card key={index} className="w-full max-w-xl ">
          <CardHeader>
            <div className="flex items-center justify-between space-x-4 ">
              <div className="flex items-center space-x-2">
                <Image
                  height={300}
                  width={300}
                  src={author.avatarUrl}
                  alt="highlight"
                  className="h-16 w-16 rounded-full border-2 border-double "
                />
                <div>
                  <h1 className="text-md font-semibold">{author.name}</h1>
                  <h2 className="text-sm text-gray-600">{author.profession}</h2>
                  {/* <h2 className="text-sm text-gray-600">{post.date}</h2> */}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <PostContent content={post.content} />
            <div className="w-full">
              <ImageCarousel images={post.imageUrls} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


