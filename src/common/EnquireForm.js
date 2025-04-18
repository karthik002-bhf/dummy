import { Field, Form, Formik } from 'formik';
import React from 'react'
import { Button } from 'react-bootstrap';

function EnquireForm() {
    return (
        <div className='bg-light p-4 rounded'>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    mobile: '',
                    pincode: ''
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <Field id="name" name="name" placeholder="Name*" className="form-control"  /> <br />
                    <Field id="email" name="email" type="email" placeholder="Email*" className="form-control" /><br />
                    <Field id="mobile" name="mobile" placeholder="Mobile*" className="form-control" /><br />
                    <Field id="pincode" name="pincode" placeholder="Pincode*" className="form-control" /><br />
                    <Button variant="primary" type="submit" className='btn btn-primary'>Enquire Now</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default EnquireForm
