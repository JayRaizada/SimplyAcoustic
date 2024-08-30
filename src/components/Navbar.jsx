import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "./images/logo2-removebg (1).png";
import sir1 from "./images/sir1.jpeg";
import spotify from "./images/spotify-icon.svg";
import NavMenu from "./NavMenu";
import "primeicons/primeicons.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const toggleMenu = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");document
        .getElementById("globalnav-anim-menutrigger-bread-top-open")
        .beginElement();
      document
        .getElementById("globalnav-anim-menutrigger-bread-bottom-open")
        .beginElement();
    } else {
      document.body.classList.remove("overflow-hidden");
      document
        .getElementById("globalnav-anim-menutrigger-bread-top-close")
        .beginElement();
      document
        .getElementById("globalnav-anim-menutrigger-bread-bottom-close")
        .beginElement();
    }

    // Cleanup to ensure the class is removed if the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [sidebarOpen]);

  return (
    <nav className="text-white flex justify-center">
      <div className="absolute flex justify-center -top-2 z-50 ">
        <img src={logo} alt="Logo" className=" h-12 sm:h-24 mt-8" />
        <div className="flex flex-col justify-center items-center mt-8 ml-8">
          <span className="italic text-xl sm:text-2xl ">Simply</span>
          <span className="italic text-xl sm:text-2xl ">Acoustic</span>
        </div>
      </div>

      {/* PC Web view */}
      <ul className="absolute flex flex-row mt-32">
        <li className="hidden sm:block">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="text-logoorange mx-8 hover:text-white text-3xl cursor-pointer"
          >
            About
          </ScrollLink>
        </li>
        <li className="hidden sm:block">
          <ScrollLink
            to="class"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="text-logoorange mx-8 hover:text-white text-3xl cursor-pointer"
          >
            Class
          </ScrollLink>
        </li>
        <li className="hidden sm:block">
          <ScrollLink
            to="original"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="text-logoorange mx-8 hover:text-white text-3xl cursor-pointer"
          >
            Original
          </ScrollLink>
        </li>
        <li className="hidden sm:block">
          <a
            href="https://www.youtube.com/@simply_acoustic"
            target="blank"
            className="text-logoorange mx-8 hover:text-white text-3xl"
          >
            <span className="pi pi-youtube"></span>
          </a>
        </li>
        <li className="hidden sm:block ">
          <a
            href="https://open.spotify.com/artist/4KnIROp6fDMlRUbZHIPv78"
            target="blank"
            className=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-16 scale-50 -translate-y-9 fill-logoorange hover:fill-white "
            >
              <path d="M32 0C14.3 0 0 14.337 0 32c0 17.7 14.337 32 32 32 17.7 0 32-14.337 32-32S49.663 0 32 0zm14.68 46.184c-.573.956-1.797 1.223-2.753.65-7.532-4.588-16.975-5.62-28.14-3.097-1.07.23-2.14-.42-2.37-1.49s.42-2.14 1.49-2.37c12.196-2.79 22.67-1.606 31.082 3.556a2 2 0 0 1 .688 2.753zm3.9-8.717c-.726 1.185-2.256 1.53-3.44.84-8.602-5.276-21.716-6.805-31.885-3.747-1.338.382-2.714-.344-3.097-1.644-.382-1.338.344-2.714 1.682-3.097 11.622-3.517 26.074-1.835 35.976 4.244 1.147.688 1.49 2.217.765 3.403zm.344-9.1c-10.323-6.117-27.336-6.69-37.2-3.708-1.568.497-3.25-.42-3.747-1.988s.42-3.25 1.988-3.747c11.317-3.44 30.127-2.753 41.98 4.282a2.984 2.984 0 0 1 1.032 4.09c-.765 1.453-2.638 1.912-4.053 1.07z" />
            </svg>
          </a>
        </li>
        <li className="hidden sm:block">
          <a
            href="https://www.instagram.com/simply_acoustic/"
            target="blank"
            className="text-logoorange mx-8 hover:text-white text-3xl"
          >
            <span className="pi pi-instagram"></span>
          </a>
        </li>
      </ul>

      {/* Mobile view */}
      <ul
        className={` sm:hidden sm:-z-50 fixed inset-0 flex flex-col justify-center items-center text-3xl h-screen w-screen bg-black bg-opacity-90 space-y-10 transition-opacity duration-300 ease-in-out ${
          sidebarOpen ? "opacity-100 visibility-visible" : "opacity-0 -z-40"
        } ${isTransitioning ? "visibility-visible " : ""}`}
      >
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="text-logoorange hover:text-white cursor-pointer"
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="class"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="text-logoorange mx-3 hover:text-white cursor-pointer"
          >
            Class
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="original"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="text-logoorange hover:text-white cursor-pointer"
          >
            Originals
          </ScrollLink>
        </li>
        <li className="pb-4">
          <a
            href="https://www.youtube.com/@simply_acoustic"
            className="text-logoorange hover:text-white"
          >
            <span className="pi pi-youtube"></span>
          </a>
        </li>
        <li className="pb-10 ">
          <a
            href="https://open.spotify.com/artist/4KnIROp6fDMlRUbZHIPv78"
            className="text-logoorange hover:text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 scale-50 -translate-y-9 fill-logoorange hover:fill-white  "
            >
              <path d="M32 0C14.3 0 0 14.337 0 32c0 17.7 14.337 32 32 32 17.7 0 32-14.337 32-32S49.663 0 32 0zm14.68 46.184c-.573.956-1.797 1.223-2.753.65-7.532-4.588-16.975-5.62-28.14-3.097-1.07.23-2.14-.42-2.37-1.49s.42-2.14 1.49-2.37c12.196-2.79 22.67-1.606 31.082 3.556a2 2 0 0 1 .688 2.753zm3.9-8.717c-.726 1.185-2.256 1.53-3.44.84-8.602-5.276-21.716-6.805-31.885-3.747-1.338.382-2.714-.344-3.097-1.644-.382-1.338.344-2.714 1.682-3.097 11.622-3.517 26.074-1.835 35.976 4.244 1.147.688 1.49 2.217.765 3.403zm.344-9.1c-10.323-6.117-27.336-6.69-37.2-3.708-1.568.497-3.25-.42-3.747-1.988s.42-3.25 1.988-3.747c11.317-3.44 30.127-2.753 41.98 4.282a2.984 2.984 0 0 1 1.032 4.09c-.765 1.453-2.638 1.912-4.053 1.07z" />
            </svg>
          </a>
        </li>
        <li className=" -translate-y-24">
          <a
            href="https://www.instagram.com/simply_acoustic/"
            className="text-logoorange hover:text-white"
          >
            <span className="pi pi-instagram"></span>
          </a>
        </li>
      </ul>
      <div className="bg-black">
        <img
          src={sir1}
          alt="Background"
          className="w-screen fill-none bg-no-repeat"
        />
      </div>
      <div className="absolute block sm:hidden right-5 top-4 scale-150">
        <NavMenu toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from 'react';

// const Burger = () => {
//   const [isChecked, setIsChecked] = useState(false);

//   return (
//     <label className="relative w-10 h-7 cursor-pointer block" htmlFor="burger">
//       <input
//         type="checkbox"
//         id="burger"
//         className="hidden"
//         checked={isChecked}
//         onChange={() => setIsChecked(!isChecked)}
//       />
//       <span
//         className={`block absolute h-1 w-full bg-black rounded-lg left-0 transition-transform duration-300 ease-in-out ${
//           isChecked ? 'rotate-45 top-0 left-1' : 'top-0'
//         }`}
//       ></span>
//       <span
//         className={`block absolute h-1 w-full bg-black rounded-lg left-0 transition-transform duration-300 ease-in-out ${
//           isChecked ? 'w-0 opacity-0' : 'top-1/2 -translate-y-1/2'
//         }`}
//       ></span>
//       <span
//         className={`block absolute h-1 w-full bg-black rounded-lg left-0 transition-transform duration-300 ease-in-out ${
//           isChecked ? '-rotate-45 top-7 left-1' : 'top-full -translate-y-full'
//         }`}
//       ></span>
//     </label>
//   );
// };

// export default Burger;
