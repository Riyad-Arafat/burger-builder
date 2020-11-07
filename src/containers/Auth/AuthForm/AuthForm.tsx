import React from 'react';
import * as Yup from "yup";
import Button from '@material-ui/core/Button';


import { useStyles } from ".././Auth.Style";
import { setAuth } from 'store/modules/auth/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { Form, Formik } from 'formik';
import { InputField } from 'components/ui/Fields';



interface LoginParams {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});


export const AuthForm = () => {
  const classes = useStyles();
  const auth = useSelector((state: RootState) => state.auth.authenticated);
  const dispatch = useDispatch();

  const initialValues = {
    email:"",
    password: "",
  }

  const onSubmit = () => {
    const token = localStorage.getItem("tkn");
    if(!token){
      localStorage.setItem("tkn" , "True");
      dispatch(setAuth(true));
    }
  }

  return(
    <Formik<LoginParams>
         initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={LoginSchema}
       >
      {({ errors, touched, isSubmitting}) => (
        <Form className={classes.form}>
         <InputField name="email" label="Email" type="email" />
         <InputField name="password" label="Password" type="password" />
         <Button type="submit" color="primary">Submit</Button>
        </Form>
      )}
    </Formik>
  )
};