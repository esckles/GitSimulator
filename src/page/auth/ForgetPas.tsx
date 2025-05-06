/* eslint-disable @typescript-eslint/no-explicit-any */
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ForgetUSerAccountPassword } from "../../api/api";
import { CgSpinner } from "react-icons/cg";

const ForgetPas = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setloading(true);

    ForgetUSerAccountPassword(email)
      .then((res) => {
        setloading(false);
        if (res.status === 200) {
          navigate("/auth/forget-ps-nt");
        } else {
          toast.error("Error with email");
        }
      })
      .finally(() => {
        setloading(false);
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
                email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter email"
                className="text-[11px] font-semibold rounded-md outline-none py-2 p-2 border-black border-[1.2px]"
              />
            </div>
            <div className="flex flex-col  mt-4">
              <button
                // onSubmit={handleSubmit}
                disabled={loading}
                className={
                  loading
                    ? "py-2 rounded-md bg-[#030712] text-white font-semibold text-[14px]  flex items-center justify-center"
                    : "py-2 rounded-md  bg-blue-950 text-white font-semibold text-[14px]  flex items-center justify-center"
                }
              >
                {loading ? <CgSpinner /> : "Submit"}
              </button>
              <div className=" flex items-center justify-center gap-1 mt-2">
                <p className="font-semibold text-[10px]">want to try again</p>
                <Link
                  className="underline font-semibold text-[10px]"
                  to="/auth/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPas;
