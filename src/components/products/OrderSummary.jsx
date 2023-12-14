import { useState, useRef, useEffect } from "react";
import {
  SfButton,
  SfIconCheckCircle,
  SfIconClose,
  SfInput,
} from "@storefront-ui/react";

const orderDetails = {
  items: 1,
  originalPrice: 2274.19,
  savings: -863.42,
  delivery: 0.0,
  tax: 65,
};

export default function OrderSummary() {
  const errorTimer = useRef(0);
  const positiveTimer = useRef(0);
  const informationTimer = useRef(0);
  const [inputValue, setInputValue] = useState("");
  const [promoCode, setPromoCode] = useState(0);
  const [informationAlert, setInformationAlert] = useState(false);
  const [positiveAlert, setPositiveAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  useEffect(() => {
    clearTimeout(errorTimer.current);
    errorTimer.current = window.setTimeout(() => setErrorAlert(false), 5000);
    return () => {
      clearTimeout(errorTimer.current);
    };
  }, [errorAlert]);

  useEffect(() => {
    clearTimeout(positiveTimer.current);
    positiveTimer.current = window.setTimeout(
      () => setPositiveAlert(false),
      5000
    );
    return () => {
      clearTimeout(positiveTimer.current);
    };
  }, [positiveAlert]);

  useEffect(() => {
    clearTimeout(informationTimer.current);
    informationTimer.current = window.setTimeout(
      () => setInformationAlert(false),
      5000
    );
    return () => {
      clearTimeout(informationTimer.current);
    };
  }, [informationAlert]);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  const itemsSubtotal = () =>
    orderDetails.originalPrice +
    orderDetails.savings +
    orderDetails.delivery +
    orderDetails.tax;

  const totalPrice = () => itemsSubtotal() + promoCode;

  const checkPromoCode = (event) => {
    event.preventDefault();
    if (
      (promoCode === -100 && inputValue.toUpperCase() === "SYF100") ||
      !inputValue
    )
      return;
    if (inputValue.toUpperCase() === "SYF100") {
      setPromoCode(-100);
      setPositiveAlert(true);
    } else {
      setErrorAlert(true);
    }
  };

  const removePromoCode = () => {
    setPromoCode(0);
    setInformationAlert(true);
  };

  return (
    <div className="pr-2">
      <div className="p-4 bg-white outline outline-gray-200 rounded my-4">
        <div className="container mx-auto col-span-7">
          <div className="grid grid-cols-12 items-center justify-between">
            <img
              src="https://www.synchrony.com/sites/syc/img/syf_mc_premier_card.png"
              alt="card img"
              className="h-16 col-span-3"
            />
            <div className="col-span-7">
              <span className="font-semibold text-[14px]">
                Get 2% back (<span className="text-red-500">$29.5</span>) + No
                Annual Fee* with Synchrony Premier World Mastercard® credit
                card.
              </span>
            </div>
            <button
              href="#"
              rel="noreferrer noopener"
              className="px-2 mt-4 lg:mt-0 py-1.5 w-fit rounded-md text-xs border block bg-syf font-bold text-black col-span-2"
            >
              Apply Now
            </button>
          </div>
        </div>{" "}
      </div>

      <div className="md:shadow-lg md:rounded-md md:border md:border-neutral-100 bg-white">
        <div className="flex justify-between items-end bg-neutral-100 md:bg-transparent py-2 px-4 md:px-6 md:pt-6 md:pb-4">
          <p className="typography-headline-4 font-bold md:typography-headline-3">
            Order Summary
          </p>
          <p className="typography-text-base font-medium">
            (Items: {orderDetails.items})
          </p>
        </div>
        <div className="px-4 pb-4 mt-3 md:px-6 md:pb-6 md:mt-0">
          <div className="flex justify-between typography-text-base pb-4">
            <div className="flex flex-col grow pr-2">
              <p>Items Subtotal</p>
              <p className="typography-text-xs text-neutral-500">
                Original Price
              </p>
              <p className="typography-text-xs text-secondary-700">Savings</p>
              <p className="my-2">Delivery</p>
              <p>Estimated Sales Tax</p>
            </div>
            <div className="flex flex-col text-right">
              <p>{formatPrice(itemsSubtotal())}</p>
              <p className="typography-text-xs text-neutral-500">
                {formatPrice(orderDetails.originalPrice)}
              </p>
              <p className="typography-text-xs text-secondary-700">
                {formatPrice(orderDetails.savings + promoCode)}
              </p>
              <p className="my-2">{formatPrice(orderDetails.delivery)}</p>
              <p>{formatPrice(orderDetails.tax)}</p>
            </div>
          </div>
          {promoCode ? (
            <div className="flex items-center mb-5 py-5 border-y border-neutral-200">
              <p>PromoCode</p>
              <SfButton
                size="sm"
                variant="tertiary"
                className="ml-auto mr-2 !text-black"
                onClick={removePromoCode}
              >
                Remove
              </SfButton>
              <p>{formatPrice(promoCode)}</p>
            </div>
          ) : (
            <form
              className="flex gap-x-2 py-4 border-y border-neutral-200 mb-4"
              onSubmit={checkPromoCode}
            >
              <SfInput
                value={inputValue}
                placeholder="Enter promo code"
                wrapperClassName="grow"
                onChange={(event) => setInputValue(event.target.value)}
              />
              <SfButton type="submit" variant="secondary">
                Apply
              </SfButton>
            </form>
          )}
          <p className="px-3 py-1.5 bg-secondary-100 text-secondary-700 typography-text-sm rounded-md text-center mb-4">
            You are saving $
            {Math.abs(orderDetails.savings + promoCode).toFixed(2)} on your
            order today!
          </p>
          <div className="flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4 border-b border-neutral-200">
            <p>Total</p>
            <p>{formatPrice(totalPrice())}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-20 right-20 mx-2 mt-2 sm:mr-6">
        {positiveAlert && (
          <div
            role="alert"
            className="flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"
          >
            <SfIconCheckCircle className="mr-2 my-2 text-positive-700" />
            <p className="py-2 mr-2">Your promo code has been added.</p>
            <button
              type="button"
              className="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900"
              aria-label="Close positive alert"
              onClick={() => setPositiveAlert(false)}
            >
              <SfIconClose className="hidden md:block" />
              <SfIconClose size="sm" className="md:hidden block" />
            </button>
          </div>
        )}
        {informationAlert && (
          <div
            role="alert"
            className="flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"
          >
            <SfIconCheckCircle className="mr-2 my-2 text-positive-700" />
            <p className="py-2 mr-2">Your promo code has been removed.</p>
            <button
              type="button"
              className="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900"
              aria-label="Close positive alert"
              onClick={() => setInformationAlert(false)}
            >
              <SfIconClose className="hidden md:block" />
              <SfIconClose size="sm" className="md:hidden block" />
            </button>
          </div>
        )}
        {errorAlert && (
          <div
            role="alert"
            className="flex items-start md:items-center max-w-[600px] shadow-md bg-negative-100 pr-2 pl-4 ring-1 ring-negative-300 typography-text-sm md:typography-text-base py-1 rounded-md"
          >
            <p className="py-2 mr-2">This promo code is not valid.</p>
            <button
              type="button"
              className="p-1.5 md:p-2 ml-auto rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900"
              aria-label="Close error alert"
              onClick={() => setErrorAlert(false)}
            >
              <SfIconClose className="hidden md:block" />
              <SfIconClose size="sm" className="md:hidden block" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
