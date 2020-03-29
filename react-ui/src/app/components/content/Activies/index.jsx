import React from 'react'

import { ParallaxCard } from '../../parallaxCard';

export const Activities = ({picture, title, text}) => {

    return (
        <ParallaxCard 
            dataImage={picture} title={title} text={text}/>
    );
}