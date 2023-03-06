import React from "react";
import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

const AllPosts = (props) => {
    return (
        <section className={classes.posts}>
            <h1>Wszystkie posty</h1>
            <PostsGrid posts={props.posts} />

        </section>
    );
};

export default AllPosts;
