import { credit_cards_data } from "../data/cards";

const Apply = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url('https://www.synchrony.com/syc/img/hero_catalog.jpg')`,
        }}
        className="min-h-[600px] bg-cover pr-40 pl-[100px]"
      >
        <div className="gradient-gray-left "></div>

        <h1 className="text-white hero-heading py-28 pb-16 text-6xl font-bold w-1/2">
          Shop with the power of choice
        </h1>

        <p className=" text-white p-0 hero-subtext text-2xl w-1/2 ">
          As the leading issuer of private label credit cards, we know a thing
          or two about options. Browse our cards, and find a convenient way to
          pay over time.
        </p>
        <p className=" text-white p-0 hero-subtext text-base w-1/2 my-6 ">
          Wondering if you&apos;re eligible for credit?
          <br />
          <span className="underline ">
            {" "}
            Learn about Prequalify and Apply
          </span>{" "}
        </p>
      </section>
      <h1 className="text-4xl font-semibold my-4 text-center mt-10">
        Featured Cards
      </h1>
      <div>
        {credit_cards_data.map((card) => (
          <div
            key={card.id}
            className="m-10 w-11/12 overflow-hidden rounded-xl border shadow-lg md:pl-8 mx-auto"
          >
            <div className="flex flex-col overflow-hidden bg-white sm:flex-row p-6">
              <div className="flex flex-col w-3/5">
                <h2
                  className="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl line"
                  dangerouslySetInnerHTML={{
                    __html: card.heading,
                  }}
                ></h2>
                <p
                  className="mt-4 mb-4 max-w-md text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: card.description,
                  }}
                ></p>
                <div className="flex gap-x-4 mr-5">
                  {card.links.map((link) => (
                    <a
                      key={link.linkLabel}
                      href={link.linkUrl}
                      target="__blank"
                      className={`group mt-auto flex cursor-pointer select-none items-center justify-center rounded-md  px-6 py-2 text-white transition ${
                        link.linkLabel === "Apply" ? "bg-syf" : "bg-black"
                      }`}
                    >
                      <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold">
                        {link.linkLabel}
                      </span>
                      <svg
                        className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div className="order-first ml-auto h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5 max-h-[280px]">
                <img
                  className="h-full w-full object-contain"
                  src={`https://www.synchrony.com${card.images[0].src}`}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apply;
