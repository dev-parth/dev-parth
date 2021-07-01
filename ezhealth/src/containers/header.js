import React, { useState } from 'react'
import { Layout, Row, Col, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './container.css';
const { Header, Content } = Layout;


const HeaderComponent = () => {
    const [menuName, setMenuName] = useState("Profile")
    const onClick = ({ key }) => {
        setMenuName(key)
        // message.info(`Click on item ${key}`);
    };
    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="Account">Account</Menu.Item>
            <Menu.Item key="Add Employee">Add Employee</Menu.Item>
            <Menu.Item key="Billing">Billing</Menu.Item>
            <Menu.Item key="Faq">Faq</Menu.Item>
            <Menu.Item key="Feedback">Feedback</Menu.Item>
        </Menu>
    );
    return (
        <Layout className="site-layout">
            <Header className="site-layout-background">
                <Content>
                    <Row>
                        <Col lg={12} md={12} xs={24} sm={24}>
                            <p>EZPD Portal</p>
                        </Col>
                        <Col lg={12} md={12} xs={24} sm={24} className="topnav">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <i className="fa fa-phone ml-2"></i>
                            <i class="fa fa-bell" aria-hidden="true"></i>
                            <Dropdown overlay={menu} className="drop-Down">
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    {menuName}
                                    <DownOutlined />
                                </a>
                            </Dropdown>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </Col>
                    </Row>
                </Content>
            </Header>
        </Layout>
    )
}
export default HeaderComponent;