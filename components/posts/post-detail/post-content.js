import ReactMarkdown from "react-markdown";
import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
    slug: "getting-started-with-nextjs",
    title: "Getting strted with next.js",
    image: "getting-started-nextjs.png",
    content: "# This is a first post.",
    date: "2023-03-06",
};

const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    );
};


export default PostContent;
