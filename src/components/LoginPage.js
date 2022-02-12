import React from "react";
import { connect } from 'react-redux';
import { startLogin, startLoginTwitter} from "../actions/auth";

const LoginPage = ({ startLogin, startLoginTwitter}) => (
    <div>
        <button onClick={startLogin}>Login with Google</button>
        <button onClick={startLoginTwitter}>Login with Twitter</button>
    </div>
)
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginTwitter: () => dispatch(startLoginTwitter())
})
export default connect(undefined, mapDispatchToProps)(LoginPage)