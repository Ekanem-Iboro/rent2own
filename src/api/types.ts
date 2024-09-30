export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  engine: string;
  seating: number;
  description: string;
  location: string;
  maxpower: string;
  condition: string;
  transmission: string;
  bond: string | number;
  fuel: string;
  color: string;
  user_id: number;
  created_at: string;
  image_path: string;
  images: string[];
  weekly: string;
  duration: string;
  deposit: string;
  car_title: string;
  sold: string;
  status: string;
  ext_features: string | null;
  int_features: string | null;
  v_dimension: string | null;
  v_peformance: string | null;
  v_technology: string | null;
  fuel_eff: string | null;

  safety_features: string | null;

  stor_cargo: string | null;
}

export interface Filters {
  priceMin?: string;
  priceMax?: string;
  searchAbove2M?: boolean;
  between1Mand2M?: boolean;
  between500Kand999K?: boolean;
  lessthan500K?: boolean;
  brand?: string;
  honda?: boolean;
  mazda?: boolean;
  hyundai?: boolean;
  mitsubishi?: boolean;
  minYear?: string;
  maxYear?: string;
  from2020to2024?: boolean;
  from2015to2019?: boolean;
  from2010to2014?: boolean;
  from2005to2015?: boolean;
  color?: string;
  black?: boolean;
  blue?: boolean;
  silver?: boolean;
  white?: boolean;
  fuel?: string;
  petrol?: boolean;
  hybrid?: boolean;
  electric?: boolean;
  diesel?: boolean;
}

export interface PriceFilter {
  priceMin?: string; // Minimum price filter value
  priceMax?: string; // Maximum price filter value
  searchAbove50K?: boolean; // Filter for prices above 50,000
  between10Kand50K?: boolean; // Filter for prices between 10,000 and 50,000
  between1Kand30K?: boolean; // Filter for prices between 1,000 and 30,000
  lessthan30K?: boolean; // Filter for prices less than 30,000
}

export interface BrandFilters {
  brand?: string;
  honda?: boolean;
  mazda?: boolean;
  hyundai?: boolean;
  mitsubishi?: boolean;
}

export interface ColorFilters {
  color?: string;
  black?: boolean;
  blue?: boolean;
  silver?: boolean;
  white?: boolean;
}

export interface YearFilters {
  minYear?: string;
  maxYear?: string;
  from2020to2024?: boolean;
  from2015to2019?: boolean;
  from2010to2014?: boolean;
  from2005to2015?: boolean;
}

export interface FuelFilters {
  petrol?: boolean;
  hybrid?: boolean;
  electric?: boolean;
  diesel?: boolean;
}

export interface CreateUser {
  firstname: string;
  lastname: string;
  phone: string;
  postalcode: string;
  email: string;
  password: string;
  gender: string;
}

export interface SignInUser {
  email: string;
  password: string;
}
export interface forgotpsw {
  email: string;
}
export interface resetpsw {
  password: string;
  reset_password_token: string;
}
export interface Changepsw {
  password: string;
  oldpassword: string;
}

export interface IProfile {
  email: string;
  firstname: string;
  gender: string;
  lastname: string;
  location: string;
  phone: string;
  profile_picture: string;
  reset_token: string;
  reset_token_expires: string;
  postalcode: string;
  kyc: string;
}

export interface ContactInfo {
  footer_copyright: string;
  contact_address: string;
  contact_email: string;
  contact_phone: string;
  contact_fax: string;
}
export interface IFaq {
  faq_title: string;
  faq_content: string;
  faq_category_id: number;
  faq_id: number;
}
export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  user_Id: number;
}

export interface RentCarData {
  car_id: string | number;
  duration: string | number; // or number, depending on how it's stored
  total_price: string | number; // or number
  deposit: string | number; // or number
  termsandconditions: boolean;
  user_id: number | null;
  weekly: string | number;
  user_email: string;
}
