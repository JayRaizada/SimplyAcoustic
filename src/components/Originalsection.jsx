import { OrignalsCard } from "./OrignalCard";
import { originalArr } from "./orignals";

export const Originalsection = () => {
  return (
    <div className="flex flex-col justify-center ">
      <span id="original" className="flex justify-center m-4 text-2xl sm:text-4xl">
        Originals
      </span>
      <p className="text-md sm:text-2xl mx-10 sm:pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia
        excepturi dolorum aliquid nostrum laudantium optio vero debitis
        recusandae reiciendis veritatis ducimus laborum dicta explicabo tempora
        nisi voluptates cumque distinctio cum, et aspernatur repudiandae.
      </p>
      <div className="flex justify-center">
        <iframe
          src="https://open.spotify.com/embed/artist/4KnIROp6fDMlRUbZHIPv78?utm_source=generator&theme=0"
          width="100%"
          height="452"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className=" max-w-full mx-4 "
        ></iframe>
      </div>
    </div>
  );
};
