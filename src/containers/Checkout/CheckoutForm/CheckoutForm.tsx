import React, { Fragment } from 'react';
import {
    Formik,
    Form,
    FormikHelpers,
} from 'formik';
import { InputField } from 'components/ui/Fields';
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { CheckoutSchema, CehckoutParams } from 'validator'
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { Redirect, useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        form: {
            maxWidth: '500px',
            margin: 'auto',
        },
    })
)


export const CehckoutForm = () => {

    const classes = useStyles();
    const history = useHistory();
    const totalPrice = useSelector((state:RootState) => state.ingr.totalPrice)

    const initialValues = {
        firstName: "",
        lastName: "",
        email:  "",
    }
    const onSubmit = async (
        values: CehckoutParams,
        helpers: FormikHelpers<CehckoutParams>,
      ) => {
          if(totalPrice <= 0){
            alert("Plz Add Ingredints");
            history.replace("/")
          }
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
         <Button type="submit" variant="outlined" color="primary">Submit</Button>
        </Form>
        )}
       </Formik>
        </Fragment>
    )
}