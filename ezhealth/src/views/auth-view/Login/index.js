import React from 'react'
import { Form, Input, Button, Row, Col, Card, Layout } from 'antd';
import './login.css'
import Hands from '../../../Assets/hands.jpg'
const Login = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
    }
    return (
        <Layout>
            <Row>
                <Col md={12} className="login-form-1">
                    <div className=".d-none">
                        <img src={Hands} />
                    </div>
                </Col>
                <Col md={12} xs={24} className="login-form-2">

                    <Card className="card">
                        <p> EZPD Login Portal</p>
                        <div className="card-inside">
                            <Form form={form} onFinish={onFinish}>

                                <Form.Item name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your user id!',
                                        },
                                        {
                                            type: "email",
                                            message: 'Please input your validate user id!',
                                        },
                                    ]}>

                                    <Input placeholder="User Id" />
                                </Form.Item>
                                <Form.Item name="password">
                                    <Input.Password placeholder="Password" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Layout>
    )
}
export default Login;