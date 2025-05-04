export interface ForgotPasswordChangePasswordRequest {
  document: string;
  code: string;
  password: string;
  password_confirmation: string;
}
