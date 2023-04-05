import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, isbn13, price, title, subtitle } = book;

  return (
    <Link to={`/book/${isbn13}`}>
      <div className="w-full shadow-2xl relative rounded transition duration-200 transform hover:-translate-y-2">
        <img className="object-cover w-full" src={image} alt="cover image" />
        <div className="bg-black  text-gray-300 p-4 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-200 absolute inset-0 rounded flex flex-col">
          <h1 className="font-bold text-xl">{title}</h1>
          <br />
          <h3>{subtitle.substring(0, 40)}...</h3>
          <p className="mt-auto">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
