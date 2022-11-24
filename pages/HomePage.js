import React from "react";

function App() {
    return < DashboardHomePage32 {...dashboardHomePage32Data}/>;
}

export default App;

function DashboardHomePage32(props) {
    const{ logo6, addUser, save, cancel, firstName, lastname, email, phoneNumber, component2Props} = props;

    return (
        <div className="container-center-horizontal">
            <div className="dashboard-home-page screen"
        </div>
    )
} 