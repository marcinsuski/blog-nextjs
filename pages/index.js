import React, { Fragment } from "react";
import FeaturedPosts from "../components/homepage/featured-posts";
import Hero from "../components/homepage/hero";

export const DUMMY_POSTS = [
    {
        slug: "getting-started-with-nextjs",
        title: "Getting strted with next.js",
        image: "getting-started-nextjs.png",
        excerpt:
            "NextJS is the React framework for production. It makes building React apps and sites a breeze and ships with built-in SSR.",
        date: "2023-03-06",
    },
    {
        slug: "getting-started-with-nextjs2",
        title: "Getting strted with next.js",
        image: "getting-started-nextjs.png",
        excerpt:
            "NextJS is the React framework for production. It makes building React apps and sites a breeze and ships with built-in SSR.",
        date: "2023-03-06",
    },
    {
        slug: "getting-started-with-nextjs3",
        title: "Getting strted with next.js",
        image: "getting-started-nextjs.png",
        excerpt:
            "NextJS is the React framework for production. It makes building React apps and sites a breeze and ships with built-in SSR.",
        date: "2023-03-06",
    },
    {
        slug: "getting-started-with-nextjs4",
        title: "Getting strted with next.js",
        image: "getting-started-nextjs.png",
        excerpt:
            "NextJS is the React framework for production. It makes building React apps and sites a breeze and ships with built-in SSR.",
        date: "2023-03-06",
    },
];

const HomePage = () => {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS}/>
        </Fragment>
    );
};

export default HomePage;

// header
// hero section
// featured posts
// footer
