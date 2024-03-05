import {
  LandingPage,
  Login,
  Otpverification,
  Signup,
  Staffprofile,
  Studentprofile,
  Teacherprofile,
  Userdashboard,
  Userprofile,
} from "./assets/Pages";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otpverification" element={<Otpverification />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/studentprofile" element={<Studentprofile />} />
        <Route path="/teacherprofile" element={<Teacherprofile />} />
        <Route path="/staffprofile" element={<Staffprofile />} />
        <Route path="/userdashboard" element={<Userdashboard />} />
      </Routes>
    </>
  );
};

export default App;
