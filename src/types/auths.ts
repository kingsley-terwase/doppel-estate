export interface SignUpFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  remember: boolean;

}

export interface realtorFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  dob?: string | undefined;
  gender?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: any;
  code: number;
}

export interface OtpInterface{
  otp: number | undefined;
  email: string;
  otp_type: string;
}


export interface LoginInterface {
  email: string;
  password: string;
  rememberMe: boolean;
}
 
export interface LoginResponse {
  success: boolean;
  message: string;
  result: {
    token?: string;
    user?: {
      id: number;
      email: string;
      role: number;
      status: number;
    };
  }

}

export interface ForgotPasswordInput {
  email: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
  code?: number;
  resetToken?: string;
}

export interface verifyResetRcoveryOtpInput{
  otp: string;
  email: string;
}

export interface ResetForgotPassword{
  email:string;
  password: string;
  confirmPassword: string;
}








export type RoleType = 3 | 4;

export interface SignUpFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  agreeToTerms: boolean;
  subscribeEmails: boolean;
  role: RoleType;

  // Rider-specific
  dob?: string;
  gender?: string;
  city?: string;
  state?: string;
  vehicle_type?: string;
  vehicle_registration_number?: string;
  rider_means_of_id_type?: string;
  rider_means_of_id_number?: string;
  vehicle_document_expiry_date?: string;
}

