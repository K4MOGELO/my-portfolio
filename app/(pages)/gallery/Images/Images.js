"use cleint";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import Modal from "@/app/components/gallery/Modal";

import { useLastViewedPhoto } from "@/app/utils/useLastViewedPhoto";

const ImagesPage = () => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef < HTMLAnchorElement > null;

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal
    // to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  // Placeholder images
  const placeholderImages = [
    {
      id: 1,
      url: "https://via.placeholder.com/720x480",
      public_id: "placeholder_1",
      format: "jpg",
      blurDataUrl: "data:image/png;base64,placeholder_blur_data_url_1",
    },
    {
      id: 2,
      url: "https://via.placeholder.com/720x480",
      public_id: "placeholder_2",
      format: "jpg",
      blurDataUrl: "data:image/png;base64,placeholder_blur_data_url_2",
    },
    {
      id: 3,
      url: "https://via.placeholder.com/720x480",
      public_id: "placeholder_3",
      format: "jpg",
      blurDataUrl: "data:image/png;base64,placeholder_blur_data_url_3",
    },
    {
      id: 4,
      url: "https://via.placeholder.com/720x480",
      public_id: "placeholder_4",
      format: "jpg",
      blurDataUrl: "data:image/png;base64,placeholder_blur_data_url_4",
    },
  ];

  // Use placeholder images if no images are provided
  const images = placeholderImages;

  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map(({ id, url, blurDataUrl }) => (
            <Link
              key={id}
              href={`/?photoId=${id}`}
              as={`/p/${id}`}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={url}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default ImagesPage;
