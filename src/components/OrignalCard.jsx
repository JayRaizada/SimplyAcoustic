export const OrignalsCard = ({ title, image, youtube }) => {
  return (
    <div
      className=" p-2 rounded-xl shadow-lg m-1 border-double border-4 max-w-sm bg-white w-96 flex 
                  sm:max-w-64 sm:rounded-lg sm:p-1"
    >
      <div className="">
        <img
          src={image}
          alt="song"
          className=" h-28 rounded-2xl shadow-lg sm:h-12 sm:rounded-sm"
        />
      </div>
      <div className=" mt-2 ml-6 sm:mt-0 sm:ml-2 ">
        <h1 className=" text-2xl sm:text-sm ">{title}</h1>
        <a href={youtube} target="blank" className="text-xl sm:text-xs">
          youtube
        </a>
      </div>
    </div>
  );
};
