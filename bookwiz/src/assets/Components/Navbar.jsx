import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

    // Signup Navigation
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

      // Login Navigation

      // Return the Active tab of Nav Menu
    const handleclick = (item) => {
      setActiveItem(item);
    };

    return (
      <div className="w-screen h-[50px] justify-center items-center">
        {/* Routes for Signup and Login pages */}

        <div className="m-auto w-full h-full flex justify-between items-center">
          {/* Text Logo */}
          <span className=" ml-[80px] mt-[40px] font-[museomoderno] text-[30px] font-bold text-white ">
            BookWiz
          </span>
          {/* NavBar Items */}
          <div className="  flex items-center col-auto translate-x-[70px] translate-y-[30px] text-white">
            <ul className="flex gap-[50px] items-center font-[montserrat] font-semibold text-[15px]">
              <a
                href="/home"
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
                  activeItem === "About"
                    ? "border-b-[2px] border-[#0077B6]"
                    : ""
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
          <div className="ml-[127px] mt-[54px] pr-[80px] ">
            <button
              className=" font-[montserrat] font-semibold text-[15px] text-white  py-2 px-4 rounded-full hover:text-slate-400"
              onClick={handleLogin}
            >
              Login
            </button>

            <button
              className="bg-[#0077B6] text-white font-[montserrat] font-semibold text-[15px] py-2 px-8 rounded-md hover:bg-[#005580]"
              onClick={handleSignup}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
 };

 export default Navbar;

