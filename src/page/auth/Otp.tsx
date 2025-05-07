/* eslint-disable @typescript-eslint/no-explicit-any */
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VerifyUSerAccount } from "../../api/api";
import { CgSpinner } from "react-icons/cg";

const Otp = () => {
  const [otp, setOtp] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setloading(true);

    if (!id) {
      toast.error("user id not found");
      setloading(false);
      return;
    }

    VerifyUSerAccount(id, otp)
      .then((res) => {
        setloading(false);
        if (res.status === 201) {
          navigate("/auth/login");
        } else {
          toast.error("Error with verify process");
        }
      })
      .catch(() => {
        setloading(false);
        toast.error("Error");
      });
  };

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center bg-[#111827] flex-col">
        <Toaster />
        <div className="w-[80%] md:w-[40%] lg:w-[25%] rounded-md shadow-lg bg-white p-[3%]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-[12px]">
                enter the otp code given to you below
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="enter otp"
                className="text-[11px] font-semibold rounded-md outline-none py-2 p-2 border-black border-[1.2px]"
              />
            </div>
            <div className="flex flex-col  mt-4">
              <button
                onSubmit={handleSubmit}
                disabled={loading}
                className={
                  loading
                    ? "py-2 rounded-md bg-[#030712] text-white font-semibold text-[14px]  flex items-center justify-center"
                    : "py-2 rounded-md  bg-blue-950 text-white font-semibold text-[14px]  flex items-center justify-center"
                }
              >
                {loading ? <CgSpinner /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;
