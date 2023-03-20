import Head from "next/head";
import React, { Fragment } from "react";
import FeaturedPosts from "../components/homepage/featured-posts";
import Hero from "../components/homepage/hero";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Welcome to my blog</title>
                <meta
                    name="description"
                    content=" I post about programming and web development."
                />

            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );
};

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
    };
}

export default HomePage;
