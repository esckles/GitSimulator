/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, FC, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider: FC<any> = ({ children }) => {
  const [userID, setuserID] = useState<string>(
    JSON.parse(localStorage.getItem("authy")!)
  );
  return (
    <GlobalContext.Provider value={{ userID, setuserID }}>
      {children}
    </GlobalContext.Provider>
  );
};
