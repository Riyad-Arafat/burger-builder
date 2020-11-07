import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from ".././Auth.Style";
import { setAuth } from 'store/modules/auth/authActions';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { InputField } from 'components/ui/Fields';
import { LoginParams, LoginSchema } from 'validator'


export const AuthForm = () => {
  const classes = useStyles();
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
         <Button type="submit" color="primary" variant="outlined">Submit</Button>
        </Form>
      )}
    </Formik>
  )
};