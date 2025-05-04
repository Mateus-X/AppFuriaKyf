export interface AccountDetailsResponse {
  name: string;
  email: string;
  document: string;
  birthdate: string;
  country_code: string | null;
  cellphone: string | null;
  shirt_size: string | null;
  avatar_url: string | null;
  is_dependent: boolean;
  gender: { label: string; value: string };
  created_at: string;
  updated_at: string;
}
