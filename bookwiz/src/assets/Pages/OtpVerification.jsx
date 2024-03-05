import { Bg1 } from "../Images"



const OtpVerification = () => {
  return (
    <div className="w-full h-screen flex items-start bg-neutral-300">
      <div className="w-full h-full flex flex-col shadow-2xl shadow-slate-950">
        <img src={Bg1} className="h-screen object-cover blur-sm" />
         <div className="absolute w-full h-full bg-black opacity-80 shadow-2xl"></div>
      </div>
    </div>
  );
}

export default OtpVerification