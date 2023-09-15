import React from 'react';
import { Button, Input, Form } from 'antd';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const layout = {
labelCol: { span: 8 },
wrapperCol: { span: 16 },
};

const Address: React.FC = () => {
const initialValues = {
    user: {
    streetaddress: '',
    city: '',
    state: '',
    zipcode: '',
    },
};

const validationSchema = Yup.object().shape({
    user: Yup.object().shape({
    streetaddress: Yup.string().required('Street Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipcode: Yup.string()
        .required('Zip Code is required')
        .matches(/^\d{5}$/, 'Zip Code must be 5 digits'),
    }),
});

const onFinish = (values: typeof initialValues) => {
    console.log(values);
};

return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onFinish}
    >
    {(formikProps) => (
        <Form
        {...layout}
        name="nest-messages"
        onFinish={formikProps.handleSubmit}
        style={{ maxWidth: 600, padding: '3rem', borderRadius: '9999px' }}
        >
        <div className="form-group">
            <label htmlFor="user.streetaddress">Street Address</label>
            <Field
            type="text"
            id="user.streetaddress"
            name="user.streetaddress"
            as={Input}
            />
            <ErrorMessage
            name="user.streetaddress"
            component="div"
            className="text-danger"
            />
        </div>
        <div className="form-group">
            <label htmlFor="user.city">City</label>
            <Field type="text" id="user.city" name="user.city" as={Input} />
            <ErrorMessage name="user.city" component="div" className="text-danger" />
        </div>
        <div className="form-group">
            <label htmlFor="user.state">State</label>
            <Field type="text" id="user.state" name="user.state" as={Input} />
            <ErrorMessage name="user.state" component="div" className="text-danger" />
        </div>
        <div className="form-group">
            <label htmlFor="user.zipcode">Zip Code</label>
            <Field type="text" id="user.zipcode" name="user.zipcode" as={Input} />
            <ErrorMessage name="user.zipcode" component="div" className="text-danger" />
        </div>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
    )}
    </Formik>
);
};

export default Address;