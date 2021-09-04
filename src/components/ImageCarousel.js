import Carousel from "react-bootstrap/Carousel";

import React from "react";

export default function ImageCarousel(props) {
  const images = props.selectedImg.image_list;

  return (
    <div>
      <h1> {props.selectedImg.title} </h1>
      <Carousel>
        {images.map((i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={i}
              alt="First slide"
              style={{ maxHeight: "80vh" }}
            />
            <Carousel.Caption>
              <h3>{images.indexOf(i) + 1}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
