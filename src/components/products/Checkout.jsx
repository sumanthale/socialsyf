import { SfButton, SfLink, SfRadio } from "@storefront-ui/react";
import OrderSummary from "./OrderSummary";
import { useRef, useState } from "react";
import classNames from "classnames";
import StripeCheckout from "react-stripe-checkout";
import dayjs from "dayjs";
import SuccessGif from "../../assets/success.gif";

function getPreviousIndex(current, elements) {
  for (let index = current - 1; index >= 0; index -= 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  for (let index = elements.length - 1; index > -1; index -= 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  return current;
}

function getNextIndex(current, elements) {
  for (let index = current + 1; index < elements.length; index += 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  for (let index = 0; index < elements.length; index += 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  return current;
}

const tabs = [{ label: "Credit Card" }, { label: "Pay Later" }];

export default function Checkout() {
  const tablistRef = useRef(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const isActive = (tab) => activeTab.label === tab.label;
  const tabId = (label) => `${label}-tab`;
  const panelId = (label) => `${label}-panel`;
  const [payment, setPayment] = useState(false);
  const priceForStripe = 1375.77 * 100;

  navigator.clipboard.writeText("4242 4242 4242 4242");
  const handleKeyDown = (event) => {
    const elements = Array.from(
      tablistRef.current?.querySelectorAll <
        HTMLButtonElement >
        '[role="tab"]' || []
    );
    const current = elements.findIndex((el) => event.currentTarget === el);
    const nextTab = getNextIndex(current, elements);
    const prevTab = getPreviousIndex(current, elements);
    const lastTab = elements.length - 1;

    const goTo = (index) => () => {
      event.stopPropagation();
      event.preventDefault();
      const goToElement = elements[index];
      goToElement.focus();
      goToElement.click();
      goToElement.scrollIntoView();
    };

    const interactionsMap = new Map([
      ["ArrowLeft", goTo(prevTab)],
      ["ArrowRight", goTo(nextTab)],
      ["Home", goTo(0)],
      ["End", goTo(lastTab)],
    ]);

    const interaction = interactionsMap.get(event.key);
    interaction?.();
  };
  const [checkedState, setCheckedState] = useState("");
  const publishableKey =
    "pk_test_51Ht8t0AUGh2stU4g2NhzjhmzwmSJ6Mt3ghnJAbE6L6xGm0BpbgVQaids6bI9ZboSENHhYe87U2VVsai87mR3QdeJ00VoxGi0Ho";
  const onToken = () => {
    setPayment(true);
  };

  return (
    <>
      {payment === false ? (
        <>
          <div className="p-4 bg-white rounded text-gray-900 flex w-full pb-5 border-b-2">
            <div className="w-full">
              <div className="flex  items-center relative">
                <img
                  src="https://www.synchrony.com/syc/img/2023_synchrony_basic_logo.svg"
                  alt="card img"
                  className="absolute"
                />
                <h2 className="font-bold mx-auto text-2xl">
                  Checkout ( <span className="text-syf">1 item</span> )
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-1 bg-gray-200">
            <div className="col-span-7 p-4">
              <div className="bg-white">
                <div className="flex justify-between items-center p-4 border-b">
                  <h1 className="font-bold">SHIPPING ADDRESS</h1>
                  <SfButton size="sm">EDIT</SfButton>
                </div>
                <div className="flex justify-between items-center p-4 border-b">
                  <div>
                    <h1 className="font-semibold text-black tracking-wider mb-2">
                      YOUR CONTACT INFO
                    </h1>
                    <p className="w-48 text-sm leading-5 text-black mb-1 ">
                      sumanthale@gmail.com
                    </p>
                    <p className="w-48 text-sm leading-5 text-black mb-1 ">
                      +1 475-444-3434
                    </p>
                  </div>
                  <div>
                    <h1 className="font-semibold text-gray-500 tracking-wider text-base mb-2">
                      LOCATION
                    </h1>
                    <p className="w-48 text-sm leading-5 text-black mb-1 ">
                      180 North King Street, Northhampton MA 1060
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white my-4">
                <div className="flex justify-between items-center p-4 border-b">
                  <h1 className="font-bold">PAYMENT</h1>
                </div>
                <div className="  p-4 border-b">
                  <div
                    ref={tablistRef}
                    role="tablist"
                    aria-label="Select tab"
                    aria-orientation="horizontal"
                    className="flex gap-2 border-b border-b-neutral-200 overflow-x-auto  pb-2"
                  >
                    {tabs.map((tab) => (
                      <button
                        key={tab.label}
                        type="button"
                        role="tab"
                        id={tabId(tab.label)}
                        aria-controls={panelId(tab.label)}
                        aria-selected={isActive(tab)}
                        disabled={tab.disabled}
                        tabIndex={isActive(tab) ? 0 : -1}
                        onClick={() => setActiveTab(tab)}
                        onKeyDown={handleKeyDown}
                        className={classNames(
                          "px-4 py-2 rounded-md font-medium whitespace-nowrap text-neutral-500 hover:enabled:bg-black hover:enabled:text-white active:enabled:bg-black active:enabled:text-white focus-visible:outline focus-visible:-outline-offset-2 focus-visible:shadow-[inset_0_0_0_4px_rgb(255,255,255)]",
                          { "!bg-black !text-white": isActive(tab) }
                        )}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {tabs.map((tab) => (
                    <div
                      key={tab.label}
                      role="tabpanel"
                      id={panelId(tab.label)}
                      aria-labelledby={tabId(tab.label)}
                      className=""
                    >
                      {isActive(tab) && tab.label === "Credit Card" && (
                        <div className="-mt-4 p-4">
                          <label className="flex items-center mt-4 cursor-pointer">
                            <SfRadio
                              name={"thename"}
                              value={"value-1"}
                              checked={checkedState === "value-1"}
                              onChange={(event) => {
                                setCheckedState(event.target.value);
                              }}
                            />
                            <span className="ml-2 text-xs font-normal leading-6 font-body">
                              <img
                                src={
                                  "https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg"
                                }
                                alt=""
                                className="h-6"
                              />
                            </span>
                          </label>
                          <label className="flex items-center mt-4 cursor-pointer">
                            <SfRadio
                              name={"thename"}
                              value={"value-2"}
                              checked={checkedState === "value-2"}
                              onChange={(event) => {
                                setCheckedState(event.target.value);
                              }}
                            />
                            <span className="-ml-2 text-xs font-normal leading-6 font-body">
                              <img
                                src={
                                  "https://business.afterpay.com/rs/539-RJA-633/images/AP_logo_lockup_6328x2204_blackclear_png.png"
                                }
                                alt=""
                                className="h-11"
                              />
                            </span>
                          </label>
                          <label className="flex items-center mt-4 cursor-pointer">
                            <SfRadio
                              name={"thename"}
                              value={"value-3"}
                              checked={checkedState === "value-3"}
                              onChange={(event) => {
                                setCheckedState(event.target.value);
                              }}
                            />

                            <span className="ml-2 text-base font-semibold leading-6 font-body">
                              Credit Card
                            </span>
                          </label>

                          <h1 className="mt-6 font-semibold">
                            Buy Now. Pay Later.
                          </h1>
                          <h1 className="mb-2 font-semibold">
                            Monthly Installment Loan.
                          </h1>
                          <ul className="list-disc ml-5 mb-4">
                            <li>No hidden fees</li>
                            <li>Predictable montly payments</li>
                            <li>Instant decision</li>
                            <li>No Initial Payments</li>
                            <li>No ongoing commitment</li>
                          </ul>

                          {checkedState !== "" && (
                            <>
                              {" "}
                              <form id="payment-form"></form>
                              <StripeCheckout
                                label="Place Order and Pay"
                                name="SYF Marketplace"
                                description={`Your total is $1,375.77`}
                                amount={priceForStripe}
                                panelLabel="Pay Now"
                                token={onToken}
                                email={"sumanthale@gmail.com"}
                                stripeKey={publishableKey}
                                allowRememberMe
                              ></StripeCheckout>
                              <div className="text-sm mt-4 text-center">
                                By placing my order, you agree to our{" "}
                                <SfLink href="#">Terms and Conditions</SfLink>{" "}
                                and our{" "}
                                <SfLink href="#">Privacy Policy.</SfLink>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                      {isActive(tab) && tab.label === "Pay Later" && (
                        <>
                          <div className="bg-[#eee] p-3 mb-4">
                            <h1 className="font-semibold">
                              Buy Now. Pay Later.
                            </h1>
                            <h1 className="mb-2 font-semibold">
                              Monthly Installment Loan.
                            </h1>
                            <ul className="list-disc ml-5 mb-4">
                              <li>No hidden fees</li>
                              <li>Predictable montly payments</li>
                              <li>Instant decision</li>
                              <li>No Initial Payments</li>
                              <li>No ongoing commitment</li>
                            </ul>
                            <p>
                              Synchronly Set Pay is chaning its name to
                              Synchrony Pay Later. You may see either name as we
                              make the transision
                            </p>
                          </div>
                          <button
                            type="button"
                            className={classNames(
                              "px-4 py-2  rounded-md font-medium whitespace-nowrap  hover:enabled:bg-black hover:enabled:text-white active:enabled:bg-black active:enabled:text-white focus-visible:outline focus-visible:-outline-offset-2 focus-visible:shadow-[inset_0_0_0_4px_rgb(255,255,255)] !bg-black !text-white"
                            )}
                          >
                            Apply for Pay Later & Place Order.
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <OrderSummary />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full p-6 mx-auto h-[87.8vh]">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full max-w-full px-3 mx-auto lg:flex-0 lg:w-10/12 shrink-0">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
                    <div className="flex items-center justify-between">
                      <div className="flex justify-start item-start space-y-2 flex-col">
                        <h1 className="flex items-center text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                          Order #13432{" "}
                          <span className="text-green-500 mx-2">
                            Successfully Placed
                          </span>
                          <img src={SuccessGif} className="" alt="order" />
                        </h1>
                        <p className="text-sm  font-medium leading-6 text-gray-600 ">
                          {dayjs().format("ddd MMM D YYYY [at] h:mm A")}
                        </p>
                      </div>
                      <a
                        href="javascript:;"
                        className="inline-block px-6 py-3 mb-0 ml-auto font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-slate-600 to-slate-300 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                      >
                        Invoice
                      </a>
                    </div>
                  </div>
                  <div className="flex-auto p-4 pt-0">
                    <hr className="h-px mt-0 mb-6 bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full max-w-full px-3 flex-0 md:w-6/12">
                        <div className="flex">
                          <div>
                            <img
                              className="mr-4 w-28 h-28 text-base ease-soft-in-out inline-flex items-center justify-center rounded-xl text-white transition-all duration-200"
                              src="https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766176/woods-chilkoot-70l-038ab86d-5b8f-463a-9018-a426781d4697-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom"
                              alt="product image"
                            />
                          </div>
                          <div>
                            <h6 className="mt-2 mb-0 dark:text-white text-lg">
                              Woods 34L Men&apos;s Hiking Backpack
                            </h6>
                            <p className="mb-4 leading-normal text-sm">
                              Order will be delivered by 20th December.
                            </p>
                            <span className="py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap bg-gradient-to-tl from-green-600 to-lime-400 text-center align-baseline font-bold uppercase leading-none text-white">
                              ORDER PLACED
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 my-auto text-right flex-0 md:w-6/12">
                        <a
                          href="javascript:;"
                          className="inline-block px-6 py-3 mb-4 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-blue-600 to-cyan-400 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                        >
                          Contact Us
                        </a>
                        <p className="mt-2 mb-0 leading-normal text-sm">
                          Do you like the product? Leave us a review{" "}
                          <a className="dark:text-lime-500" href="javascript:;">
                            here
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                    <hr className="h-px mt-0 mb-6 bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full max-w-full px-3 lg:w-3/12 flex-0 md:w-6/12">
                        <h6 className="mb-4 dark:text-white">Track order</h6>
                        <div className="relative before:left-4 before:-ml-px before:content-[''] before:absolute before:top-0 before:h-full before:border-r-2 before:border-solid before:border-r-slate-100 ">
                          <div className="relative mb-4">
                            <span className="left-4 absolute inline-flex items-center justify-center w-6.5 h-6.5 rounded-circle bg-white text-center -translate-x-1/2 text-base font-semibold z-1">
                              <i className="fa leading-none fa-bell text-slate-400 leading-pro"></i>
                            </span>
                            <div className="ml-12 pt-1.4 relative -top-1.5 w-auto lg:max-w-120">
                              <h6 className="mb-0 font-semibold leading-normal dark:text-white text-sm text-black">
                                Order received
                              </h6>
                              <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                                {dayjs().format("DD MMM h:mm A")}
                              </p>
                            </div>
                          </div>
                          <div className="relative mb-4">
                            <span className="left-4 absolute inline-flex items-center justify-center w-6.5 h-6.5 rounded-circle bg-white text-center -translate-x-1/2 text-base font-semibold z-1">
                              <i className="fa leading-none fa-check text-lime-500 leading-pro"></i>{" "}
                            </span>
                            <div className="ml-12 pt-1.4 relative -top-1.5 w-auto lg:max-w-120 float-none">
                              <h6 className="mb-0 font-semibold leading-normal dark:text-white text-sm text-black">
                                Generate order id <br /> #13432
                              </h6>
                              <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                                {dayjs()
                                  .add(1, "minute")
                                  .format("DD MMM h:mm A")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 flex-0 md:w-6/12 lg:w-5/12">
                        <h6 className="mb-4 dark:text-white">
                          Payment details
                        </h6>
                        <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-300 bg-clip-border dark:border-slate-700">
                          <img
                            className="mb-0 mr-4 w-1/10 h-4"
                            src="https://demos.creative-tim.com/soft-ui-dashboard-pro-tailwind/assets/img/logos/mastercard.png"
                            alt="logo"
                          />
                          <h6 className="mb-0 dark:text-white">
                            ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;4242
                          </h6>
                          <button
                            type="button"
                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 mb-0 ml-auto flex cursor-pointer items-center justify-center border border-solid border-slate-400 bg-transparent text-center align-middle font-bold text-slate-400 shadow-none transition-all hover:bg-transparent hover:text-slate-400 hover:opacity-75 hover:shadow-none active:bg-slate-400 active:text-black hover:active:bg-transparent hover:active:text-slate-400 hover:active:opacity-75 hover:active:shadow-none rounded"
                          >
                            <i
                              className="fas fa-info text-3xs"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                        <h6 className="mt-6 mb-4 dark:text-white">
                          Billing Information{" "}
                        </h6>
                        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                          <li className="relative flex p-6 mb-2 rounded-xl bg-[#eee]  text-inherit">
                            <div className="flex flex-col">
                              <h6 className="mb-4 leading-normal dark:text-white text-sm">
                                Sumanth Ale
                              </h6>

                              <span className="mb-2 leading-tight text-xs">
                                Email Address:
                                <span className="ml-2 font-semibold text-black">
                                  sumanthale@gmail.com
                                </span>
                              </span>
                              <span className="mb-2 leading-tight text-xs">
                                Phone Number:
                                <span className="ml-2 font-semibold text-black">
                                  +1 475-444-3434
                                </span>
                              </span>
                              <span className="leading-tight text-xs">
                                VAT Number:
                                <span className="ml-2 font-semibold text-black">
                                  FRB1235476
                                </span>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="w-full max-w-full px-3 ml-auto lg:w-3/12 flex-0">
                        <h6 className="mb-4 dark:text-white">Order Summary</h6>
                        <div className="flex justify-between">
                          <span className="mb-2 leading-normal text-sm">
                            Product Price:
                          </span>
                          <span className="ml-2 font-semibold text-black dark:text-white">
                            $1,315.77
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="mb-2 leading-normal text-sm">
                            Delivery:
                          </span>
                          <span className="ml-2 font-semibold text-black dark:text-white">
                            $14
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="mb-2 leading-normal text-sm">
                            Taxes:
                          </span>
                          <span className="ml-2 font-semibold text-black dark:text-white">
                            $65.00
                          </span>
                        </div>
                        <div className="flex justify-between mt-6">
                          <span className="mb-2 text-lg">Total:</span>
                          <span className="ml-2 font-semibold text-lg text-black dark:text-white">
                            $1,375.77
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
