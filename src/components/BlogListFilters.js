import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setTextFilter, sortByDate, sortByDescription } from "../actions/filters";

const BlogListFilters = (props) => (
  <div className="content-container">
      <div>
        <div className="input-group">
          <div className="input-group__item">
            <input type="text"
              className="text-input"
              placeholder="search post"
              value={props.filters.text}
              onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
              }}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={props.filters.sortBy}
              onChange={(e) => {
                if (e.target.value === 'date') {
                  props.dispatch(sortByDate())
                } else if (e.target.value === 'description') {
                  props.dispatch(sortByDescription())
                }
              }}>
              <option value="date">By Date</option>
              <option value="description">By Title</option>
            </select>
          </div>
          <div className="input-group__button">
          </div>
            <Link to="/create">
              <div>
                <button className="select">Add Post</button>
              </div>
            </Link>
        </div>
      </div>
    
  </div>
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(BlogListFilters)