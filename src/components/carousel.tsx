// import { useState, useEffect } from 'react';
// import { StaticImageData } from "next/image";
import './component.css'

const Carousel = ({
  items,
}: {
  items: JSX.Element[];
}) => {
  // console.log(items)
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {items.map((item, index) => (
          <div className="carousel-image-container" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
