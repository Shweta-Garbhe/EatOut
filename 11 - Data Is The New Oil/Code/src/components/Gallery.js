import Carousel from "better-react-carousel";

const Gallery = () => {
  return (
    <div className="gallery">
      <Carousel cols={5} rows={1} gap={10} loop>
        <Carousel.Item>
          <img
            src={require("../../public/gallery1.png")}
            alt="gallery-1"
            className="img-gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery2.png")}
            alt="gallery-2"
            className="img-gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery3.png")}
            alt="gallery-3"
            className="img-gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery4.png")}
            alt="gallery-4"
            className="img-gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery5.png")}
            alt="gallery-5"
            className="img-gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery6.png")}
            alt="gallery-6"
            className="img-gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery7.png")}
            alt="gallery-7"
            className="img-gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery8.png")}
            alt="gallery-5"
            className="img-gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery9.png")}
            alt="gallery-9"
            className="img-gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/gallery10.png")}
            alt="gallery-10"
            className="img-gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/sz.jpg")}
            alt="gallery-11"
            className="img-gallery img-gallery-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/biryani.jpg")}
            alt="gallery-12"
            className="img-gallery img-gallery-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/choco.jpg")}
            alt="gallery-13"
            className="img-gallery img-gallery-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/pizzac.jpg")}
            alt="gallery-14"
            className="img-gallery img-gallery-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../public/noodles.jpg")}
            alt="gallery-15"
            className="img-gallery img-gallery-cover"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Gallery;
