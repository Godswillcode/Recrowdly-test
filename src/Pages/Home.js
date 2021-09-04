import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import bg from "../Images/bg-2.png";
import image1 from "../Images/image 20.png"
import image2 from "../Images/image 21.png"
import image3 from "../Images/image 22.png"
import image4 from "../Images/image 23.png"
import image5 from "../Images/image 24.png"
import image6 from "../Images/image 25.png"
import image7 from "../Images/image 26.png"


const Home = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  
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
              className="py-1 px-6 text-sm text-white bg-black mt-2 lg:mt-0"
            >
              Let’s Go
            </button>
          </form>
        </div>
      </div>

      <div className="myContainer -mt-40">
        <div
          style={{ background: "#232323", height: "60vh" }}
          className=" flex justify-center items-center text-center text-white"
        >
          <div>
            <i onClick={onOpenModal} className="fas fa-play text-5xl hover:text-secondary cursor-pointer bg-primary rounded-full mb-5 mt-3"></i>
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
        <div className="flex justify-between overflow-x-hidden">
          <img src={image1} alt="about" className="h-"/>
          <img src={image2} alt="about" className="h-"/>
          <img src={image3} alt="about" className="h-"/>
          <img src={image4} alt="about" className="h-"/>
          <img src={image5} alt="about" className="h-"/>
          <img src={image6} alt="about" className="h-"/>
          <img src={image7} alt="about" className="h-"/>
        </div>
      </div>
    </>
  );
};

export default Home;
