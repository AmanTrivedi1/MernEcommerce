import React, { Fragment, useEffect } from "react";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import homeimagesmall from "../../images/stable-diffusion-xl (12).jpeg";
import homeimagetwo from "../../images/PhoneImageTwo.png";
import homeimagethree from "../../images/PhoneImageThree.png";
import PhoneImageOne from "../../images/PhoneImageOne.png";
import reviewimageone from "../../images/stable-diffusion-xl (11).jpeg";
import reviewimagetwo from "../../images/stable-diffusion-xl (12).jpeg";
import reviewimagethree from "../../images/stable-diffusion-xl (14).jpeg";
import reviewimagefour from "../../images/stable-diffusion-xl (15).jpeg";
import cutomerimage from "../../images/stable-diffusion-xl (9).jpg";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  return (
    <>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
              <div className="inset-y-0  top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                  className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  preserveAspectRatio="none slice"
                >
                  <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                  className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                  src={homeimagesmall}
                  alt="homeimagesmall"
                />
              </div>
              <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                  <p className="inline-block px-1 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Everything Natural
                  </p>
                  <h2 className="mb-5 font-Poppins text-3xl font-bold  text-gray-900 sm:text-4xl sm:leading-none">
                    Embrace Wellness with
                    <br className="hidden md:block" />
                    Our Exquisite Range of Pure Natural Oils
                  </h2>

                  <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                    Welcome to our website, your one-stop destination for
                    high-quality natural oils and perfumes in bulk quantities.
                    Discover a wide selection of pure and aromatic oils sourced
                    from nature's finest ingredients, perfect for all your
                    wholesale needs.
                  </p>
                  <div className="flex items-center">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white bg-dark transition duration-200 rounded-xl shadow-md  focus:shadow-outline focus:outline-none"
                    >
                      Go Natural
                    </a>
                    <a
                      href="/"
                      aria-label=""
                      className="inline-flex items-center font-semibold  rounded-xl h-12 px-6 border border-dark duration-200 "
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Aprocah Section */}
            <div className="md:pl-40 bg-[#ffffff] md:pr-40 pl-4 pr-4  ">
              <p className=" text-sm md:text-lg  py-4  ">
                HOW WE MAKE NATURALY
              </p>
              <h1 className="md:text-4xl    text-3xl font-bold ">
                We follow simple approach
              </h1>
              <div className="flex items-center  md:flex-row  flex-col md:justify-between">
                <div className="md:w-1/2 w-full">
                  <h1 className="md:text-8xl  font-bold  text-7xl text-dark opacity-20 ">
                    01
                  </h1>
                  <h1 className="md:text-3xl text-xl font-semibold text-dark">
                    We Process a Natural Oil
                  </h1>
                  <p className="md:text-base text-xs ">
                    we carefully extract and process natural oils to offer you a
                    range of premium, environmentally-friendly products for a
                    healthier and sustainable lifestyle.
                  </p>
                </div>
                <div>
                  <img
                    className="md:w-96 w-64"
                    src={PhoneImageOne}
                    alt="Process Images"
                  />
                </div>
              </div>
              {/* Process Two */}
              <div className="flex items-center  md:flex-row  flex-col-reverse md:justify-between">
                <div>
                  <img
                    className="md:w-96 w-64"
                    src={homeimagetwo}
                    alt="Process Images"
                  />
                </div>
                <div className="md:w-1/2 w-full">
                  <h1 className="md:text-8xl  font-bold  text-7xl text-dark opacity-20 ">
                    02
                  </h1>
                  <h1 className="md:text-3xl text-xl font-semibold text-dark">
                    Lesser Price compartively to others
                  </h1>
                  <p className="md:text-base text-xs ">
                    Our company takes pride in producing premium oils in bulk
                    quantities. With state-of-the-art facilities and a
                    commitment to quality, we ensure a consistent supply of
                    natural oils for various works we have lesser price beacuse
                    we produce in a bulk
                  </p>
                </div>
              </div>
              {/* Process three */}
              <div className="flex items-center  md:flex-row  flex-col md:justify-between">
                <div className="md:w-1/2 w-full">
                  <h1 className="md:text-8xl  font-bold  text-7xl text-dark opacity-20 ">
                    03
                  </h1>
                  <h1 className="md:text-3xl text-xl font-semibold text-dark">
                    Why we are better than other
                  </h1>
                  <p className="md:text-base text-xs ">
                    we carefully extract and process natural oils to offer you a
                    range of premium, environmentally-friendly products for a
                    healthier and sustainable lifestyle.
                  </p>
                </div>
                <div>
                  <img
                    className="md:w-96 w-64"
                    src={homeimagethree}
                    alt="Process Images"
                  />
                </div>
              </div>
            </div>

            <div className=" xl:ml-10 xl:mr-10 md:mr-4 md:ml-4  items-center justify-between  md:flex-row flex-col flex">
              <div className="flex flex-col">
                <div className="pl-4 pr-4">
                  <h1 className="text-xs md:m-4">Testimonial</h1>
                  <h1 className=" md:m-4  md:text-4xl text-3xl font-bold">
                    Once you try it, you can't go back
                  </h1>
                </div>
                {/* Customer one */}
                <div>
                  <div className="flex md:gap-4  md:m-4 pl-4 pr-4  items-center  md:flex-row flex-col  justify-between">
                    <div className="md:max-w-xs w-full flex mt-2  flex-col items-start gap-2 ">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={cutomerimage}
                        alt="cutomerimage"
                      />
                      <p className="md:text-base text-xs ">
                        Inexpensive, healthy and great-tasting meals, without
                        even having to order manually! It feels truly magical.
                      </p>
                      <p className="md:text-base text-xs">— Dave Bryson</p>
                    </div>
                    {/* Customer Two */}
                    <div className="md:max-w-xs w-full flex mt-2  flex-col items-start gap-2 ">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={cutomerimage}
                        alt="cutomerimage"
                      />
                      <p className="md:text-base text-xs ">
                        Inexpensive, healthy and great-tasting meals, without
                        even having to order manually! It feels truly magical.
                      </p>
                      <p className="md:text-base text-xs">— Dave Bryson</p>
                    </div>
                  </div>

                  {/* Cutomer three */}
                  <div className="flex md:gap-4  md:m-4 pl-4 pr-4  items-center  md:flex-row flex-col  justify-between">
                    <div className="md:max-w-xs w-full flex mt-2  flex-col items-start gap-2 ">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={cutomerimage}
                        alt="cutomerimage"
                      />
                      <p className="md:text-base text-xs ">
                        Inexpensive, healthy and great-tasting meals, without
                        even having to order manually! It feels truly magical.
                      </p>
                      <p className="md:text-base text-xs">— Dave Bryson</p>
                    </div>
                    {/* customer four */}
                    <div className="md:max-w-xs w-full flex mt-2  flex-col items-start gap-2 ">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={cutomerimage}
                        alt="cutomerimage"
                      />
                      <p className="md:text-base text-xs ">
                        Inexpensive, healthy and great-tasting meals, without
                        even having to order manually! It feels truly magical.
                      </p>
                      <p className="md:text-base text-xs">— Dave Bryson</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-3/4  p-4  w-full">
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <img
                      class="h-auto max-w-full rounded-xl"
                      src={reviewimageone}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-xl"
                      src={reviewimagetwo}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-xl"
                      src={reviewimagethree}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-xl"
                      src={reviewimagefour}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <Fragment>
              <MetaData title="ECOMMERCE" />
              <h2 className="flex items-center bg-[#ffffff] justify-center font-bold   md:text-2xl text-xl xl:text-3xl border-white">
                Featured Product
              </h2>
              <div
                className="  p-5 bg-[#ffffff] flex items-center flex-wrap gap-5 justify-center"
                id="container"
              >
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
            </Fragment>
          </>
        )}
      </Fragment>
    </>
  );
};

export default Home;
