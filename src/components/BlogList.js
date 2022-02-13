import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";
import getVisibleBlog from '../selectors/blogs'

export const BlogList = (props) => (
  <div className="content-container">
    <div className="list-body">
      {props.blogs.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No Blog Post, click the add button to get started!</span>
        </div>
      ) : (
        props.blogs.map((blog) => {
          return <BlogListItem key={blog.id} {...blog} />
        })
      )}
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    blogs: getVisibleBlog(state.blogs, state.filters)
  }
}
export default connect(mapStateToProps)(BlogList)