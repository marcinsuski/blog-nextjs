import React, { Fragment } from "react";
import FeaturedPosts from "../components/homepage/featured-posts";
import Hero from "../components/homepage/hero";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
    return (
        <Fragment>
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
