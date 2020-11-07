import React, { Fragment } from 'react';
import * as Yup from "yup";
import {
    Formik,
    Form,
    FormikHelpers,
} from 'formik';
import { InputField } from 'components/ui/Fields';
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';


interface CehckoutParams {
    firstName: string,
    lastName: string,
    email: string,
}

const CheckoutSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    firstName: Yup.string().min(4, "Too Short").required("First Name is required"),
    lastName: Yup.string().min(4, "Too Short").required("Last Name is required"),

});


const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        form: {
            
            maxWidth: '500px',
            margin: 'auto',
            padding: '50px',
        },
    })
)


export const CehckoutForm = () => {

    const classes = useStyles();
    const initialValues = {
        firstName: "",
        lastName: "",
        email:  "",
    }

    const onSubmit = async (
        values: CehckoutParams,
        helpers: FormikHelpers<CehckoutParams>,
      ) => {
        console.log(values)
        
    };
  
    return(
        <Fragment>
        <Formik<CehckoutParams>
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={CheckoutSchema}
       >
        {({ errors, touched, isSubmitting}) => (
         <Form className={classes.form}>

         <InputField name="firstName" label="First Name" type="text" />
         <InputField name="lastName" label="Last Name" type="text" />

         <InputField name="email" label="Email" type="email" />
         <Button type="submit" color="primary">Submit</Button>
        </Form>
        )}
       </Formik>
        </Fragment>
    )
}