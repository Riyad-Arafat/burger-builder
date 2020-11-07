import * as Yup from "yup";

export interface LoginParams {
    email: string;
    password: string;
}



export  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});
  