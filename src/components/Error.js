import React from "react";

function Error({ error }) {
    return (
        <div className="Error">
            <p>{error}</p>
        </div>
    );
}

export default Error;