import axios, { AxiosError } from "axios";
import {
  SignUpFormData, AuthResponse, LoginInterface,
  LoginResponse, OtpInterface
} from "../types/auths";
import { SERVER_BASE_URL } from "../Constants/path"
import { toast } from 'react-toastify'

export function useRegister() {
  return async (data: SignUpFormData): Promise<boolean> => {
    try {
      const response = await axios.post<AuthResponse>(
        `${SERVER_BASE_URL}/auth/register`,
        data,
      );

      const result = response?.data;
      console.log("Register Response:", result);

      if (result.code) {
        toast.success(result.message);
      }

      if (result.success === true || result.code === 200 || result.code === 0) {
        return true;
      }

      return false;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message?: any }>;
      const errorMessage = axiosError.response?.data?.message || "An error occurred while registering.";

      console.error("Error:", errorMessage);
      toast.error(errorMessage);

      return false;
    }
  };
}

export function useLogin() {
  return async (data: LoginInterface): Promise<LoginResponse | null> => {
    try {
      console.log("📤 Sending login data:", data);

      const { data: result } = await axios.post<LoginResponse>(
        `${SERVER_BASE_URL}/auth/login`,
        data,
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true, // enable if your API uses cookies
        }
      );

      console.log("✅ Login API response:", result);

      // ✅ Handle success
      if (result.success) {
        toast.success(result.message ?? "Login successful");
        return result;
      }

      // ❌ Handle known API failure
      toast.error(result.message ?? "Error occurred while logging in");
      return null;

    } catch (err) {
      // 🧱 Normalize error
      const error = err as AxiosError<{ message?: string }>;
      const status = error.response?.status;
      const message =
        error.response?.data?.message ??
        (status === 500
          ? "Server error, please try again later."
          : "Network or login error.");

      console.error("❌ Login request failed:", message);
      toast.error(message);
      return null;
    }
  };
}

export function useOtp() {
  return async (data: OtpInterface): Promise<boolean | null> => {
    try {
      console.log("📤 Sending login data:", data);

      const { data: result } = await axios.post<AuthResponse>(
        `${SERVER_BASE_URL}/auth/verify-otp`,
        data,
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true, // enable if your API uses cookies
        }
      );

      console.log("✅ OTP API response:", result);

      // ✅ Handle success
      if (result.success) {
        toast.success(result.message ?? "OTP verified successfully");
        return true;
      }

      // ❌ Handle known API failure
      toast.error(result.message ?? "Error occurred while verifying OTP");
      return null;

    } catch (err) {
      // 🧱 Normalize error
      const error = err as AxiosError<{ message?: string }>;
      const status = error.response?.status;
      const message =
        error.response?.data?.message ??
        (status === 500
          ? "Server error, please try again later."
          : "Network or login error.");

      console.error("❌ OTP request failed:", message);
      toast.error(message);
      return null;
    }
  };
}

