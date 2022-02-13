import React from "react";
import BlogList from "./BlogList";
import BlogListFilters from "./BlogListFilters";

const BlogDashbord = () =>(
    <div>
        <BlogListFilters />
        <BlogList />
    </div>
)
export default BlogDashbord