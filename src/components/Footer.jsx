export const Footer = ()=>{
    return (
      <div className="bg-black text-logoorange mt-4 flex flex-col justify-center items-center">
        <p className="text-3xl mb-4">Follow Us</p>
        <ul className="flex flex-row  ">
          <li className="">
            <a
              href="https://www.youtube.com/@simply_acoustic"
              target="blank"
              className="text-logoorange mx-8 hover:text-white text-3xl"
            >
              <span className="pi pi-youtube"></span>
            </a>
          </li>
          <li className="h-12 overflow-hidden">
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
          <li className="">
            <a
              href="https://www.instagram.com/simply_acoustic/"
              target="blank"
              className="text-logoorange mx-8 hover:text-white text-3xl"
            >
              <span className="pi pi-instagram"></span>
            </a>
          </li>
        </ul>
      </div>
    );
}