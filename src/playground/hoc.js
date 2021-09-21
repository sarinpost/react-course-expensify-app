// High order component (HOC) - a component that render anather component

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>Please login to view the info</p>)}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'))