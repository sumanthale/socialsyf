/* eslint-disable react/prop-types */
import {
  SfDrawer,
  SfButton,
  SfIconClose,
  useTrapFocus,
} from "@storefront-ui/react";
import { useRef } from "react";
import { Transition } from "react-transition-group";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function Cart({ setOpen, open }) {
  const placement = "right";
  const nodeRef = useRef(null);
  const drawerRef = useRef(null);
  const navigate = useNavigate();
  useTrapFocus(drawerRef, { activeState: open });

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[990] h-screen w-full bg-black opacity-60"></div>
      )}{" "}
      <Transition ref={nodeRef} in={open} timeout={300}>
        {(state) => (
          <SfDrawer
            ref={drawerRef}
            open
            placement={placement}
            onClose={() => setOpen(false)}
            className={classNames(
              "z-[991] bg-neutral-50 border border-gray-300 max-w-[370px] duration-500 transition ease-in-out min-w-[450px]",
              {
                "translate-x-0": state === "entered" && placement === "left",
                "-translate-x-full":
                  (state === "entering" || state === "exited") &&
                  placement === "left",
                "-translate-x-0": state === "entered" && placement === "right",
                "translate-x-full":
                  (state === "entering" || state === "exited") &&
                  placement === "right",
              }
            )}
          >
            <header className="flex items-center justify-between px-10 py-6 border-b border-gray-200">
              <h1 className="text-slate-800 text-2xl font-bold ">
                Shopping Cart (1) ✨
              </h1>
              <SfButton
                square
                variant="tertiary"
                onClick={() => {
                  setOpen(!open);
                }}
                className=""
              >
                <SfIconClose color="black" />
              </SfButton>
            </header>
            <div className="p-2 h-[80vh] ">
              <ul className="">
                <li className="flex flex-col space-y-3  text-left sm:flex-row sm:space-x-5 sm:space-y-0 px-2">
                  <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 w-full mx-auto border border-white bg-white">
                    <div className="w-full md:w-1/3 bg-white grid place-items-center">
                      <img
                        src="https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766176/woods-chilkoot-70l-038ab86d-5b8f-463a-9018-a426781d4697-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom"
                        alt="tailwind logo"
                        className="rounded-xl h-28"
                      />
                    </div>
                    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2">
                      <div className="flex w-full flex-col px-4">
                        <span className="text-sm line-clamp-1 text-black">
                          Woods 34L Men&apos;s Hiking Backpack, Cetacean Green
                        </span>
                        <span className="float-right text-gray-400 text-sm">
                          Unit Price : $1,410.77
                        </span>
                      </div>
                      <div className="flex justify-between item-center mt-1">
                        <div className="mr-auto ml-4 flex h-8 items-stretch text-gray-600">
                          <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                            -
                          </button>
                          <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                            1
                          </div>
                          <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                            +
                          </button>
                        </div>

                        <div className="px-3 py-1  text-sm font-bold  flex items-center gap-x-1">
                          $12.30
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full grid place-items-center">
              <SfButton
                className="w-5/6 py-3 !bg-black"
                size="sm"
                onClick={() => {
                  setOpen(false);
                  navigate("/checkout");
                }}
              >
                Proceed To Checkout
              </SfButton>
            </div>
          </SfDrawer>
        )}
      </Transition>
    </>
  );
}
// "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png";
