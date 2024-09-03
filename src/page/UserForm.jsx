import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
// import 'antd/dist/antd.css'; // Ensure Ant Design styles are loaded

const UserForm = () => {
    console.log('UserForm');
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/Aplication');
      };
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    console.log('front print', user);

    const onFinish = (values) => {
        dispatch({
            type: 'UPDATE_USER',
            payload: values,
        });
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <Form
                name="basic"
                initialValues={user}
                onFinish={onFinish}
                autoComplete="off"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <button onClick={handleButtonClick}>Go to New Page</button>
        </div>
    );
};

export default UserForm;