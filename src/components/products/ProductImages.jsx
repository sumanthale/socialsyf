import { useRef, useState } from "react";
import { useIntersection } from "react-use";
import {
  SfScrollable,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
} from "@storefront-ui/react";
import classNames from "classnames";
import ReactPlayer from "react-player";
import ReviewVid from "../../assets/review2.mp4";
// import ReviewThumbNail from "../../assets/review_thumbnail.png";

const withBase = (filepath) =>
  `https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/gallery/${filepath}`;

const images = [
  {
    type: "img",
    imageSrc: withBase("gallery_1.png"),
    imageThumbSrc: withBase("gallery_1_thumb.png"),
    alt: "backpack1",
  },
  {
    type: "img",
    imageSrc: withBase("gallery_2.png"),
    imageThumbSrc: withBase("gallery_2_thumb.png"),
    alt: "backpack2",
  },
  {
    type: "img",
    imageSrc: withBase("gallery_3.png"),
    imageThumbSrc: withBase("gallery_3_thumb.png"),
    alt: "backpack3",
  },
  {
    type: "img",
    imageSrc: withBase("gallery_4.png"),
    imageThumbSrc: withBase("gallery_4_thumb.png"),
    alt: "backpack4",
  },
  {
    type: "img",
    imageSrc: withBase("gallery_5.png"),
    imageThumbSrc: withBase("gallery_5_thumb.png"),
    alt: "backpack5",
  },
  {
    type: "img",
    imageSrc: withBase("gallery_6.png"),
    imageThumbSrc: withBase("gallery_6_thumb.png"),
    alt: "backpack6",
  },
  {
    type: "img",
    imageSrc: withBase("gallery_7.png"),
    imageThumbSrc: withBase("gallery_7_thumb.png"),
    alt: "backpack7",
  },
  {
    type: "img",
    imageSrc: withBase("gallery_8.png"),
    imageThumbSrc: withBase("gallery_8_thumb.png"),
    alt: "backpack8",
  },
  {
    type: "img",
    imageSrc: withBase("gallery_9.png"),
    imageThumbSrc: withBase("gallery_9_thumb.png"),
    alt: "backpack9",
  },
  {
    type: "img",
    imageSrc: withBase("gallery_10.png"),
    imageThumbSrc: withBase("gallery_10_thumb.png"),
    alt: "backpack10",
  },
  {
    type: "img",
    imageSrc: withBase("gallery_11.png"),
    imageThumbSrc: withBase("gallery_11_thumb.png"),
    alt: "backpack11",
  },
  {
    type: "video",
    imageSrc: ReviewVid,
    imageThumbSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdla4fqpL_Ah6AVh_wiMpiW-aiTcgWE_gDQKprUhISw-MIF_PqOCQe7OhVR6_v-j2lXaw&usqp=CAU",
    alt: "backpack12",
  },
];

export default function ProductImages() {
  const lastThumbRef = useRef(null);
  const thumbsRef = useRef(null);
  const firstThumbRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const firstThumbVisible = useIntersection(firstThumbRef, {
    root: thumbsRef.current,
    rootMargin: "0px",
    threshold: 1,
  });

  const lastThumbVisible = useIntersection(lastThumbRef, {
    root: thumbsRef.current,
    rootMargin: "0px",
    threshold: 1,
  });

  const onDragged = (event) => {
    if (event.swipeRight && activeIndex > 0) {
      setActiveIndex((currentActiveIndex) => currentActiveIndex - 1);
    } else if (event.swipeLeft && activeIndex < images.length - 1) {
      setActiveIndex((currentActiveIndex) => currentActiveIndex + 1);
    }
  };

  return (
    <div className="relative flex w-full max-h-[600px] aspect-[4/3] mt-28">
      <SfScrollable
        ref={thumbsRef}
        className="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        direction="vertical"
        activeIndex={activeIndex}
        prevDisabled={activeIndex === 0}
        nextDisabled={activeIndex === images.length - 1}
        slotPreviousButton={
          <SfButton
            className={classNames(
              "absolute !rounded-full z-10 top-4 rotate-90 bg-white",
              {
                hidden: firstThumbVisible?.isIntersecting,
              }
            )}
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronLeft size="sm" />}
          />
        }
        slotNextButton={
          <SfButton
            className={classNames(
              "absolute !rounded-full z-10 bottom-4 rotate-90 bg-white",
              {
                hidden: lastThumbVisible?.isIntersecting,
              }
            )}
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronRight size="sm" />}
          />
        }
      >
        {images.map(({ imageThumbSrc, alt }, index, thumbsArray) => (
          <button
            // eslint-disable-next-line no-nested-ternary
            ref={
              index === thumbsArray.length - 1
                ? lastThumbRef
                : index === 0
                ? firstThumbRef
                : null
            }
            type="button"
            aria-label={alt}
            aria-current={activeIndex === index}
            key={`${alt}-${index}-thumbnail`}
            className={classNames(
              "md:w-[78px] md:h-auto relative shrink-0 pb-1 mx-4 -mb-2 border-b-4 snap-center cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0",
              {
                "border-primary-700": activeIndex === index,
                "border-transparent": activeIndex !== index,
              }
            )}
            // onMouseOver={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            <img
              alt={alt}
              className="border border-neutral-200"
              width="78"
              height="78"
              src={imageThumbSrc}
            />
          </button>
        ))}
      </SfScrollable>
      <SfScrollable
        className="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        activeIndex={activeIndex}
        direction="vertical"
        wrapperClassName="h-full m-auto"
        buttonsPlacement="none"
        isActiveIndexCentered
        drag={{ containerWidth: true }}
        onDragEnd={onDragged}
      >
        {images.map(({ type, imageSrc, alt }, index) => (
          <div
            key={`${alt}-${index}`}
            className="flex justify-center h-full basis-full shrink-0 grow snap-center"
          >
            {type === "img" ? (
              <img
                aria-label={alt}
                aria-hidden={activeIndex !== index}
                className="object-contain w-auto h-full"
                alt={alt}
                src={imageSrc}
              />
            ) : (
              <ReactPlayer
                url={imageSrc}
                playing={true}
                autoPlay
                loop
                muted
                height={"100%"}
                width={"100%"}
              />
            )}
          </div>
        ))}
      </SfScrollable>
    </div>
  );
}
