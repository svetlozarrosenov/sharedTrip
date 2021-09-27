import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../css/Register.css';

class Register extends React.Component{
    initialValues;
    validationSchema;
    
    constructor(props) {
        super(props);
        
        this.initialValues = {
            username: '',

        };

        this.validationSchema = Yup.object().shape({
            username: Yup.string().min(4).required()
        });
    }

    save(data){
        console.log(data)
    }

    render(){
        return(
            <div class="register">
                <div className="shell">
                    <h1 className="register__title">Register</h1>

                    <Formik initialValues={this.initialValues} onSubmit={this.save} validationSchema={this.validationSchema}>
                        <Form className="register__form">
                            <Field id="username" name="username" placeholder="username" />

                            <Field id="email" name="email" placeholder="email" />

                            <Field id="password" name="password" placeholder="password" />

                            <Field id="confirm_password" name="confirm_password" placeholder="confirm_password" />

                            <Field id="first_name" name="first_name" placeholder="First Name" />

                            <Field id="lastName" name="lastName" placeholder="Last Name" />

                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        );
    }
}

export default Register;