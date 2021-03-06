import React from "react";
import { connect } from "react-redux";
import BlogForm from "./BlogForm";
import { startAddBlog } from "../actions/blogs";

const CreateBlog = (props) => (
    <div className="content-container">
      <BlogForm
        onSubmit={(blog) => {
          props.dispatch(startAddBlog(blog))
          props.history.push('/dashboard')
        }} 
      />
    </div>
  )
export default connect()(CreateBlog)