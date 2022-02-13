import React from "react";
import { connect } from 'react-redux';
import { startLogin, startLoginTwitter } from "../actions/auth";

const LoginPage = ({ startLogin, startLoginTwitter }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Blog App</h1>
            <p>its time to create your blog</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
            <button className="button" onClick={startLoginTwitter}>Login with Twitter</button>
        </div>
    </div>
)
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginTwitter: () => dispatch(startLoginTwitter())
})
export default connect(undefined, mapDispatchToProps)(LoginPage)