import { useState } from "react";
import GetStartedbtn from "./GetStartedbtn";
import BookwizLogo from "./BookwizLogo";




const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleclick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="max-w-[1920px] h-[80px]">
      {/* Text Logo */}
      <div className="m-auto w-full h-full flex justify-between items-center">
        <BookwizLogo/>
        {/* NavBar Items */}
        <div className=" ml-[247px] mt-[51px] flex items-center col-auto text-white">
          <ul className="flex gap-[40px] items-center font-[montserrat] font-semibold text-[15px]">
            <a
              href="#"
              className={`hover:text-slate-400 ${
                activeItem === "Home" ? "border-b-[2px] border-[#0077B6]" : ""
              }`}
              onClick={() => handleclick("Home")}
            >
              <li>Home</li>
            </a>

            <a
              href="#"
              className={`hover:text-slate-400 ${
                activeItem === "About" ? "border-b-[2px] border-[#0077B6]" : ""
              }`}
              onClick={() => handleclick("About")}
            >
              <li>About</li>
            </a>

            <a
              href="#"
              className={`hover:text-slate-400 ${
                activeItem === "Fetures"
                  ? "border-b-[2px] border-[#0077B6]"
                  : ""
              }`}
              onClick={() => handleclick("Fetures")}
            >
              <li>Fetures</li>
            </a>

            <a
              href="#"
              className={`hover:text-slate-400 ${
                activeItem === "FAQ" ? "border-b-[2px] border-[#0077B6]" : ""
              }`}
              onClick={() => handleclick("FAQ")}
            >
              <li>FAQ</li>
            </a>
            <a
              href="#"
              className={`hover:text-slate-400 ${
                activeItem === "Contacts"
                  ? "border-b-[2px] border-[#0077B6]"
                  : ""
              }`}
              onClick={() => handleclick("Contacts")}
            >
              <li>Contacts</li>
            </a>
          </ul>
        </div>
        {/* Login and Signup Buttons */}
        <div className="ml-[127px] mt-[54px] pr-[80px]">
          <button className=" font-[montserrat] font-semibold text-[15px] text-white  py-2 px-4 rounded-full hover:text-slate-400">
            Login
          </button>
          <GetStartedbtn/>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar