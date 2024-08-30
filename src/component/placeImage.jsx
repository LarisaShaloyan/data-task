import React, { useContext } from 'react';
import { getImageUrl } from '../utils';
import { PlaceContext, ImageSizeContext } from '../App';

function PlaceImage() {
     const place = useContext(PlaceContext);
     const imageSize = useContext(ImageSizeContext);

    return (

        <div>


            <img
                src={getImageUrl(place)}
                alt={place.name}
                width={imageSize}
                height={imageSize}
            />

        </div>
    );
}

export default PlaceImage;
