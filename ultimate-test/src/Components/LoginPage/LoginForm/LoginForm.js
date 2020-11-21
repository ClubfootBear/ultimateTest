import { Form, Input, Button, Checkbox } from 'antd';
import {UserOutlined, LockOutlined, InfoCircleOutlined} from '@ant-design/icons';
import "./LoginForm.css"
import React from "react";


const NormalLoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >

            <div className="LoginFormWrapper">
                <div className="Enter">
                    Вход
                </div>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите свой логин!',
                        },
                    ]}
                >
                    <Input className="BtnForm"
                           prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Введите логин" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите свой пароль!',
                        },
                    ]}
                >
                    <Input.Password className="BtnForm"
                                    prefix={<LockOutlined className="site-form-item-icon " />}
                                    type="password"
                                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button BtnForm">
                        Войти
                    </Button>
                </Form.Item>
                <div className="CantEnter">
                    <InfoCircleOutlined style={{marginRight: '8px'}}/>
                    Не можете войти?</div>
                <div className="HelpInfo">Свяжитесь с технической поддержкой по номеру телефона 72-72-72</div>
            </div>

        </Form>
    );
};

export default NormalLoginForm;