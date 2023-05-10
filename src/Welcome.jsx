import React from "react";

function Welcome({username, color}) {
    return(
        <div className="header-container">
            <h3>Welcome {username}</h3>
            <h3>Favorite color {color}</h3>
        </div>
    )
}

export default Welcome