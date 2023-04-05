import React, { useState } from "react";
import { BoltIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ActiveNav from "./ActiveNav";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100 px-4 py-5  ">
      <div className=" flex justify-between items-center  relative z-0">
        <div className="flex items-center gap-2  ">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <Link to={`/`} className="text-2xl font-bold ">
            nextPage
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-8 font-bold">
          <ActiveNav to={`/`}>Home</ActiveNav>
          <ActiveNav to={`/books`}>Books</ActiveNav>
          <ActiveNav to={`/about`}>About Us</ActiveNav>
        </div>
        <div
          aria-label="Open Menu"
          title="Open Menu"
          onClick={() => setOpen(!open)}
          className="static lg:hidden"
        >
          <Bars3Icon className="h-6 w-6 text-gray-500" />
        </div>
        {/* mobile device */}
        {open && (
          <div className=" flex justify-between  w-full  absolute top-1 left-0 z-10 bg-white rounded shadow-2xl">
            <div className="flex flex-col items-center p-5 font-bold">
              <div className="flex  items-center gap-2  ">
                <BoltIcon className="h-6 w-6 text-blue-500" />
                <Link to={`/`} className="text-2xl font-bold ">
                  nextPage
                </Link>
              </div>
              <div>
                <ActiveNav to={`/`}>Home</ActiveNav>
                <ActiveNav to={`/books`}>Books</ActiveNav>
                <ActiveNav to={`/about`}>About Us</ActiveNav>
              </div>
            </div>
            <div
              aria-label="Close Menu"
              title="Close Menu"
              onClick={() => setOpen(!open)}
              className="static lg:hidden p-5 font-bold"
            >
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
