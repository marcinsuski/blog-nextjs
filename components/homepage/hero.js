import Image from "next/image";
import classes from "./hero.module.css";
import React from "react";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/avatar.png"
                    alt="Marcin Suski"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Marcin.</h1>
            <p>
                I write about web development, especially frontend, i.e.
                JavaScript, Css, React, Next.js.
            </p>
        </section>
    );
};

export default Hero;
