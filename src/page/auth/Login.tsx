/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginUSerAccount } from "../../api/api";
import { CgSpinner } from "react-icons/cg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
// import { GlobalContext } from "../../global/globalProvider";
// import { jwtDecode } from "jwt-decode";

const Login = () => {
  // const { setuserID }: any = useContext(GlobalContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const [openpassword, setclosepassword] = useState(false);
  // const { token } = useParams();
  const navigate = useNavigate();

  const handleopen = () => {
    setclosepassword(!openpassword);
  };

  // useEffect(() => {
  //   if (token) {
  //     const decoded: any = jwtDecode(token!);
  //     VerifyUSerAccount(decoded?.id);
  //   }
  // }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setloading(true);

    LoginUSerAccount({ email, password })
      .then((res) => {
        setloading(false);
        if (res.status === 201) {
          const getID: any = jwtDecode(res.data!);
          localStorage.setItem("authy", JSON.stringify(getID?.id));
          navigate("/dashboard");
          toast.success("Login successfully");
        } else {
          toast.error(res.response?.data?.message || "Login failed");
        }
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <div>
      <Toaster />
      <div className="w-full h-screen flex items-center justify-center bg-[#111827] flex-col">
        <div className="w-[60%] md:w-[40%] lg:w-[25%] rounded-xl shadow-lg bg-white p-10 sm:w-[50%]">
          <form onSubmit={handleSubmit}>
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
                  type={openpassword ? "text" : "password"}
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="enter userpassword"
                  className="text-[11px] font-semibold rounded-md outline-none py-2 p-2 border-black border-[1.2px]"
                />
                <div className="mt-2 ml-3" onClick={handleopen}>
                  {openpassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>
            <div className="flex-col flex">
              <Link
                className="w-[80px] py-2 border-[1.2px] text-center rounded-md text-[9px] mt-2  font-semibold border-black"
                to="/auth/forget-ps"
              >
                forget password
              </Link>
            </div>
            <div className="flex flex-col  mt-4">
              <button
                className={
                  loading
                    ? "py-3 rounded-md bg-[#030712] text-white font-semibold text-[14px]  flex items-center justify-center"
                    : "py-2 rounded-md  bg-blue-950 text-white font-semibold text-[14px]  flex items-center justify-center"
                }
              >
                {loading ? <CgSpinner /> : "Submit"}
              </button>
              <div className=" flex items-center justify-center gap-1 mt-2">
                <p className="font-semibold text-[8px] sm:text-[11px] md:text-[12px] lg:text-[13px] ">
                  if you do not have an account
                </p>
                <Link
                  className="underline font-semibold text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px]"
                  to="/auth"
                >
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
