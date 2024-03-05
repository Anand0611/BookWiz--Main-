import Navbar from "../Components/Navbar";
import { Bg1 } from "../Images";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const navigate = useNavigate();

    const handleSignup = () => {
      navigate("/signup");
    };

    const handleLogin = () => {
      navigate("/login");
    };

  return (
    <section
      style={{ backgroundImage: `url(${Bg1})` }}
      className="w-screen h-screen bg-cover  bg-center bg-blend-overlay bg-gray-900"
    >
      <div className="items-center  flex flex-col">
        <Navbar />
      </div>
      <div className="text-white font-[Montserrat] text-[50px] mt-[250px] items-center flex flex-col">
        <span className=" uppercase tracking-[10px]">Welcome to</span>
        <div>Your Ultimate Library Companion</div>
        <div className="text-[25px] mt-[30px] text-center text-gray-400">
          <p>
            Step into the future of library management with BookWiz. Streamline
            borrowing,
            <br /> explore new reads, and embark on literary adventures like
            never before.
          </p>
        </div>
        <div>
          <button
            className="bg-[#0077B6] text-white font-[montserrat] font-semibold text-[15px] py-2 px-8 rounded-md hover:bg-[#005580]"
            onClick={handleSignup}
          >
            Get Started
          </button>
          <span className="text-[20px] p-[20px]">- Or -</span>
          <button
            className="bg-[#757DE8] text-black font-[montserrat] font-semibold text-[15px] py-2 px-8 rounded-md hover:bg-[#565ca8] hover:text-white"
            onClick={handleLogin}
          >
            Login Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
