import React from "react";
import { connect } from "react-redux";
import BlogForm from "./BlogForm";
import { addBlog } from "../actions/blogs";

const CreateBlog = (props) => (
    <div>
      <BlogForm
        onSubmit={(blog) => {
          props.dispatch(addBlog(blog))
          props.history.push('/dashboard')
        }} 
      />
    </div>
  )
export default connect()(CreateBlog)