import React from "react";
import { Link } from "react-router-dom";


const BlogListItem = ({id, description, note, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
           <h3>{description}</h3>
        </Link>
        <p>{note} - {createdAt}</p>

    </div>
)
export default BlogListItem