import React from "react";

function Locations ( {locations, handleLocationSelection} ){
    return (
        <div className="dropdown">
            {locations.map((location, index) => (
                <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleLocationSelection(location)}
                >
                    {location.name}, {location.state}, {location.country}
                </div>
            ))}
        </div>
    )
}

export default Locations;