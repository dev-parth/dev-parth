import React from "react";

const Dashboard = React.lazy(() => import("./views/app-view/Dashboard"));


const routes = [
    { path: "/", exact: true, name: "Dashboard", component: Dashboard },
];

export default routes;