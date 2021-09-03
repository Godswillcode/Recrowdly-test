import React from "react";
import bg from "../Images/bg-2.png";

const Home = () => {
  return (
    <>
      <div
        className="w-full py-36 text-center"
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="myContainer">
          <h1 className="font-extrabold text-3xl lg:text-5xl">
            Bring your idea to life with vivid colors{" "}
            <br className="lg:flex hidden" /> and wonderful animations.
          </h1>

          <form className="mt-10 lg:bg-white lg:inline-block lg:pr-1 text-right">
            <input
              type="email"
              placeholder="Enter an email address and let’s get started"
              className="text-sm pl-3 py-2 pr-6 w-80 focus:outline-none"
            />
             <br className="lg:hidden"/>
            <button
              type="submit"
              className="py-1 px-6 text-sm text-white bg-black mt-2 lg:mt-0"
            >
              Let’s Go
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
