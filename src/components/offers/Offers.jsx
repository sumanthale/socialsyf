import { featured_offers_data } from "../data/offers";
import Deals from "./DealsTabs";

const Offers = () => {
  return (
    <div className="px-6">
      <div>
        <h1 className="text-4xl font-semibold my-4">
          Featured Marketplace Offers
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {featured_offers_data.map(
            ({ brand, title, subtitle, offerImage }) => (
              <div
                key={title}
                className="flex flex-col relative border border-neutral-200 rounded-md hover:shadow-xl h-[22rem]"
              >
                <a
                  className="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
                  href="#"
                  aria-label={title}
                />
                <img
                  src={offerImage?.default}
                  alt={title}
                  className="object-cover h-auto rounded-t-md aspect-video"
                />
                <div className="flex flex-col items-start p-4 grow feature-offer-blur space-y-3">
                  <img
                    className="rounded-full absolute right-6 -top-8"
                    src={brand.logo}
                    alt={title}
                    width="70"
                    height="70"
                  />
                  <p className="font-semibold typography-text-base">
                    {brand.name}
                  </p>
                  <p className="font-medium typography-text-base line-clamp-2">
                    {title}
                  </p>
                  <p className="mt-1 mb-4 font-normal typography-text-sm line-clamp-2">
                    {subtitle}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-semibold my-4">Find a deal</h1>
        <Deals />
      </div>
    </div>
  );
};

export default Offers;
