import React, { Fragment } from "react";
import Footer from "./footer";
import MainNavigation from "./main-navigation";

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation />
            <main>{props.children}</main>
            <Footer />
        </Fragment>
    );
};

export default Layout;
