import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { DUMMY_POSTS } from "../index";
const AllPostsPage = (props) => {
    return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
