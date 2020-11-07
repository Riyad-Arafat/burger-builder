import React, { Fragment } from 'react';
import {
    Formik,
    Form,
    FormikHelpers,
} from 'formik';
import { InputField } from 'components/ui/Fields';
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { CheckoutSchema, CehckoutParams } from 'validator'


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