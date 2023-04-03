import Link from "next/link";
import React from "react";
import { Parallax } from "react-parallax";
import classes from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Parallax
                bgImage={"../images/site/background.jpg"}
                bgImageAlt="background"
                strength={800}
                style={{ height: "100%", width: "100%" }}
            >
                <div className={classes.wrapper}>
                    <nav className={classes.nav}>
                        <ul>
                            <li>
                                <p className={classes.copy}>
                                    {" "}
                                    Copyright &#169; Marcin Suski 2023
                                </p>
                            </li>
                            <li>
                                <Link href="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Parallax>
        </footer>
    );
};

export default Footer;
