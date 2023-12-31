import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Dispute from "../components/products/Dispute";

const Chat = () => {
  const { user } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [startChat, setStartChat] = useState(false);
  return (
    <div>
      {" "}
      <div className="fixed bottom-3 right-3">
        {isOpen && (
          <div className="formbold-form-wrapper mx-auto w-[400px] rounded-lg border border-[#e0e0e0] bg-white">
            <div className="flex items-center justify-between rounded-t-lg bg-syf py-4 px-9">
              <h3 className="text-xl font-bold text-white">Customer Contact</h3>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setStartChat(false);
                }}
                className="text-white"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  className="fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                  />
                </svg>
              </button>
            </div>

            {startChat ? (
              <>
                <Dispute />
              </>
            ) : (
              <section className="text-gray-100">
                <div className="container mx-auto">
                  <div className="flex flex-col gap-2 p-3">
                    <div className="flex w-full">
                      <div className="flex flex-grow flex-col p-3 space-y-3 rounded shadow sm:p-8 bg-gray-900">
                        <div className="space-y-2">
                          <h4 className="text-2xl font-bold">Chat right now</h4>
                        </div>
                        <p className="text-gray-400">
                          Our messaging assistant can quickly solve many issues
                          or direct you to the right person or place.
                        </p>
                        <button
                          onClick={() => {
                            setStartChat(true);
                          }}
                          type="button"
                          className="inline-block px-5 py-2 font-semibold tracki text-center rounded bg-primary-400 text-gray-900"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                    <div className="flex w-full">
                      <div className="flex flex-grow flex-col p-3 space-y-3 rounded shadow sm:p-8 bg-gray-900">
                        <div className="space-y-2">
                          <h4 className="text-2xl font-bold">
                            Have us call you
                          </h4>
                        </div>
                        <p className="">
                          We&apos;ll first get a few details about your issue
                          and then someone will call you right away.
                        </p>

                        <button
                          onClick={() => {
                            setStartChat(true);
                          }}
                          type="button"
                          className="inline-block  px-5 py-2 font-bold tracki text-center rounded bg-gray-800 text-primary-400"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        )}
        <div className="mx-auto mt-4 flex max-w-[550px] items-center justify-end space-x-5">
          <button
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-syf text-white"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <span className="cross-icon hidden">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-28 w-28"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="chat-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
