/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import { useParams } from "react-router-dom";

const Order = () => {
  const { id } = useParams();
  return (
    <div>
      {id ? (
        <div className="w-full p-6 mx-auto h-[87.8vh]">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 mx-auto lg:flex-0 lg:w-10/12 shrink-0">
              <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex justify-start item-start space-y-2 flex-col">
                      <h1 className="flex items-center text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                        Order #34343{" "}
                      </h1>
                      <p className="text-sm  font-medium leading-6 text-gray-600 ">
                        {dayjs().format("ddd MMM D YYYY [at] h:mm A")}
                      </p>
                    </div>
                    <a
                      href="javascript:;"
                      className="inline-block px-6 py-3 mb-0 ml-auto font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-slate-600 to-slate-300 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                    >
                      Generate Invoice
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
                            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <h6 className="mt-2 mb-0 dark:text-white text-lg">
                            Gold Glasses
                          </h6>
                          <p className="mb-4 leading-normal text-sm">
                            Order was delivered 2 days ago
                          </p>
                          <span className="py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap bg-gradient-to-tl from-green-600 to-lime-400 text-center align-baseline font-bold uppercase leading-none text-white">
                            Delivered
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full max-w-full px-3 my-auto text-right flex-0 md:w-6/12">
                      <a
                        href="javascript:;"
                        className="inline-block px-6 py-3 mb-4 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-blue-600 to-cyan-400 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                      >
                        Contact Customer
                      </a>
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
                            <h6 className="mb-0 font-semibold leading-normal dark:text-white text-sm text-slate-700">
                              Order received
                            </h6>
                            <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                              22 DEC 7:20 AM
                            </p>
                          </div>
                        </div>
                        <div className="relative mb-4">
                          <span className="left-4 absolute inline-flex items-center justify-center w-6.5 h-6.5 rounded-circle bg-white text-center -translate-x-1/2 text-base font-semibold z-1">
                            <i className="fa leading-none fa-star text-slate-400 leading-pro"></i>
                          </span>
                          <div className="ml-12 pt-1.4 relative -top-1.5 w-auto lg:max-w-120 float-none">
                            <h6 className="mb-0 font-semibold leading-normal dark:text-white text-sm text-slate-700">
                              Generate order id #1832412
                            </h6>
                            <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                              22 DEC 7:21 AM
                            </p>
                          </div>
                        </div>
                        <div className="relative mb-4">
                          <span className="left-4 absolute inline-flex items-center justify-center w-6.5 h-6.5 rounded-circle bg-white text-center -translate-x-1/2 text-base font-semibold z-1">
                            <i className="fa fa-solid leading-none fa-inbox text-slate-400 "></i>
                          </span>
                          <div className="ml-12 pt-1.4 relative -top-1.5 w-auto lg:max-w-120">
                            <h6 className="mb-0 font-semibold leading-normal dark:text-white text-sm text-slate-700">
                              Order transmited to courier
                            </h6>
                            <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                              22 DEC 8:10 AM
                            </p>
                          </div>
                        </div>
                        <div className="relative mb-4">
                          <span className="left-4 absolute inline-flex items-center justify-center w-6.5 h-6.5 rounded-circle bg-white text-center -translate-x-1/2 text-base font-semibold z-1">
                            <i className="fa leading-none fa-check text-lime-500 leading-pro"></i>
                          </span>
                          <div className="ml-12 pt-1.4 relative -top-1.5 w-auto lg:max-w-120 float-none">
                            <h6 className="mb-0 font-semibold leading-normal dark:text-white text-sm text-slate-700">
                              Order delivered
                            </h6>
                            <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                              22 DEC 4:54PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full max-w-full px-3 flex-0 md:w-6/12 lg:w-5/12">
                      <h6 className="mb-4 dark:text-white">Payment details</h6>
                      <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 bg-clip-border dark:border-slate-700">
                        <img
                          className="mb-0 mr-4 w-1/10 h-4"
                          src="https://demos.creative-tim.com/soft-ui-dashboard-pro-tailwind/assets/img/logos/mastercard.png"
                          alt="logo"
                        />
                        <h6 className="mb-0 dark:text-white">
                          ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852
                        </h6>
                        <button
                          type="button"
                          className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 mb-0 ml-auto flex cursor-pointer items-center justify-center border border-solid border-slate-400 bg-transparent text-center align-middle font-bold text-slate-400 shadow-none transition-all hover:bg-transparent hover:text-slate-400 hover:opacity-75 hover:shadow-none active:bg-slate-400 active:text-black hover:active:bg-transparent hover:active:text-slate-400 hover:active:opacity-75 hover:active:shadow-none"
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
                        <li className="relative flex p-6 mb-2 rounded-xl bg-gray-50 dark:bg-slate-800 text-inherit">
                          <div className="flex flex-col">
                            <h6 className="mb-4 leading-normal dark:text-white text-sm">
                              Oliver Liam
                            </h6>
                            <span className="mb-2 leading-tight text-xs">
                              Company Name:
                              <span className="ml-2 font-semibold text-slate-700 dark:text-white/70">
                                Viking Burrito
                              </span>
                            </span>
                            <span className="mb-2 leading-tight text-xs">
                              Email Address:
                              <span className="ml-2 font-semibold text-slate-700 dark:text-white/70">
                                oliver@burrito.com
                              </span>
                            </span>
                            <span className="leading-tight text-xs">
                              VAT Number:
                              <span className="ml-2 font-semibold text-slate-700 dark:text-white/70">
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
                        <span className="ml-2 font-semibold text-slate-700 dark:text-white">
                          $90
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="mb-2 leading-normal text-sm">
                          Delivery:
                        </span>
                        <span className="ml-2 font-semibold text-slate-700 dark:text-white">
                          $14
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="mb-2 leading-normal text-sm">
                          Taxes:
                        </span>
                        <span className="ml-2 font-semibold text-slate-700 dark:text-white">
                          $1.95
                        </span>
                      </div>
                      <div className="flex justify-between mt-6">
                        <span className="mb-2 text-lg">Total:</span>
                        <span className="ml-2 font-semibold text-lg text-slate-700 dark:text-white">
                          $105.95
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full p-6 mx-auto h-[87.8vh]">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 mx-auto lg:flex-0 lg:w-10/12 shrink-0">
              <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex justify-start item-start space-y-2 flex-col">
                      <h1 className="flex items-center text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                        Order #13432{" "}
                      </h1>
                      <p className="text-sm  font-medium leading-6 text-gray-600 ">
                        {dayjs().format("ddd MMM D YYYY [at] h:mm A")}
                      </p>
                    </div>
                    <a
                      href="javascript:;"
                      className="inline-block px-6 py-3 mb-0 ml-auto font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-slate-600 to-slate-300 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                    >
                      Generate Invoice
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
                              {dayjs().add(1, "minute").format("DD MMM h:mm A")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full max-w-full px-3 flex-0 md:w-6/12 lg:w-5/12">
                      <h6 className="mb-4 dark:text-white">Payment details</h6>
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
      )}
    </div>
  );
};

export default Order;
