import Image from "next/image";
import classes from "./hero.module.css";
import React from "react";
import { Parallax } from "react-parallax";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <Parallax bgImage={"/images/site/bg.jpg"} strength={800}>
                <div className={classes.wrapper}>
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
                </div>
            </Parallax>
        </section>
    );
};

export default Hero;
