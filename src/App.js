import React, {  useState, createContext } from 'react';

import List from "./component/list";

export const ImageSizeContext = createContext(null)
export const PlaceContext = createContext(null)

export default function App() {
    const [isLarge, setIsLarge] = useState(false)
    const imageSize = isLarge ? 200 : 100;

    return (
        <ImageSizeContext.Provider value={imageSize}>
            <div className="App">
                <input
                    type="checkbox"
                    checked={isLarge}
                    onChange={e => {
                        setIsLarge(e.target.checked);
                    }}
                />
                Use large images
            </div>
            <hr />
            <List />
        </ImageSizeContext.Provider>
    );
}








