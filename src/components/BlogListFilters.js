import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByTitle } from "../actions/filters";

const BlogListFilters = (props) => (
    <div>
      <input type="text"
        value={props.filters.text}
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value))
        }}     
      />
      <select
        value={props.filters.sortBy}
        onChange={(e) => {
          if(e.target.value === 'date'){
            props.dispatch(sortByDate())
          }else if(e.target.value === 'title'){
            props.dispatch(sortByTitle())
        }
      }}>
         <option value="date">By Date</option>
         <option value="title">By Title</option>
      </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(BlogListFilters)