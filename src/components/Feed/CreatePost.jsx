/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.getElementById("body").style.overflow = "hidden";
    } else {
      document.getElementById("body").style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div className="md:p-6 shadow-lg bg-gray-50 rounded-lg ">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              alt=""
              className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
              src={user?.url}
            />
          </div>
          <div
            className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-200 rounded-full cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <h3 className="md:text-lg text-gray-500">
              Whats on your mind, {user?.name} ?
            </h3>
          </div>
        </div>
        <hr className="mt-3 mb-3" />
        <div className="grid grid-cols-4 gap-1">
          <FeatureButton
            text="Live video"
            imageBgPosition="0px 0px"
            image="	https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"
          />
          <FeatureButton
            text="Photo/Video"
            imageBgPosition="0px -225px"
            image={
              "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
            }
          />
          <FeatureButton
            text="Feeling/Activity"
            imageBgPosition="0px -25px"
            image={
              "	https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"
            }
          />
          <FeatureButton
            text="Interest"
            imageBgPosition="0px -25px"
            image={
              "https://img.icons8.com/?size=256&id=5GRnl7omKlp3&format=png"
            }
          />
        </div>
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-[998] h-screen w-full bg-black opacity-70"></div>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            }}
            className="z-[999] bg-white rounded-lg"
          >
            <div className="flex items-center justify-center z-[997]">
              <div className="relative w-96 rounded-lg">
                <div className="flex justify-center relative border-b">
                  <div className=" py-4 text-xl font-bold">Create Post</div>
                  <div className="absolute right-0 p-2">
                    <button
                      className="bg-gray-200 p-2 hover:bg-gray-300 rounded-full text-gray-500"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="my-2 px-4 flex items-center space-x-2">
                    <div>
                      <h6 className="font-bold text-sm">{user?.name}</h6>

                      <div className="flex items-center space-x-2 bg-gray-300 font-bold px-2 py-1 rounded-lg cursor-pointer my-1">
                        <i className="fa fa-group text-sm"></i>
                        <span className="text-sm">Friends</span>
                        <i
                          style={{
                            backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eU_DXmSX2-Q.png")`,
                            backgroundPosition: "-60px -166px",
                            backgroundSize: "189px 183px",
                          }}
                          className="w-3 h-3 bg-no-repeat inline-block"
                        ></i>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-2">
                    <div className="mb-4">
                      <textarea
                        className="w-full placeholder-gray-700 text-xl focus:outline-none"
                        rows="6"
                        placeholder="What`s on your mind ?"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-9"
                          src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                          alt="image pallete"
                        />
                      </div>
                      <FeatureButton
                        text="Photo/Video"
                        imageBgPosition="0px -225px"
                        image={
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
                        }
                      />
                    </div>
                  </div>
                  <div className="my-2 px-4">
                    <button
                      className="text-center w-full py-2 rounded-lg bg-blue-500 text-white"
                      disabled
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreatePost;

function FeatureButton({ text, image }) {
  return (
    <button className="px-4 py-2 flex items-center  justify-center space-x-2 hover:bg-gray-200 rounded-lg">
      <img height="24" width="24" alt="" src={image} />
      <span className="text-gray-600 font-medium hidden md:block">{text}</span>
    </button>
  );
}
