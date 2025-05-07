/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

// const URL: any = "http://localhost:2525/api_v1";
// const URL: any = ``;
const URL: string = process.env.VITE_API_URL || `http://localhost:2525/api_v1`;
// const URL: any = import.meta.env.VITE_API_URL || "http://localhost:2525/api_v1";

export const RegisterUSerAccount = async (data: any) => {
  try {
    return await axios
      .post(`${URL}/register-account`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const VerifyUSerAccount = async (userID: any, otp: string) => {
  try {
    return await axios
      .post(`${URL}/verify-account/${userID}`, { otp })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const LoginUSerAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/login-account`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const ReadOneUSerAccount = async (userID: string) => {
  try {
    return await axios
      .get(`${URL}/readone-account/${userID}`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const ReadAllUSerAccount = async () => {
  try {
    return await axios.get(`${URL}/readall-account`).then((res: any) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};

export const ForgetUSerAccountPassword = async (email: string) => {
  try {
    return await axios
      .patch(`${URL}/forget-account-password`, { email })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const ChangeUSerAccount = async (userID: string, password: string) => {
  try {
    return await axios
      .patch(`${URL}/change-account-password/${userID}`, {
        password,
      })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};
