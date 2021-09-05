import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import bg from "../Images/bg-2.png";
import bg2 from "../Images/bg-1.jpg";
import image1 from "../Images/image 20.png";
import image2 from "../Images/image 21.png";
import image3 from "../Images/image 22.png";
import image4 from "../Images/image 23.png";
import image5 from "../Images/image 24.png";
import image6 from "../Images/image 25.png";
import image7 from "../Images/image 26.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import portfolio from "../Images/portfolio.jpg";
import Testimonial from "../Components/Testimonial";

function SampleNextArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

const Home = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  var settings = {
    infinite: true,
    dots: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="w-full text-center flex items-center"
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
         
        }}
        id="home"
      >
        <div className="myContainer">
          <h1 className="font-extrabold text-3xl lg:text-5xl">
            Bring your idea to life with vivid colors{" "}
            <br className="lg:flex hidden" /> and wonderful animations.
          </h1>

          <form className="mt-10 md:bg-white md:inline-block md:pr-1 text-right">
            <input
              type="email"
              placeholder="Enter an email address and let’s get started"
              className="text-sm pl-3 py-2 pr-6 w-80 focus:outline-none"
            />
            <br className="md:hidden" />
            <button
              type="submit"
              className="py-1 px-6 text-sm text-white bg-black mt-2 lg:mt-0 hover:bg-blue-700 transition ease-in-out duration-500"
            >
              Let’s Go
            </button>
          </form>
        </div>
      </div>

      <div className="myContainer -mt-40 flex justify-center">
        <div
          style={{ background: "#232323" }}
          className=" flex justify-center w-full lg:w-3/4 py-32 items-center text-center text-white"
        >
          <div>
            <i
              onClick={onOpenModal}
              className="fas fa-play text-5xl hover:text-secondary cursor-pointer bg-primary rounded-full mb-5 mt-3"
            ></i>
            <p>WATCH THE VIDEO</p>
          </div>
        </div>
        <Modal open={open} onClose={onCloseModal} center>
          <div className="pt-10">
            <iframe
              style={{ height: "50vh" }}
              src="https://www.youtube.com/embed/FNTxRR1eGlY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      </div>

      <div className="myContainer mt-10">
        <div className="flex justify-between overflow-x-auto">
          <img src={image1} alt="about" className="h-4" />
          <img src={image2} alt="about" className="h-6" />
          <img src={image3} alt="about" className="h-6" />
          <img src={image4} alt="about" className="h-6" />
          <img src={image5} alt="about" className="h-6" />
          <img src={image6} alt="about" className="h-6" />
          <img src={image7} alt="about" className="h-5" />
        </div>

        <div className="md:text-center text-left mt-24" id="services">
          <h2 className="font-extrabold text-2xl lg:text-4xl pb-3">
            Animated Video Production & Video <br className="lg:flex hidden" />{" "}
            Marketing Services:
          </h2>
          <p>
            Our services cover the entire gamut of what you could use to really
            get your <br className="lg:flex hidden" /> business’s value
            proposition out there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-28">
          <AnimationS
            title="2D Animation"
            icon="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z"
            desc="Go classic with a lively 2D animated video that brings to life your ideas to life with vivid colors and motion."
          />
          <AnimationS
            title="3D Animation"
            icon="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm9 11.623l-3 1.569v-3.26l3-1.601v3.292zm-13-.654l3 1.625v3.186l-3-1.614v-3.197zm.9-1.799l2.986-1.603 3.132 1.688-3.014 1.608-3.104-1.693zm4.1 3.43l3-1.6v3.238l-3 1.569v-3.207zm4.138-4.475l-3.139-1.691 2.801-1.503 3.11 1.715-2.772 1.479zm-2.424-4.345l-2.825 1.517-2.728-1.47 2.834-1.546 2.719 1.499zm-7.649 1.19l2.711 1.46-2.973 1.596-2.67-1.456 2.932-1.6zm-1.065 4.908v3.204l-3-1.636v-3.216l3 1.648zm-3 3.843l3 1.636v3.185l-3-1.611v-3.21zm5 5.888v-3.169l3 1.614v3.146l-3-1.591zm5-1.545l3-1.569v3.104l-3 1.601v-3.136zm5 .468v-3.083l3-1.569v3.051l-3 1.601z"
            desc="3D models interact with reality to lend your concept new dimensions."
          />
          <AnimationS
            title="Mixed-Media"
            icon="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 16h-12v-8h12v8zm0-10h-12v-8h12v8zm4 10h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"
            desc="Get the best of both 2D and 3D worlds to really bring the most out of your concept."
          />
        </div>
      </div>
      {/* pricing */}
      <div
        className="w-full"
        style={{
          background: `url(${bg2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        id="pricing"
      >
        <div className="myContainer py-14">
          <h2 className="font-extrabold text-2xl lg:text-4xl pb-3 text-center gap-8">
            Pricing Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-20 gap-8">
            <div>
              <div className="md:mt-60 lg:mt-36" />
              <div className="px-8 py-5" style={{ background: "#ffffffef" }}>
                <h3 className="font-semibold text-lg">30 Second</h3>
                <div className="bg-black my-5" style={{ height: "1px" }} />
                <p className="text-sm">Commercial video (2D)</p>
                <h3 className="font-semibold text-lg pt-2">$2,000</h3>
                <div
                  className="bg-gray-300 my-4 w-3/6"
                  style={{ height: "1px" }}
                />
                <p className="text-sm">Commercial video (3D)</p>
                <h3 className="font-semibold text-lg pt-2">$2,500</h3>
              </div>
            </div>

            <div>
              <div className="md:mt-16" />
              <div className="px-8 py-5" style={{ background: "#ffffffef" }}>
                <h3 className="font-semibold text-lg">1 Minute</h3>
                <div className="bg-black my-5" style={{ height: "1px" }} />
                <p className="text-sm">
                  Explainer video with 2D assets on decided color pallet
                  <br className="mt-4" /> <br />
                  (Extra pallets incur additional costs)
                </p>
                <h3 className="font-semibold text-lg pt-2">$3,000</h3>
                <div
                  className="bg-gray-300 my-4 w-3/6"
                  style={{ height: "1px" }}
                />
                <p className="text-sm">
                  Explainer video $3,500 with 3D <br /> assets on decided color
                  palette
                </p>
                <h3 className="font-semibold text-lg pt-2">$3,500</h3>
              </div>
            </div>

            <div
              className="px-8 py-5 text-white"
              style={{ background: "#000000ef" }}
            >
              <h3 className="font-semibold text-lg">
                1 and a half to <br />2 minute
              </h3>
              <div className="bg-gray-300 my-7" style={{ height: "1px" }} />
              <p className="text-sm pb-10 md:pb-44">
                Detailed explainer video with detailed asset
              </p>

              <div className="flex justify-between">
                <h3 className="font-semibold text-lg pt-2">$5,000</h3>
                <h3 className="font-semibold text-lg pt-2">Buy Now</h3>
              </div>
            </div>
          </div>
          <div
            className="py-5 mt-14 px-8 text-sm"
            style={{ background: "#ffffffef" }}
          >
            <h2 className="font-semibold text-lg pb-3">Add-ons</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-5">
              <div>
                <p>Live actor or actress $350</p>
                <p>Copywriting and story direction: $500</p>
              </div>
              <div>
                <p>Asset creation 2D or 3D $45/hour</p>
                <p>Each video includes two sets of revisions</p>
              </div>
              <div>
                <p>Additional revisions billed at $45/hr</p>
              </div>
            </div>
            <p>
              Satisfaction guaranteed. If you’re not happy with the final
              product don’t pay a dime!
            </p>
          </div>
        </div>
      </div>

      {/* portfolio */}
      <div className="myContainer text-center py-14" id="portfolio">
        <h2 className="font-extrabold text-2xl lg:text-4xl pb-2 text-center gap-8">
          Portfolio
        </h2>
        <p className="pb-10">
          We've Created Hundreds of Videos for Satisfied Customers{" "}
          <br className="lg:flex hidden" /> in the US and Globally. Here Are
          Just a Few!
        </p>

        <Slider {...settings}>
          <div>
            <img src={portfolio} alt="portfolio" />
          </div>
          <div>
            <img src={portfolio} alt="portfolio" />
          </div>
          <div>
            <img src={portfolio} alt="portfolio" />
          </div>
        </Slider>

        <div className="mt-14 flex flex-col lg:flex-row justify-between items-center shadow-xl bg-white py-4 px-14">
          <h3 className="font-semibold text-lg pb-2 lg:pb-0">
            Automated Business Growth
          </h3>

          <button className="py-2 px-6 text-sm text-white bg-black w-full lg:w-40 hover:bg-blue-700 transition ease-in-out duration-500">
            Schedule A Call
          </button>
        </div>
      </div>

      {/* Reviews */}
      <Testimonial />
    </>
  );
};

// AnimationS components

const AnimationS = ({ title, icon, desc }) => {
  return (
    <div className="flex flex-row lg:flex-col gap-6 hover:shadow-md py-6 px-3">
      <div className="flex justify-center items-center">
        <i className="bg-white p-4 rounded-full shadow-2xl">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className=""
          >
            <path d={icon} />
          </svg>
        </i>
      </div>
      <div className="lg:text-center text-left">
        <h3 className="md:text-xl text-base font-semibold pb-2">{title}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Home;
