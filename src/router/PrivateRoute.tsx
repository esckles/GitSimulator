/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useContext } from "react";
import { GlobalContext } from "../global/globalProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<any> = ({ children }) => {
  const { userID }: any = useContext(GlobalContext);

  // Add a loading state if needed
  //   if (userID === undefined) {
  //     return <div>Loading...</div>; // Or a spinner
  //   }

  return (
    <div>{userID ? <div>{children}</div> : <Navigate to="/auth/login" />}</div>
  );
};

export default PrivateRoute;
