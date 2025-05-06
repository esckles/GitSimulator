/* eslint-disable @typescript-eslint/no-explicit-any */
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUSerAccount } from "../../api/api";
import { CgSpinner } from "react-icons/cg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [openpassword, setclosepassword] = useState<boolean>(false);

  const handleopen = () => {
    setclosepassword(!openpassword);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setloading(true);

    RegisterUSerAccount({ name, email, password })
      .then((res) => {
        if (res.status === 201) {
          navigate("/auth/register-nt");
        } else {
          toast.error("Error with registeration");
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center bg-[#111827] flex-col">
        <Toaster />
        <div className="w-[60%] md:w-[40%] lg:w-[25%] rounded-xl shadow-lg bg-white p-10 sm:w-[50%]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-[12px]">
                name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="enter username"
                className="text-[11px] font-semibold rounded-md outline-none py-2 p-2 border-black border-[1.2px] mb-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-[12px]">
                email
              </label>
              <input
                required
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter useremail"
                className="text-[11px] font-semibold rounded-md outline-none py-2 p-2 border-black border-[1.2px] mb-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-[12px]">
                password
              </label>
              <div className="flex">
                <input
                  required
                  type={openpassword ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="enter userpassword"
                  className="text-[11px] font-semibold rounded-md outline-none py-2 p-2 border-black border-[1.2px]"
                />
                <div onClick={handleopen} className="mt-2 ml-2">
                  {openpassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>
            <div className="flex flex-col  mt-4">
              <button
                className={
                  loading
                    ? "py-3 rounded-md bg-[#030712] text-white font-semibold text-[14px] flex items-center justify-center"
                    : "py-2 rounded-md  bg-blue-950 text-white font-semibold text-[14px]flex items-center justify-center"
                }
              >
                {loading ? <CgSpinner /> : "Submit"}
              </button>
              <div className=" flex items-center justify-center gap-1 mt-2">
                <p className="font-semibold text-[8px] sm:text-[11px] md:text-[12px] lg:text-[13px]">
                  if you already have an account
                </p>
                <Link
                  className="underline font-semibold text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px]"
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

export default Register;
