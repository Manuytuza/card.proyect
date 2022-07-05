import React from "react";
import Card from "./Card";

import image1 from "./assets/2.jpg";
import image2 from './assets/3.jpg';
import image3 from './assets/1.webp';

const cards = [
  {
    id: 1,
    title: "Polo",
    image: image1,
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Jean",
    image: image2,
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Casaca",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
