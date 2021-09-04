import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="myContainer mt-10 text-center">
      <h2 className="font-semibold text-blue-700 text-xl pb-5">
        WHAT OTHERS ARE SAYING:
      </h2>

     <Slider {...settings}>
         <Reviews desc="Noah showed me how to grow my email list and figure out my site’s revenue model. Don’t let his casual, taco-talking style fool you. The guy gets serious business results.”" name="Andrew Warner" job="   Founder of Mixergy.com"/> 
     </Slider>
    </div>
  );
};


// Reviews Component
const Reviews = ({desc, name, job}) => {
    return(
        <div className="md:px-52">
           <p>{desc}</p>
           <h2 className="pt-6 pb-1">- {name}</h2>
           <h4>{job}</h4>
        </div>
    )

 
}
 
export default Testimonial;
