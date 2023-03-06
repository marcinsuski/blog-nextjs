import Image from "next/image";
import React from "react";
import classes from "./logo.module.css";

const Logo = () => {
    return (
        <Image src="/images/site/logo.svg" alt="logo" width={50} height={50} className={classes.logo}/>
        // <div className={classes.logo}>My Next Blog</div>
    );
};

export default Logo;
