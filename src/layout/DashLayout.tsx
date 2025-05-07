// import { Outlet } from "react-router-dom";
// import TwoSwitch from "../page/Dash/DHead/TwoSwitch";

// const DashLayout = () => {
//   return (
//     <div
//       className="flex flex-col lg:flex-row font-medium min-h-screen"
//       style={{ fontFamily: "Poppins" }}
//     >
//       <div className="w-full lg:w-[20%] md:w-[30%] border-2 border-black flex flex-col py-5">
//         <div className="w-full flex flex-col items-center gap-4 text-sm px-4 ">
//           {[
//             "Certificate",
//             "Track full progress",
//             "Account Details",
//             "Log out",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="w-full max-w-[200px] h-[40px] flex items-center justify-center bg-gray-400 cursor-pointer"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//         <div className="w-full h-[50%] border-t mt-5 border-black  hidden lg:block"></div>
//       </div>

//       <div className="w-full lg:w-[80%] flex justify-center items-start p-4">
//         <div className="w-full lg:w-[70%] md:w-[70%]  max-w-5xl border-black border-[2px] rounded-md p-4">
//           <TwoSwitch />
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashLayout;

import { Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashLayout;
