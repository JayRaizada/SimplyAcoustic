import { Imageslider } from "./Imageslider";

export const Class = () => {
  return (
    <div className=" bg-classbg  text-white">
      <span
        id="class"
        className="flex justify-center my-4 text-4xl text-logoorange pt-4"
      >
        Class
      </span>
      <p className="text-md sm:text-2xl mx-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia
        excepturi dolorum aliquid nostrum laudantium optio vero debitis
        recusandae reiciendis veritatis ducimus laborum dicta explicabo tempora
        nisi voluptates cumque distinctio cum, et aspernatur repudiandae.
        Expedita libero, quos culpa rerum id placeat! Iusto, ex fuga recusandae
        inventore maxime in itaque sunt. Illo dolorum ullam laboriosam magnam
        reiciendis, sapiente deserunt dignissimos asperiores voluptate expedita
        aspernatur necessitatibus ad reprehenderit non quisquam iste impedit
        numquam ea soluta iure ipsam, unde, eligendi velit suscipit! Enim
        commodi eligendi ducimus architecto nisi dolor mollitia earum
        laudantium, accusamus repellat officia error ea dolorum recusandae
        quibusdam debitis necessitatibus porro ipsum voluptatibus eos!
      </p>
      <div className=" flex items-center justify-center p-4">
        <Imageslider />
      </div>
      <div className="location">
        <p className="text-md sm:text-2xl mx-10 pb-4">
          <span className="pi pi-map-marker mr-1"></span> Simply acoustic guitar
          classes, 08-Mukati Nagar Rd, near bengali square, Telephone Nagar,
          Indore, Madhya Pradesh 452016
        </p>
      </div>
      <div className="map flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14720.621714139284!2d75.89472162449914!3d22.722463617538587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3005f64ed9b%3A0x9ec468f16f6ae294!2sSimply%20acoustic%20guitar%20classes!5e0!3m2!1sen!2sin!4v1723798092984!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=" w-[95vw] max-h-[70vh] pb-8"
        ></iframe>
      </div>
    </div>
  );
};
