import React, {useContext} from 'react';
import {PlaceContext} from "../App";

function PlaceDescription() {
    const place = useContext(PlaceContext);

    return (
        <p>
            <b>{place.name}</b>
            {': ' + place.description}
        </p>
    );
}

export default PlaceDescription;