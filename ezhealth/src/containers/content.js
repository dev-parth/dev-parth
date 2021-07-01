import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
// routes config
import './container.css';
import routes from "../routes";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
);
const { Content } = Layout;

const TheContent = () => {
    return (
        <Layout>
            <Content className="app-contain">
                <Suspense fallback={loading}>
                    <Switch>
                        {
                            routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                );
                            })
                        }
                    </Switch>
                </Suspense>
            </Content>
        </Layout>
    );
};

export default React.memo(TheContent);
