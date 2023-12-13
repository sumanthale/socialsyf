// import required modules
export default function Slider() {
  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(
    40deg,
    rgba(0, 0, 0, 0.75) 36.38%,
    rgba(0, 0, 0, 0) 92.41%
  ) , url('https://www.synchrony.com//syc/img/syf_dps-0251-2023_holiday_messaging-1440x680-8_–_1_(1)_(1).jpg')`,
        }}
        className="min-h-[570px] bg-cover pr-40 pl-[100px] gradient-gray-left -m-2"
      >
        {/* <div className="gradient-gray-left "></div> */}
        <div className="z-10">
          <h1 className="text-white hero-heading pt-24 pb-4 text-[28px] font-bold ">
            Marketplace
          </h1>

          <p className=" text-white  font-bold text-[64px] w-1/2 leading-tight">
            Great deals await this holiday season!
          </p>
          <p className=" text-white  hero-subtext w-1/2 my-6  text-2xl">
            Explore deals and find savings from Synchrony partners to get the
            things you need at the prices you want.
          </p>
        </div>
      </section>
      <div className="flex w-full my-4 ">
        <div className="p-4 bg-yellow-400 text-gray-900 w-full">
          <div className="grid grid-cols-2 gap-x-5">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <img
                  src="https://www.synchrony.com/sites/syc/img/syf_mc_premier_card.png"
                  alt="card img"
                  className="h-20 "
                />
                <div className="ml-3">
                  <h2 className="text-3xl tracki font-bold">2% CASH BACK </h2>
                  <div className="space-x-2 text-center py-2 lg:py-0">
                    <span className="font-bold text-lg">
                      Synchrony Premier World Mastercard®
                    </span>
                  </div>
                  <span>No Annual Fee*</span>
                </div>
                <button
                  href="#"
                  rel="noreferrer noopener"
                  className="px-4 mt-4 lg:mt-0 py-1.5 w-fit rounded-md text-xs border block bg-white text-black"
                >
                  Apply Now
                </button>
              </div>
            </div>{" "}
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <img
                  src="https://www.synchrony.com/sites/syc/img/lowes_advantage_card_art.png"
                  alt="card img"
                  className="h-20 "
                />
                <div className="ml-3">
                  <h2 className="text-3xl tracki font-bold uppercase">
                    5% OFF ON Purchases
                  </h2>
                  <div className="space-x-2 py-2 lg:py-0">
                    <span className="font-bold text-lg">
                      Lowe&apos;s Advantage Credit Card
                    </span>
                  </div>
                  <span>5% off Lowe&apos;s Advantage Card Purchases </span>
                </div>
                <button
                  href="#"
                  rel="noreferrer noopener"
                  className="px-4 mt-4 lg:mt-0 py-1.5 w-fit rounded-md text-xs border block bg-white text-black"
                >
                  Apply Now
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
