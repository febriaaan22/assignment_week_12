import React from 'react';
import { Button, Form, Input, DatePicker } from 'antd';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const layout = {
labelCol: { span: 8 },
wrapperCol: { span: 16 },
};

const validateMessages = {
required: '${label} is required!',
types: {
    email: '${label} is not a valid email!',
},
};

const onFinish = (values: any) => {
console.log(values);
};

const NewForm: React.FC = () => (
<Formik
    initialValues={{
    user: {
        firstname: '',
        lastname: '',
        email: '',
        birthday: null,
    },
    }}
    validationSchema={Yup.object().shape({
    user: Yup.object().shape({
        firstname: Yup.string().required('First Name is required'),
        lastname: Yup.string().required('Last Name is required'),
        email: Yup.string()
        .required('Email is required')
        .email('Email is not valid'),
        birthday: Yup.date().required('Date of Birth is required'),
    }),
    })}
    onSubmit={onFinish}
>
    {(formikProps) => (
    <Form
        {...layout}
        name="nest-messages"
        onFinish={formikProps.handleSubmit}
        style={{ maxWidth: 600, padding: '3rem', borderRadius: '9999px' }}
        validateMessages={validateMessages}
    >
        <div className="form-group">
        <label htmlFor="user.firstname">First Name</label>
        <Field
            type="text"
            id="user.firstname"
            name="user.firstname"
            as={Input}
        />
        <ErrorMessage
            name="user.firstname"
            component="div"
            className="text-danger"
        />
        </div>
        <div className="form-group">
        <label htmlFor="user.lastname">Last Name</label>
        <Field
            type="text"
            id="user.lastname"
            name="user.lastname"
            as={Input}
        />
        <ErrorMessage
            name="user.lastname"
            component="div"
            className="text-danger"
        />
        </div>
        <div className="form-group">
        <label htmlFor="user.email">Email</label>
        <Field
            type="email"
            id="user.email"
            name="user.email"
            as={Input}
        />
        <ErrorMessage
            name="user.email"
            component="div"
            className="text-danger"
        />
        </div>
        <div className="form-group">
        <label htmlFor="user.birthday">Date of Birth</label>
        <DatePicker
            id="user.birthday"
            name="user.birthday"
            onChange={(date) => formikProps.setFieldValue('user.birthday', date)}
            onBlur={() => formikProps.setFieldTouched('user.birthday', true)}
            value={formikProps.values.user.birthday}
        />
        <ErrorMessage
            name="user.birthday"
            component="div"
            className="text-danger"
        />
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

export default NewForm;