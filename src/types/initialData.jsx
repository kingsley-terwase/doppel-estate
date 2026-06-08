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

export const initialFormData: SignUpFormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  address: "",
  password: "",
  agreeToTerms: false,
  subscribeEmails: false,
  role: 4, // default client
  dob: "",
  gender: "",
  city: "",
  state: "",
  vehicle_type: "",
  vehicle_registration_number: "",
  rider_means_of_id_type: "",
  rider_means_of_id_number: "",
  vehicle_document_expiry_date: ""
};

 // Fields required per role
export const baseFields: (keyof SignUpFormData)[] = [
  "first_name",
  "last_name",
  "email",
  "phone",
  "address",
  "password",
  "agreeToTerms",
];

export const riderFields: (keyof SignUpFormData)[] = [
  "dob",
  "gender",
  "city",
  "state",
  "vehicle_type",
   "vehicle_registration_number",
  "rider_means_of_id_type",
  "rider_means_of_id_number",
  "vehicle_document_expiry_date",
];
