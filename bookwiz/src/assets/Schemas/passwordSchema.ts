import { object, string, ref } from "yup";

const getCharacterValidationError = (str: string) => {
  return `Your password must contain at least 1 ${str} character`;
};

export const passwordSchema = object({
  password: string()
    .required("Password is required") // Check for empty field
    .min(8, "Password must be at least 8 characters") // Check character length
    // Check for character types
    .matches(/[a-z]/, getCharacterValidationError("lowercase")) // Lower case letters
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")) // Upper case letters
    .matches(/[0-9]/, getCharacterValidationError("number")) // Numbers
    //symbols
    .matches(/[!@#$%^&*]/, getCharacterValidationError("special character")),

  confirmPassword: string()
    .required("Please re-type your password")
    // .oneOf([ref()], "Passwords does not match"),
});
