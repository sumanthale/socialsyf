import {
  SfRating,
  SfButton,
  SfLink,
  SfCounter,
  SfIconShoppingCart,
  SfIconCompareArrows,
  SfIconFavorite,
  SfIconSell,
  SfIconPackage,
  SfIconRemove,
  SfIconAdd,
  SfIconWarehouse,
  SfIconSafetyCheck,
  SfScrollable,
  SfIconLocationOn,
} from "@storefront-ui/react";
import { useCounter } from "react-use";
import { useContext, useEffect, useId, useState } from "react";
import { clamp } from "@storefront-ui/shared";
import { getPlaceByLatLan } from "../../api/api";
import { AuthContext } from "../../context/AuthContext";

export default function ProductDetails() {
  const { setOpen } = useContext(AuthContext);
  const [place, setPlace] = useState("Hyderabad,Telangana,India");
  const inputId = useId();
  const min = 1;
  const max = 20;
  const [value, { inc, dec, set }] = useCounter(min);
  function handleOnChange(event) {
    const { value: currentValue } = event.target;
    const nextValue = parseFloat(currentValue);
    set(Number(clamp(nextValue, min, max)));
  }
  useEffect(() => {
    try {
      // fetchData();
    } catch (error) {
      // setResturants(data);
    }
  }, []);
  const fetchData = async () => {
    geoLocation();
  };
  const geoLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          console.log("LAT " + latitude);
          console.log("LNG " + longitude);
          const name = await getPlaceByLatLan(latitude, longitude);
          setPlace(name);
        },
        showError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Enable location to get personalized search results. 🌍");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
  return (
    <section className="md:max-w-[640px]">
      <div className="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-3 mb-4">
        <SfIconSell size="sm" className="mr-1.5" />
        Sale
      </div>
      <h1 className="mb-1 font-bold typography-headline-4">
        Woods 34L Men&apos;s Hiking Backpack, Cetacean Green
      </h1>
      <h1 className="mb-2 text-slate-900 text-[13px]">
        Brand: <span className="text-black font-semibold">WOODS</span>
      </h1>
      <strong className="block font-bold text-3xl my-2">
        <span className="text-red-700 ">-38%</span> $1,410.77
      </strong>
      <h1 className="mb-1 text-slate-700 text-[13px]">
        M.R.P.: <del>$2,274.19</del>
      </h1>
      <div className="inline-flex items-center mt-2 ">
        <SfRating size="xs" value={4.5} max={5} halfIncrement />
        <SfCounter className="ml-1" size="xs">
          123
        </SfCounter>
        <SfLink
          href="#"
          variant="secondary"
          className="ml-2 text-xs text-neutral-500"
        >
          123 reviews
        </SfLink>
      </div>
      <h1 className="mb-1 text-slate-900 font-bold text-[11px]">
        2K+ bought in the past month.
      </h1>
      <h1 className="mb-3 text-slate-900 text-[13px]">
        Sold by:{" "}
        <span className="text-black font-semibold">
          Appario Retail Private Ltd
        </span>
      </h1>

      <ul className="mb-4 font-normal typography-text-sm list-disc">
        <li>
          Accessory straps on lower front panel are perfect for pads or blankets
        </li>
        <li>Top loading design with a secure drawcord closure</li>
        <li>Front panel lash loops for attaching extra gear</li>
      </ul>

      <div className="mt-6">
        <p className="mb-4 text-lg font-semibold dark:text-gray-400 flex items-center gap-2">
          <SfIconLocationOn />
          Other Sellers Near You New (2) from $1,420.77
        </p>
        <SfScrollable className="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="shadow  text-gray-500 border  h-36 shrink-0 p-2  border-gray-300 grid place-items-center">
            <div className="flex text-xs gap-x-3">
              <p className="">Sold by:</p>
              <div className="space-y-1.5">
                <p className="font-bold text-black">Thinkline LLC</p>
                <h1 className=" text-slate-900 font-semibold text-[11px]">
                  less than 3 miles away from you.
                </h1>
                <div className="inline-flex items-center">
                  <SfRating size="xs" value={3} max={5} />
                  <SfCounter className="ml-1" size="xs">
                    123
                  </SfCounter>
                </div>
                <p>99% positive over last 12 months</p>
                <div>
                  <span className="font-bold mr-3 text-sm"> $1,420.99</span>
                  <SfButton onClick={() => setOpen(true)} size="sm">
                    Add To Cart
                  </SfButton>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow  text-gray-500 border  h-36 shrink-0 p-2  border-gray-300 grid place-items-center">
            <div className="flex text-xs gap-x-3">
              <p className="">Sold by:</p>
              <div className="space-y-1.5">
                <p className="font-bold text-black"> DESTEK </p>
                <h1 className=" text-slate-900 font-semibold text-[11px]">
                  less than 5 miles away from you.
                </h1>
                <div className="inline-flex items-center">
                  <SfRating size="xs" value={4} max={5} />
                  <SfCounter className="ml-1" size="xs">
                    33
                  </SfCounter>
                </div>
                <p>94% positive over last 6 months</p>
                <div>
                  <span className="font-bold mr-3 text-sm"> $2,345.99</span>
                  <SfButton onClick={() => setOpen(true)} size="sm">
                    Add To Cart
                  </SfButton>
                </div>
              </div>
            </div>
          </div>
        </SfScrollable>
      </div>
      <div className="py-4 mb-4 border-gray-200 border-y mt-6">
        <div className="items-start xs:flex">
          <div className="flex flex-col items-stretch xs:items-center xs:inline-flex">
            <div className="flex border border-neutral-300 rounded-md">
              <SfButton
                variant="tertiary"
                square
                className="rounded-r-none p-3"
                disabled={value <= min}
                aria-controls={inputId}
                aria-label="Decrease value"
                onClick={() => dec()}
              >
                <SfIconRemove />
              </SfButton>
              <input
                id={inputId}
                type="number"
                role="spinbutton"
                className="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                min={min}
                max={max}
                value={value}
                onChange={handleOnChange}
              />
              <SfButton
                variant="tertiary"
                square
                className="rounded-l-none p-3"
                disabled={value >= max}
                aria-controls={inputId}
                aria-label="Increase value"
                onClick={() => inc()}
              >
                <SfIconAdd />
              </SfButton>
            </div>
            <p className="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
              <strong className="text-neutral-900">{max}</strong> in stock
            </p>
          </div>
          <SfButton
            size="lg"
            className="w-full xs:ml-4"
            slotPrefix={<SfIconShoppingCart size="sm" />}
            onClick={() => setOpen(true)}
          >
            Add to cart
          </SfButton>
        </div>
        <div className="flex justify-center mt-4 gap-x-4">
          <SfButton
            size="sm"
            variant="tertiary"
            slotPrefix={<SfIconCompareArrows size="sm" />}
          >
            Compare
          </SfButton>
          <SfButton
            size="sm"
            variant="tertiary"
            slotPrefix={<SfIconFavorite size="sm" />}
          >
            Add to list
          </SfButton>
        </div>
      </div>

      <div className="flex first:mt-4">
        <SfIconPackage
          size="sm"
          className="flex-shrink-0 mr-1 text-neutral-500"
        />
        <p className="text-sm">
          Free shipping, arrives by Thu, Apr 7. Want it faster?
          <SfLink href="#" variant="secondary" className="mx-1">
            Add an address
          </SfLink>
          to see options
        </p>
      </div>
      <div className="flex mt-4">
        <SfIconWarehouse
          size="sm"
          className="flex-shrink-0 mr-1 text-neutral-500"
        />
        <p className="text-sm">
          Pickup not available at your shop.
          <SfLink href="#" variant="secondary" className="ml-1">
            Check availability nearby
          </SfLink>
        </p>
      </div>
      <div className="flex mt-4">
        <SfIconSafetyCheck
          size="sm"
          className="flex-shrink-0 mr-1 text-neutral-500"
        />
        <p className="text-sm">
          Free 30-days returns.
          <SfLink href="#" variant="secondary" className="ml-1">
            Details
          </SfLink>
        </p>
      </div>
    </section>
  );
}
