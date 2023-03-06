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
            <h1>Cześć, jestem Marcin.</h1>
            <p>
                Piszę o moim rozwoju jako web developer, w szczególności o
                JavaScript, Css, React, Next.js i wszystkim co dotyczy
                frontendu.
            </p>
        </section>
    );
};

export default Hero;
