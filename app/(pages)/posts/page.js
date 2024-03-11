"use client";
import ImageSlider from "@/app/components/Posts/ImageSlider";
import LinkedIn from "@/app/components/Posts/LinkedIn";
import PostCard from "@/app/components/Posts/PostCard";
import React, { useEffect, useState } from "react";
import StoryHighlight from "../test/StoryHightlight.";
const posts = [
  {
    type: "status",
    author: {
      name: "Kamogelo Sithole",
      profession: "Software Engineer",
      avatarUrl:
        "https://techcrunch.com/wp-content/uploads/2016/07/george-geohot-hotz.jpg",
    },
    timeAgo: "1d",
    content: ["testing...posts works?"],
    imageUrls: [
      "data:image/jpeg;base64,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",
    ],
  },
  {
    type: "repost",
    originalAuthor: {
      name: "Katlego W. Phoshoko, PhD",
      profession: "Principal Systems Scientist | HP...",
      avatarUrl:
        "https://media.licdn.com/dms/image/D4D03AQHD-U5nOdjHJg/profile-displayphoto-shrink_400_400/0/1699945123154?e=1712188800&v=beta&t=KfRhnOLsWF2Bj2LQX7ipa7Eso4CrzuS5UiWrsVzNMfw",
    },

    author: {
      name: "Kamogelo Sithole",
      profession: "Software Engineer",
      avatarUrl:
        "https://techcrunch.com/wp-content/uploads/2016/07/george-geohot-hotz.jpg",
    },
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
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhIYGBgYGBgZGBgYGBgYGBgSGBgZGRgYGBgcIS4lHB4rIRgZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHTQrJCw0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDE0NDQ0NDQ0MTQ0NP/AABEIAMcA/gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAYHBQj/xAA+EAACAQIEBAMFBgMHBQEAAAABAgADEQQSITEFQVFhBnGBBxMikaEUMkKxwfBSYtEzcoKiwuHxI3OSk9Ik/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAJBEBAQACAgICAgIDAAAAAAAAAAECEQMhEjEEQRNRYaEiQoH/2gAMAwEAAhEDEQA/AOSq946VASpk6ODAkixIQFhEhAWEI6lTLEKoJJ2AkW6JDYoW89zDeGMQ4JVNBqba2HeenhfDQFs2vWU5c2M+1+PBlWMqYQ8hIHosNxOiP4dT+H5TysT4efUAj16xjz411l8bLGMXCWsZhHpsVZSpHI/mOo7yrLpds9mhH07bmMigSULBrjpGmueUiIgqEwBnJ5wAMnSiBvJQIFZaJjhQ7yxCBD7gRlSlbaWYQKKtaOvtJatLmJXgSVBI4sSA5TrFaMhAVpJTqW3jUS8RxY2gWnQGV3pkSzCQK6VessAyvWUDaMDHrJFyF5WsLfekZ84F2813AuHZFzEfEdz07CZnguHvUW/LX+k6DhKeg9Jn5sv9Wr4+E916WAZgLDnL9Oh1lagAJbWr2mPUbYf7gSnicKOkuioTpK1WrrtIddvD4r4bGIplQPjUEo3MHp3B6fKcsxFFkYqwIZSQQeRGhE7dg8VlYWNtfrMt7T+DI2TGUwFLkJVXT+0AJV9OoBB7qOs1cHJr/GsPyMO9xzyiuhMb7vS8ltZYx2GUCa2RHSW5lq0rMw3G8nR7wHRY0mCuDAWLEiwCEIQEkdSleSwgUgSDAC5lipTvK+oMBGW0SOLX3jYBJqS3veQySm9oEhrCMaqTEFPrJFpCBBeFpbCjpAiBVKkSSkoMnIvJ+H0Bf96TnK6iZN16fDKeXW3T6zY4NxlBPpMjg/iYqNuflNdw2g1TVdlF79hp+v0mbOW1s4rJHtYVCdSLDlfT01noJQHQfMTLY0omtbGGmW2VAC5HLe4Ve5AG9zI+GYXMQ6YjEENqpe2Vhcg/c7gjz0nPhNbqz8l3qNiMIOka+FHbt5ShhOIhQFZrtsO9vPYai5PaVcTxHO/u1YroS1xay8z38xOPGbd+d0sVVS9veJccswuPS8r8WQVcO6EggjQb2dTdDbzE8KphsKz2qFwx0GXVtb/hBLX7WlqhQyIzUaq1FNwDzuNs3Xy0nXjMe4ryyuXVcxxl1YrK09fj6DOHH3XuR5XOnmDcek8ibcbuMGU1SSWkCdL2kUfSaxkoTikOesY6W1EnBhAjpvfzkkhenzEWnU5HeBNCJFgEIRICynU3luNdAYFOEtNSFpXZbQEAgRJqAHrFQAkwHXibRxEbtIDwYsjtFDQHz0qJyoG/i07Dr+kseEuEjE4gI2qqpdh1VSq2+bD0vNjxnw+r0lyoiZblCiBc3mB6fn2lWeclkq/j47lPJiOFljUIU272vbadK4Fw2mlMg5iz6sSdb3G55bDboJi+C4HI73NzmsLdOv76Tb4UHa+1pTnl30v4sOu1WlwijnzOpZi+c5idHGxU9RYWkv2ZEVVS4VLlUDEBcxudb6XPznpJTB3Fz15k9T1/OK+Hup7antOPLJf+OTtn0JDWJuAxI3Ns1rgXOg00HnLKUfjW1rsrKCQDYMQ1viBAJKAeumtpBU+9mAAX8Nzqe89fE0FFBXNQX+HsQ19PS2vpJ3dyosmrHlU+FYctmKkPdTmzWYFdrG49QNDYX2Ekp4S1R3DZs4+MaC7DZ7aa8rz1MPTV1V7AA7kcmvbnfpCtQybi468/LykeWSfDH3HLvFSIoRQCrKagIJuCPeP8Q0GhPxeT21tMzOn+KeDfanXKypYfEzXsFXMf9Vz5TnGNwzU3ZGtdSQbG405jsd/Wa+POZT+XncmFxv8ACtCEJYrT0X5GSGoOsqSzSsRtAPedAYjUyd9JLCAii3OOhEgLCEIBCEIBGOl46ECqykGOp1LXkzgGV2pkQLEIAwkBCIkdAiBrfZtUK4h1H3mokJ/eL0x9L39DOkcRpsFVQTuAovZQbEHMLXOmk434cxxoYmlUHJgDqBowKnU/3vpOwV8U7hCDcB1JOxKDRrg9ASPOZeaau2zgu8dMILpVYdHI+RImtwl7X76/SZh6LGo5tpnb4jt97/ca95rcIb0/l9ec5vpZhe9LVGp5d5BjOIhfhBueg/L99ZFWqkA5d2Nh/t9Z5FDCuzMQrNzYg2AJtcEk62vsLkXkSbWZZ66KVVwqtTR1BuoZQSOmVrX5SLE1TkCJdwtiodbgZeZ1+K3If0nqqqUrhq2HQhgGDVEBF1v8VzpuN7bxAtJy3u8RhmOzZXV7DXU/FoNJZrr0p3u91W4JxUaI9lOtrbH0nrYmuGUkDbT/AImZ4pgTTKsyDKxUB1Jy5nBYA63Gx127z1MBm+IMDYJ9QwAB72595XcfuLcc/qn4VQaqE/dDXPkoJ/T8pzXxvb7bXtsGUeoRQfredSUKjozDY6jlYgX/AFM5F4kv9rxFzcivVFz2dhLeGd1m571/15hESPcRk0soklJrGRwgXYRqNcRbwFljAYU1atOkpANR0QE7Au4QE9heV/SehwKoyYik4GqupA11se0gdcX2Q4KwBxGJLW1IaiAT2X3Zt5XMhb2RYVrFMVXsdj/0mFuuii48pa4/7SThsTVw5wRcU2AzrWClgyK4OUppow5yovtXoEDNgKo6Wamw9L2km1er7HU/BjnH96irfk4mC8W+FquAqrTdldXUslRQQHUGzAqdVYXFxruNdZ04e1nC/iwuKH+Cmf8AXM57SuM0cbhcPiaIcCnXq0GDqFYM9OnU2BItZV59YHNsneLkEYXjbyBLcRpYRkI0KyuRJUqSCEkW4SFKnWSiQFm+4L4wpCmFrlwyg3yqWznsRtfTe3OYGE5yxmU1XeOdxu42tHiAqs7opUMcwUm+UsDmUnS9ttpq+CVwyFbEeep/f9Zzrw5irMynnr/W02eDco+Yfda2Y6fO3l23lOWOumjjy329RT94X1B+Ene4sb/XbuJSxNF7kI7KCTcBjY3IN7C3MCerXTKC4F8xGY638+fMyEEb2P7F7E/OVdz0umre0GDTKNagHM3F9RudQZaqOpBUspAAuMiWty2TvI2ZCdEGm9hy0t5xj0xvlGut9t9fS86mW4mztUxtUspQVCQeXIgW0t00+ktU3bKLaF2XXXkCTv3MhphWa1gDy69eXrL2Epap/CtwelydNetxOe0XURVayq+ZrAIpNzYAAZdvQ78pxjEVMzM3Vidd9TfWbn2i4nL7umrG5zFtTsLC3WxJJsf4ecwlgfOaeLHU2x8uW7orjQSKWCBltIgktVGSVKJMeoAjiYChAI4MJHCQJC8dTa5AOxNj5HQyGbPwJ4eo4lapqBiVKhLMVy/CWLabnbe47SLdTbrHG5XUXvHjD7SaitYYnD4eo1yBdTRVefP4eU8G90AsumX4tjodPI62mm8ZcOYDB5bORhUpEsbAjDu65tjrqPnMlWxCowptoTodAbG/8Vut4llrjLGz0Wvh32DsDqL5wTa97XFrTU+HODfbMHXwzVCjJiaNfPlDavSq09RcXvk11mcck5SWvfYHqZrfANVVbFUywGailQkbBaVVL6n/ALp+ZiyyOsdeUlc4x+EalUekxBKOyEjYlTa47GV51/G8CwudmyI5clnLgMTc3JudQfK05t4pwC0MS9Nb5LKy3NyFZQbX52NwOwE4x5JldLeTiuPbyYSM1Y33hlilHCEJII5XIjYQLKuDBjK0eHgXeHuRUWxsSbX8+s3uHqkiwG182mx6f89ZzdHsQRyIPyN506kQyow/EoDeWmVvMc+ovKeS6sX8M3Lp63DscCmQm+lrcyv9RFK20+8NLHc33IJO9tB5HaUauHsbrptcWNs3Ww8hpJXqFrXHT4l1VidNb7SvqVdd6WffqpuWHW42uBz/APIRj4rNpewI7i2oGv75ESI4Z2/B0BNmHe9l8vrKuJw9ZQcoOvMMV05aDvb/AHkyYouWT0EUXuCbLqSN9tiRty6Sw+PREvcbanb4dL376/XlzzrlwWHM3JO9idz5du95nfFmJZclIMbMudtdTyW/QfenUxlqvLKzuvM4/j/f1WbkPhXUnQbkX1sTeeQVIkoMWXSaUW7MR+seJGydI1WtJQnhG+8EQ1JAfCRGoYmYyRNedW9nfDXpUyzi2cFiOmllv6H6zkqqbzv+Apk0lO2gJ8ucp5rZqNHx5N21l/H2tHCv/BUxVOw3N2Soo87XmBeoL6jXuAT131sZvfF9Mtgcz65eIZm1sRTdHTT1UTD4PBI1RlZ7AKCCpvrz0YXPy5eU7x9RTy3WVR++GnbbtNN4DqK+Jemxv77C4mlrzume3+T6TLnCDIzXbMub8S5bA6culuc97wYi0+IYNsxIeoUNyDb3iMltP706vXVc499z6bnCcF92MzVC9ySA2yoWJCgbGwsLnpfnM77QOArUpjEU9Xpghxc/FSF2JA6rcnyJ6Ce/iOBuiKpxdVtgqtkv5MwF29LHfWX6GGZVAdAABrsVy210O/PlzmSZeOW3oZyZY6cGyLI3Os9Tj2GSniKqJfIrWUE3K6Alb87Ekek84LNcu5tgs1dIYQhJQIQhAIQhAVROgeF+J02RKbuA6gABzYNboToT23mEorzktpznhMpqu8M7jdx2hMLcX7adD+9PpHJRBNraHfynHsJjatI3pVXQ7/CxX5gaH1ns4Lxni0Ny6Prs6D5XXKZReC/VXznxvuOtUxYWPcX6+cqY6w/Lt8plML7R0P8AaYVlPWmwb/KwW3zMmq+McG4Bzup6MjXBt/LmH1nF4859LJyYX7WnQM5021O2trcvOc68WVQcQQPwqq/S/wCs2tLxNhMrXrHMSdClTbTmFtMBxmqHqs6m4ZtOVwAADr5Szixy33FXNljZ1VAPDOYqiSC00MyLUxMhkuaJmgRMto9AI4yNlgTACF5GrR9oCltDPobgzXwyn+Rfynz3SUFgDsSAfInWfQfCre7Cg6ZbDyEo5vpo4Ps/wwEapiKTqrC1NwjANpd7mx0tdrek9qr4dwb6tgsMx6tQpE/MrMXjsO6VRiaJy1VRk3IDUyQ2U6Ebi+oMfh+P8TZQVRHvzvSHpYqIw5MZjJTk4rcrY1R8J4A3H2HDjqBSQX+QjaXhDAIyOuEpq6MHRlBGV1OYEWPUAzwxxziY1OGQ/wCKl+jiPp8fx5tmo0kB0ubEg8zZajX+U7/Li4/Dl+v7TcQZFd2dwAjOBrYKAT9dP+JV+1u5zCm4TTK2UkkdbAXA/fmw8DpuxZ1DOxzM5Auz82I2zHqBJuK11w+HZ2ayopJ6m2yjz0me3yvpr1McZHJfaA6HFsFUAhVD2Fs1Q3Yk/wA2VlB8uszQjsTWao7O27MzHpcm9h2jZqk1JGG3dtQhD0MX3bdJLEE6co/dt0h7s9JLCQIvdmOFLvHwgPVYsYDFzQHwjM0UNJCwiXhAUCR19h5yULGVaZI0gQLHiRgSQQFtC0WF4CWiwhAjdYitJZCwgTBuc714XfMi36D8p8/AzvHhhv8ApIe35fsSnlnpdxX29jHKNee887hxyEjle49TqJ7GIS/LcTzSmW55GUZdNGPcX3fTzlU6ny/ORCoWNgLX59Jfw2HtOPbv0fQU21nNvatxsFUw6nUnM9v4R90HzOv+GbLxTxtcPRZidhYDmW5AThGOxbVXZ3N2Y3P9B2mjix3dqObPrSBDJhK0lR5oZUoWJaSCNgNhaLFgNtCKWjbwFhEhAIQhAW8cDGxVgODR95HHAwB0B/rIjTIkwjgZArQtLDAHlI2p9I2IzAGDCJAHOkjJjm2jBJBadv8AANYPh0vyRRf+YCx+s4sMO2XPb4b2vcb+U6l7M63/AOcjo7D8j+sr5PSzCXbo5UWlKpTBa37tLTVQFv8Au50kdOmb36zPZtpxujVoCQYzFhFI/dpeqvZdtZy/x1xtkDIDZm+Edtix9PzMTHvUdZZyTdZnxvx04itlU/Amg7tzP6fOZiC7xDNeMkmoxZZXK7ohCElyuxIsICGMYxxMZAQRYQgEIQgEIRYCRUMWJAWOBjDFgSQjVMfIBAQtGtAVpHkBjpGDAa6kSGWnOsRUF728xOsZu6KrzqXs8OWgv8zuT53t+k59jMuUWAHlNF4S8S08MgSorn4iQUVTofNhzkfJ47j1Lt1w5y3ddZp1btr+Efsz00XnOdDx/hQT8GIPK4Snt61J62G9ouBIGZqqdmpkkd/gLD6zP4Zfpfc8f20WPY202t9ZxHx0x+0lSfuqvzJJP5/SdKxfjnAsNK5/9VX/AOJzHxjj6dfEe8pm65FW5BW7Am+h15j5SePGzLuOc8pcemegYRwFzL1BseKZ6SRRaKX7wJjInMkaQmAWigRBFgEIRYCQhCARYQEB1o0x8QwGwimIYCqY+8jjxAcDFIjYoMgMLRkVxrEkhG5R6GNY6QEgLWp8x6xKckF5GotJEojrxkcIQJDiOXr+klkWJ5esJV4tucBHCAii/OOyRpFo4PAsPIwIQgOKxIQgESEICwhCARVhCA+NhCARIQgJHLCEIOEIQhJrRkIQEMckIQJLxghCA6OEIQCRYldAYkIFePWEIDxGFIQgf//Z",
      "https://techcrunch.com/wp-content/uploads/2016/07/george-geohot-hotz.jpg?",
    ],
  },
];
const burakHeading = {
  heading: "K4MOGELO",
  subheading: "16 february 2022",
  profileImage: "/images/gallery/image4.jpg",
};

const highlightData = [
  {
    id: 1,
    name: "",
    imageUrl: "/images/posts/image1.jpg",
    title: "HPC",
    stories: [
      {
        url: "/images/gallery/image4.jpg",
        type: "image",
        header: burakHeading,
        seeMore: ({ close }) => {
          return <div onClick={close}>Hello, click to close this.</div>;
        },
      },
      {
        url: "https://i.imgur.com/LBRXhIq.jpg",
        type: "image",
        header: burakHeading,
      },
    ],
  },
  {
    id: 2,
    imageUrl: "/images/posts/usa.png",
    title: "USA",
    stories: [
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
    ],
  },
  {
    id: 3,
    imageUrl: "/images/posts/jaden.jpg",
    title: "Untitled",
    stories: [
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
    ],
  },
  {
    id: 4,
    imageUrl:
      "https://techcrunch.com/wp-content/uploads/2016/07/george-geohot-hotz.jpg",
    title: "Highlight 1",
    stories: [
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
        url: "/testvid.mp4",
        type: "video",
        header: burakHeading,
      },
    ],
  },
  // {
  //   id: 5,
  //   imageUrl:
  //     "https://techcrunch.com/wp-content/uploads/2016/07/george-geohot-hotz.jpg",
  //   title: "Highlight 2",
  //   stories: [
  //     {
  //       url: "https://yt3.googleusercontent.com/ytc/AIdro_ns8epNsONIEqqJ-ICBD55qnXDBgT1HCoiw3FSAPQ=s176-c-k-c0x00ffffff-no-rj",
  //       type: "image",
  //       header: burakHeading,
  //       seeMore: true,
  //       duration: 1500,
  //       seeMore: ({ close }) => {
  //         return <div onClick={close}>Hello, click to close this.</div>;
  //       },
  //     },
  //   ],
  // },
  // Add more highlight objects as needed
];

export default function Page() {
  const [showstory, setShowStory] = useState(false);
  const [highlightsData, setHighlightsData] = useState(highlightData);

  const handleHighlightClick = (index) => {
    const updatedHighlightsData = [...highlightsData];
    updatedHighlightsData[index].showStory = true;
    setHighlightsData(updatedHighlightsData);
  };

  const handleCloseStory = (index) => {
    const updatedHighlightsData = [...highlightsData];
    updatedHighlightsData[index].showStory = false;
    setHighlightsData(updatedHighlightsData);
  };

  useEffect(() => {
    if (highlightsData.some((highlight) => highlight.showStory)) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [highlightsData]);

  return (
    <div className="md:justify-center flex flex-col items-center  ">
      <div className="flex space-x-4 items-center px-2 mb-3">
        <div className="flex space-x-4">
          {highlightsData.map((highlight, index) => (
            <div
              onClick={() => handleHighlightClick(index)}
              key={highlight.id}
              className="space-y-2 justify-center items-center rounded-full flex flex-col"
            >
              <img
                src={highlight.imageUrl}
                alt={highlight.title}
                className="h-16 w-16 rounded-full border-2 border-double border-gray-200"
              />
              <p className="text-sm">{highlight.title}</p>
              {highlight.showStory && (
                <StoryHighlight
                  title={highlight.title}
                  story={highlight.stories}
                  HideStory={() => handleCloseStory(index)}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="md:justify-center flex-col items-center flex px-4">
        {posts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
}
