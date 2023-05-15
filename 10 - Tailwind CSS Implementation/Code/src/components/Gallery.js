import Carousel from "better-react-carousel";

const Gallery = () => {
  return (
    <div className="pt-8 pb-8 pl-12 pr-12 bg-slate-200">
      <Carousel cols={5} rows={1} gap={10} loop className="pt-2">
        <Carousel.Item>
          <img
            src={require("../../public/gallery1.png")}
            alt="gallery-1"
            className="border border-solid border-gray-300 shadow-gray-300 h-60 w-[16.5rem] object-fill"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery2.png")}
            alt="gallery-2"
            className="border border-solid border-gray-300 shadow-gray-300 h-60 w-[16.5rem] object-fill"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery3.png")}
            alt="gallery-3"
            className="border border-solid border-gray-300 shadow-gray-300 h-60 w-[16.5rem] object-fill"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery4.png")}
            alt="gallery-4"
            className="border border-solid border-gray-300 shadow-gray-300 h-60 w-[16.5rem] object-fill"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery5.png")}
            alt="gallery-5"
            className="border border-solid border-gray-300 shadow-gray-300 h-60 w-[16.5rem] object-fill"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery6.png")}
            alt="gallery-6"
            className="border border-solid border-gray-300 shadow-gray-300 rounded h-60 w-[16.5rem] object-fill"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery7.png")}
            alt="gallery-7"
            className="border border-solid border-gray-300 shadow-gray-300 rounded h-60 w-[16.5rem] object-fill"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery8.png")}
            alt="gallery-5"
            className="border border-solid border-gray-300 shadow-gray-300 rounded h-60 w-[16.5rem] object-fill"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery9.png")}
            alt="gallery-9"
            className="border border-solid border-gray-300 shadow-gray-300 rounded h-60 w-[16.5rem] object-fill"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery10.png")}
            alt="gallery-10"
            className="border border-solid border-gray-300 shadow-gray-300 rounded h-60 w-[16.5rem] object-fill"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/sz.jpg")}
            alt="gallery-11"
            className="border border-solid border-gray-300 shadow-gray-300 rounded h-60 w-[16.5rem] object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/biryani.jpg")}
            alt="gallery-12"
            className="border border-solid border-gray-300 shadow-gray-300 rounded h-60 w-[16.5rem] object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/choco.jpg")}
            alt="gallery-13"
            className="border border-solid border-gray-300 shadow-gray-300 rounded h-60 w-[16.5rem] object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/pizzac.jpg")}
            alt="gallery-14"
            className="border border-solid border-gray-300 shadow-gray-300 rounded h-60 w-[16.5rem] object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/noodles.jpg")}
            alt="gallery-15"
            className="border border-solid border-gray-300 shadow-gray-300 rounded h-60 w-[16.5rem] object-cover"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Gallery;
