import React from "react";
import BlogList from "./BlogList";
import BlogAddPost from "./BlogAddPost";
import BlogListFilters from "./BlogListFilters";

const BlogDashbord = () =>(
    <div>
        <BlogListFilters />
        <BlogAddPost />
        <BlogList />
    </div>
)
export default BlogDashbord