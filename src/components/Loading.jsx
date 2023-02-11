import React from 'react';
import Animated from '../img/assets/erick02.svg';

function Loading() {
    return (
        <div className='Loading'>
            <object  className='loadin' type="image/svg+xml" data={Animated}>svg-animation</object>
        </div>

    );
}
export default Loading;