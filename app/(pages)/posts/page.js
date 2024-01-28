import LinkedIn from "@/app/components/Posts/LinkedIn";
import React from "react";
const posts = [
  {
    type: "s",
    name: "Kamogelo Sithole",
    skill: " Software Engineer",
    author: "Kamogelo Sithole",
    profession: "AI | Software Engineer",
    timeAgo: "1d",
    avatar:
      "https://techcrunch.com/wp-content/uploads/2016/07/george-geohot-hotz.jpg",
    content: [" GeoHotz", " GeoHotz GeoHotz GeoHotz"],
    imageUrls: [
      "https://media.licdn.com/dms/image/D4D22AQFjYcumGNDT7w/feedshare-shrink_2048_1536/0/1694378241687?e=1709164800&v=beta&t=TTF3Z-fflrFeGUE1YBGQ-HpQ-KnnAKXLS7cxc_D7fz0",
      "https://media.licdn.com/dms/image/D4D22AQFjYcumGNDT7w/feedshare-shrink_2048_1536/0/1694378241687?e=1709164800&v=beta&t=TTF3Z-fflrFeGUE1YBGQ-HpQ-KnnAKXLS7cxc_D7fz0",
      "https://example.com/image3.jpg",
    ],
    imageUrl:
      "https://techcrunch.com/wp-content/uploads/2016/07/george-geohot-hotz.jpg?w=640",
  },
  {
    type: "repost",
    name: "Kamogelo Sithole",
    skill: " Software Engineer",
    author: "Katlego W. Phoshoko, PhD",
    avatar:
      "https://techcrunch.com/wp-content/uploads/2016/07/george-geohot-hotz.jpg",
    authorImage:
      "https://media.licdn.com/dms/image/D4D03AQHD-U5nOdjHJg/profile-displayphoto-shrink_400_400/0/1699945123154?e=1712188800&v=beta&t=KfRhnOLsWF2Bj2LQX7ipa7Eso4CrzuS5UiWrsVzNMfw",
    profession: "Principal Systems Scientist | HP...",
    timeAgo: "5d",
    content: [
      "I want to extend my heartfelt gratitude to Dr Katlego W. Phoshoko, PhD for his unwavering support and mentorship. Your dedication to nurturing young talent and advocating for the development of high-performance computing (HPC) capabilities is truly commendable. It's an honor working with you and benefiting from your inspiring leadership and guidance",
    ],
    authorContent: [
      "I admire and share Prof Bonang Mohale's perspective on the importance of extending a helping hand, regardless of one's position or wealth. His belief in 'Lift as you rise' resonates with me deeply. Although I have yet to acquire a copy of his book, I am eagerly looking forward to the opportunity to read it.",
      "As I focus on my own professional growth, I have made a conscious decision to actively contribute to the development and nurturing of young talent around me. I strongly believe in guiding and empowering the youth to seize both current and future opportunities. In line with this commitment, I actively advocate for the development of high-performance computing (HPC) capabilities.",
      "Ernest Mokwena, Cebisile Masombuka, Lebogang Ledwaba, Rathani Rofhiwa Tshivhandekano, and KAMOGELO SITHOLE are just a few of the amazing young minds from the University of Limpopo @ULVarsity who I recently had the pleasure of recruiting, getting to know, and mentoring concerning hashtag#HPC. These intelligent people kindly agreed to take a picture with me and my colleague, Dr. Kenneth Kgatwane. Thank you guys!",
      "These undergraduate students will represent the University of Limpopo @ULVarsity in the student cluster competition at the 2023 Centre for High-Performance Computing national conference in December.",
      "The competition serves as a valuable platform for undergraduate students in South African universities to gain exposure to the HPC industry and its potential.",
      "I wish them success and a brighter future!",
    ],
    imageUrls: [
      "https://media.licdn.com/dms/image/D4D22AQFjYcumGNDT7w/feedshare-shrink_2048_1536/0/1694378241687?e=1709164800&v=beta&t=TTF3Z-fflrFeGUE1YBGQ-HpQ-KnnAKXLS7cxc_D7fz0",
      "https://media.licdn.com/dms/image/D4D22AQFjYcumGNDT7w/feedshare-shrink_2048_1536/0/1694378241687?e=1709164800&v=beta&t=TTF3Z-fflrFeGUE1YBGQ-HpQ-KnnAKXLS7cxc_D7fz0",
      "https://example.com/image3.jpg",
    ],
    imageUrl:
      "https://media.licdn.com/dms/image/D4D22AQFjYcumGNDT7w/feedshare-shrink_2048_1536/0/1694378241687?e=1709164800&v=beta&t=TTF3Z-fflrFeGUE1YBGQ-HpQ-KnnAKXLS7cxc_D7fz0",
  },
];

export default function page() {
  return (
    <div className="md:justify-center flex flex-col items-center  ">
      <div className="flex space-x-4 items-center  p-4  ">
        <div className="font-semibold">Highlights</div>
        <div className="flex space-x-4">
          <div className=" justify-center items-center rounded-full flex flex-col ">
            <img
              src="https://techcrunch.com/wp-content/uploads/2016/07/george-geohot-hotz.jpg"
              alt="highlight"
              className="h-16 w-16 rounded-full border-2 border-double border-gray-200 "
            />
            <p className="text-sm">Highlight 1</p>
          </div>
          <div className=" justify-center items-center rounded-full flex flex-col ">
            <img
              src="https://techcrunch.com/wp-content/uploads/2016/07/george-geohot-hotz.jpg"
              alt="highlight"
              className="h-16 w-16 rounded-full border-2 border-double border-gray-200 "
            />
            <p className="text-sm">Highlight 2</p>
          </div>
        </div>
      </div>
      <div className="md:justify-center flex-col items-center flex p-4">
        {posts.map((post, index) => (
          <LinkedIn post={post} key={index} />
        ))}
      </div>
    </div>
  );
}
