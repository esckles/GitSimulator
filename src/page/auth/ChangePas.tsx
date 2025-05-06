/* eslint-disable @typescript-eslint/no-explicit-any */
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChangeUSerAccount } from "../../api/api";
import { CgSpinner } from "react-icons/cg";
import { jwtDecode } from "jwt-decode";

const ChangePas = () => {
  const { token } = useParams();
  const [password, setPassword] = useState<string>("");
  const [comfirmpassword, setcomfirmpassword] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setloading(true);

    const decoded: any = jwtDecode(token!);
    if (password === comfirmpassword) {
      ChangeUSerAccount(decoded?.id, password)
        .then((res) => {
          if (res.status === 200) {
            navigate("/dashboard");
          } else {
            toast.error("Error with change password");
          }
        })
        .finally(() => {
          setloading(false);
        });
    } else {
      toast.error("error");
    }
  };

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center bg-[#111827] flex-col">
        <Toaster />
        <div className="w-[80%] md:w-[40%] lg:w-[25%] rounded-md shadow-lg bg-white p-[3%]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-[12px]">
                password
              </label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter password"
                className="text-[11px] font-semibold rounded-md outline-none py-2 p-2 border-black border-[1.2px]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-[12px]">
                comfirmpassword{" "}
              </label>
              <input
                type="text"
                value={comfirmpassword}
                onChange={(e) => setcomfirmpassword(e.target.value)}
                placeholder="enter comfirmpassword"
                className="text-[11px] font-semibold rounded-md outline-none py-2 p-2 border-black border-[1.2px]"
              />
            </div>
            <div className="flex flex-col  mt-4">
              <button
                type="submit"
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

export default ChangePas;
