// import { useState, useEffect } from 'react';
// import { StaticImageData } from "next/image";
import style from './component.module.css'

const Carousel = ({
  items,
}: {
  items: React.ReactNode[];
}) => {
  // console.log(items)
  return (
    <div className={style["carousel"]}>
      <div className={style["carousel-container"]}>
        <div className={style["carousel-track"]}>
          {items.map((item, index) => (
            <div className={style["carousel-image-container"]} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
