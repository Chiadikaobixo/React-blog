import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";
import getVisibleBlog from '../selectors/blogs'

export const BlogList = (props) => (
    <div>
      {props.blogs.map((blog) => {
        return <BlogListItem key={blog.id} {...blog} />
      })}
    </div>
  )

const mapStateToProps = (state) => {
  return {
    blogs: getVisibleBlog(state.blogs, state.filters)
  }
}
export default connect(mapStateToProps)(BlogList)