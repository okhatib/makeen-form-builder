import React from "react";

function ObjectDisplay({jsonData}) {
    return (
        <pre>{JSON.stringify(jsonData)}</pre>
    )
}

export default ObjectDisplay;