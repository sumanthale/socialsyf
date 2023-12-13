/* eslint-disable react/prop-types */
import {
  SfButton,
  SfRating,
  SfCounter,
  SfLink,
  SfIconVisibility,
  SfIconFavorite,
} from "@storefront-ui/react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { title, price, thumbnail, description, rating, stock } = product;
  return (
    <div className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px] relative">
      <div className="relative">
        <SfLink href="#" className="block">
          <img
            src={thumbnail}
            alt="Great product"
            className="object-cover h-auto rounded-md aspect-square"
            width="300"
            height="300"
          />
        </SfLink>
        <SfButton
          variant="tertiary"
          size="sm"
          square
          className="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <SfIconFavorite size="sm" />
        </SfButton>
      </div>
      <div className="p-4 border-t border-neutral-200  min-h-[270px]">
        <SfLink href="#" variant="secondary" className="no-underline">
          {title}
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating halfIncrement size="xs" value={rating} max={5} />

          <SfLink href="#" variant="secondary" className="pl-1 no-underline">
            <SfCounter size="xs">{stock}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-sm text-neutral-700 line-clamp-4">
          {description}
        </p>
        <span className="block pb-2 font-bold typography-text-lg">
          ${price}
        </span>
      </div>
      <Link
        to={`/product`}
        className="w-full text-black absolute bottom-5 grid place-items-center"
      >
        <SfButton
          size="sm"
          className="!text-black"
          slotPrefix={<SfIconVisibility size="sm" color="black" />}
        >
          View Details
        </SfButton>
      </Link>
    </div>
  );
}
