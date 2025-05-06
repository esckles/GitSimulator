import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const RegisterNotification = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="w-full h-screen flex items-center justify-center font-semibold bg-[#030712] text-white lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px]">
      An email has been sent to you for account verification
    </div>
  );
};

export default RegisterNotification;
