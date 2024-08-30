import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import class1 from "./images/class1.jpeg";
import class2 from "./images/class2.jpeg";
import class3 from "./images/class3.jpeg";

const Img = ({ url }) => {
  return (
    <div className="">
      <img
        src={url}
        alt="Class Image"
        className=" rounded-lg mb-2 shadow-md transition-all duration-300 ease-in-out "
      />
    </div>
  );
};

export const Imageslider = () => {
  const slides = [
    {
      url: class1,
      index: 1,
    },
    {
      url: class2,
      index: 2,
    },
    {
      url: class3,
      index: 3,
    },
    {
      url: class3,
      index: 3,
    },
    {
      url: class3,
      index: 3,
    },
    {
      url: class3,
      index: 3,
    },
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  return (
    <motion.div ref={carousel} className="carousel overflow-hidden cursor-grab">
      <motion.div drag="x" dragConstraints={{ right:0, left: -width }} className="inner-carousel flex ">
        {slides.map((slide) => {
          return (
            <motion.div
              className="item w-fit sm:h-full sm:w-2/3 m-1 "
              key={slide.index}
            >
              <img
                className="h-72 min-w-80 sm:min-w-96 sm:h-80 rounded-lg shadow-md transition-all duration-300 ease-in-out pointer-events-none object-cover"
                src={slide.url}
                alt=""
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
