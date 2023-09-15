import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please input your username!'),
  password: Yup.string().required('Please input your password!'),
});

const Final: React.FC = () => (
  <Formik
    initialValues={{ username: '', password: '', remember: true }}
    validationSchema={validationSchema}
    onSubmit={onFinish}
  >
    {(formikProps) => (
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={formikProps.handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            id="username"
            name="username"
            as={Input}
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-danger"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            as={Input}
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-danger"
          />
        </div>

        <div className="form-group">
          <Field
            type="checkbox"
            id="remember"
            name="remember"
            valuePropName="checked"
          >
            {({ }) => (
              <Checkbox {...Field}>Remember me</Checkbox>
            )}
          </Field>
        </div>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )}
  </Formik>
);

export default Final;
