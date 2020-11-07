import * as Yup from "yup";

export interface CehckoutParams {
    firstName: string,
    lastName: string,
    email: string,
}

export const CheckoutSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    firstName: Yup.string().min(4, "Too Short").required("First Name is required"),
    lastName: Yup.string().min(4, "Too Short").required("Last Name is required"),
});

