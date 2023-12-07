import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex items-center justify-center fixed w-[12%]">
      <div className="flex flex-col items-center w-full h-full overflow-hidden text-black  rounded">
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 ">
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-syf"
              to="/"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Home</span>
            </Link>

            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-syf bg-syf"
              to="/shop"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Shop</span>
            </Link>
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 hover:bg-syf rounded"
              to="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Offers</span>
            </Link>
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-syf"
              to="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>ionicons-v5-e</title>
                  <path
                    d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z"
                    style={{
                      fill: "none",
                      stroke: "#000000",
                      strokeMiterlimit: "10",
                      strokeWidth: "32px",
                    }}
                  ></path>
                  <path
                    d="M200,202.29s.84-17.5,19.57-32.57C230.68,160.77,244,158.18,256,158c10.93-.14,20.69,1.67,26.53,4.45,10,4.76,29.47,16.38,29.47,41.09,0,26-17,37.81-36.37,50.8S251,281.43,251,296"
                    style={{
                      fill: "none",
                      stroke: "#000000",
                      strokeLinecap: "round",
                      strokeMiterlimit: "10",
                      strokeWidth: "28px",
                    }}
                  ></path>
                  <circle cx="250" cy="348" r="20"></circle>
                </g>
              </svg>
              <span className="ml-2 text-sm font-medium">Help Center</span>
            </Link>
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-syf"
              to="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Settings</span>
            </Link>
            <Link
              className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-syf"
              to="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                viewBox="0 0 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>about</title>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="about-white"
                      fill="#000000"
                      transform="translate(42.666667, 42.666667)"
                    >
                      {" "}
                      <path
                        d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z"
                        id="Shape"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span className="ml-2 text-sm font-medium">About Us</span>
              {/* <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
