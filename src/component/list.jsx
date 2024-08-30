import React from 'react';
import { places } from '../data';
import { PlaceContext } from '../App';
import Place from './place';

function List() {
    const listItems = places.map(place => (
        <PlaceContext.Provider key={place.id} value={place}>
            <li>
                <Place />
            </li>
        </PlaceContext.Provider>
    ));

    return <ul>{listItems}</ul>;
}

export default List;
