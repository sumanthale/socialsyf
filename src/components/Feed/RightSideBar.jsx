import { useState } from "react";
import FeedBanner from "./FeedBanner";
import ReactPlayer from "react-player";

const RightSideBar = () => {
  const [play, setPlay] = useState(true);

  return (
    <div className="fixed">
      <FeedBanner />

      <div
        className="cursor-pointer relative"
        onClick={() => {
          setPlay(!play);
        }}
      >
        <h1 className="font-semibold ml-2 text-center">
          Social SYF Live | Watch & Shop LIVE
        </h1>
        <div className="persistent--Pt2B3 statusBadge--3R5oH badges_liveViewerBadge__3kwly w-full flex  top-12 left-3 absolute">
          <div
            className="badges_smallBadge__sJpdq badges_badgeCommon__3UacB badges_liveBadge__3Xs9Q badges_smallBadge__sJpdq"
            data-testid="BaseBadge"
          >
            <span>LIVE</span>
          </div>
          <div className="badges_badgeCommon__3UacB badges_grayBadge__-5337 badges_smallViewerLiveBadge__AGSaa">
            <svg
              width="14px"
              height="9.882352941176471px"
              viewBox="0 0 17 12"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              data-testid="LiveViewersImage"
              role="image"
              aria-labelledby="eyeIcon"
            >
              <title id="eyeIcon">Live viewers eye icon</title>
              <g
                id="Symbols"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
              >
                <g
                  id="Badge-/-Live-and-Viewers-/-Basic"
                  transform="translate(-16.000000, -6.000000)"
                  stroke="#FFFFFF"
                  width="1.42857143"
                >
                  <g id="Group" transform="translate(17.000000, 0.000000)">
                    <g id="icon-eye" transform="translate(0.000000, 7.000000)">
                      <path
                        d="M7.14285714,0 C3.83276267,0 1.15725752,2.10293354 0,5 C1.11057452,7.99116748 3.76515522,10 7.14285714,10 C10.5257424,10 13.3343195,7.99839757 14.4411567,5 C13.2832223,2.10435379 10.451929,0 7.14285714,0 Z"
                        id="Path"
                      ></path>
                      <circle
                        id="Oval"
                        cx="7.14285714"
                        cy="5"
                        r="2.14285714"
                      ></circle>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <div
              data-testid="LiveViewersCount"
              className="badges_viewerCountText__248Qs"
            >
              656
            </div>
          </div>
        </div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5DjN1_jMFJc"
          playing={play}
          autoPlay
          loop
          muted
          height={280}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default RightSideBar;
