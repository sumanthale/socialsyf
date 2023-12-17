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

// const withBase = (filepath) =>
//   `https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/gallery/${filepath}`;

const images = [
  {
    type: "img",
    imageSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766177/woods-chilkoot-55l-529e2569-9cfc-4047-9996-83ea3d99cd21.png?imdensity=1&imwidth=1244&impolicy=gZoom",
    imageThumbSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766177/woods-chilkoot-55l-529e2569-9cfc-4047-9996-83ea3d99cd21.png?imdensity=1&imwidth=1244&impolicy=gZoom",
    alt: "backpack1",
  },
  {
    type: "img",
    imageSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766177/woods-chilkoot-55l-da972d30-9974-4c48-97b4-257613840560-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
    imageThumbSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766177/woods-chilkoot-55l-da972d30-9974-4c48-97b4-257613840560-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
    alt: "backpack2",
  },
  {
    type: "video",
    imageSrc: ReviewVid,
    imageThumbSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdla4fqpL_Ah6AVh_wiMpiW-aiTcgWE_gDQKprUhISw-MIF_PqOCQe7OhVR6_v-j2lXaw&usqp=CAU",
    alt: "backpack12",
  },
  {
    type: "img",
    imageSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766177/woods-chilkoot-55l-5587f685-ad28-41c2-8f93-2a90d60416a4.png?imdensity=1&imwidth=1244&impolicy=gZoom",
    imageThumbSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766177/woods-chilkoot-55l-5587f685-ad28-41c2-8f93-2a90d60416a4.png?imdensity=1&imwidth=1244&impolicy=gZoom",
    alt: "backpack3",
  },
  {
    type: "img",
    imageSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766177/woods-chilkoot-55l-4e1b52b5-5c2a-4bf9-b21d-d8a02709d813-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
    imageThumbSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766177/woods-chilkoot-55l-4e1b52b5-5c2a-4bf9-b21d-d8a02709d813-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
    alt: "backpack4",
  },
  {
    type: "img",
    imageSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766177/woods-chilkoot-55l-d4092338-b1cf-4ead-b37b-b02911bdd9be.png?imdensity=1&imwidth=1244&impolicy=gZoom",
    imageThumbSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766177/woods-chilkoot-55l-d4092338-b1cf-4ead-b37b-b02911bdd9be.png?imdensity=1&imwidth=1244&impolicy=gZoom",
    alt: "backpack5",
  },
  {
    type: "img",
    imageSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766178/woods-chilkoot-40l-19b46472-e5a2-45f2-a6ce-c9f764b9ea0b-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
    imageThumbSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766178/woods-chilkoot-40l-19b46472-e5a2-45f2-a6ce-c9f764b9ea0b-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
    alt: "backpack6",
  },
  {
    type: "img",
    imageSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766178/woods-chilkoot-40l-03ac52fa-73eb-486c-8730-a1c0fe3f43cf-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
    imageThumbSrc:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766178/woods-chilkoot-40l-03ac52fa-73eb-486c-8730-a1c0fe3f43cf-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
    alt: "backpack7",
  },
];
// const images = [
//   {
//     type: "img",
//     imageSrc: withBase("gallery_1.png"),
//     imageThumbSrc: withBase("gallery_1_thumb.png"),
//     alt: "backpack1",
//   },
//   {
//     type: "img",
//     imageSrc: withBase("gallery_2.png"),
//     imageThumbSrc: withBase("gallery_2_thumb.png"),
//     alt: "backpack2",
//   },
//   {
//     type: "img",
//     imageSrc: withBase("gallery_3.png"),
//     imageThumbSrc: withBase("gallery_3_thumb.png"),
//     alt: "backpack3",
//   },
//   {
//     type: "img",
//     imageSrc: withBase("gallery_4.png"),
//     imageThumbSrc: withBase("gallery_4_thumb.png"),
//     alt: "backpack4",
//   },
//   {
//     type: "img",
//     imageSrc: withBase("gallery_5.png"),
//     imageThumbSrc: withBase("gallery_5_thumb.png"),
//     alt: "backpack5",
//   },
//   {
//     type: "img",
//     imageSrc: withBase("gallery_6.png"),
//     imageThumbSrc: withBase("gallery_6_thumb.png"),
//     alt: "backpack6",
//   },
//   {
//     type: "img",
//     imageSrc: withBase("gallery_7.png"),
//     imageThumbSrc: withBase("gallery_7_thumb.png"),
//     alt: "backpack7",
//   },
//   {
//     type: "img",
//     imageSrc: withBase("gallery_8.png"),
//     imageThumbSrc: withBase("gallery_8_thumb.png"),
//     alt: "backpack8",
//   },
//   {
//     type: "img",
//     imageSrc: withBase("gallery_9.png"),
//     imageThumbSrc: withBase("gallery_9_thumb.png"),
//     alt: "backpack9",
//   },
//   {
//     type: "img",
//     imageSrc: withBase("gallery_10.png"),
//     imageThumbSrc: withBase("gallery_10_thumb.png"),
//     alt: "backpack10",
//   },
//   {
//     type: "img",
//     imageSrc: withBase("gallery_11.png"),
//     imageThumbSrc: withBase("gallery_11_thumb.png"),
//     alt: "backpack11",
//   },
//   {
//     type: "video",
//     imageSrc: ReviewVid,
//     imageThumbSrc:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdla4fqpL_Ah6AVh_wiMpiW-aiTcgWE_gDQKprUhISw-MIF_PqOCQe7OhVR6_v-j2lXaw&usqp=CAU",
//     alt: "backpack12",
//   },
// ];

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
                url={
                  "https://rr8---sn-gwpa-cagz.googlevideo.com/videoplayback?expire=1702831399&ei=x9B-ZeLjBfWzsfIP4MiY8A4&ip=191.96.106.182&id=o-ADBHqKqq4LULZsAcaNFbkprrfR9ZV_TgeW0ya6cFc_aR&itag=313&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&spc=UWF9f8wsEl1Oc7wiaD29h6VolP96cSw&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=646623808&dur=339.973&lmt=1670102623663253&keepalive=yes&fexp=24007246,24350017&beids=24350017&c=ANDROID&txp=5432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAM_EKZWp1xIXqvkZAkt9M4-qzWtRSAjev8OKhfJzkIQ4AiBgpdox6DFs7Q7TBQn601y2kTRixwK8qJ8Cj2hZ7O1IjA%3D%3D&redirect_counter=1&rm=sn-a5me7k7e&req_id=87297a2d55d5a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=PJ&mip=49.47.232.223&mm=31&mn=sn-gwpa-cagz&ms=au&mt=1702809473&mv=m&mvi=8&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIgGH1OqC-js7HY3oXw6OVUeHISPluN0gNnHdWplb9dpOECIQCbU21RG6TcVvtwCrQnevwCZhytUu8MVZsq3M-i4Q6klQ%3D%3D"
                }
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
//https://www.youtube.com/watch?v=Ua5Yj5GKEhc

//https://ssyoutube.com/en748JK/
