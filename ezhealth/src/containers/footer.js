import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;
const TheFooter = () => {
    return (
        <Layout>
            <Footer>footer</Footer>
        </Layout>
    )
}

export default React.memo(TheFooter)
