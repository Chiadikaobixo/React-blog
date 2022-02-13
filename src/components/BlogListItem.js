import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const BlogListItem = ({ id, description, note, createdAt }) => (
    <div>
        <Link className="list-item" to={`/edit/${id}`}>
            <h3 className="list-item__title">{description}</h3>
            <div>
            <p className="list-item__title">{note}</p>
            </div>
            <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </Link>
    </div>
)
export default BlogListItem