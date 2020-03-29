import React from 'react'
import { Activities } from '../Activies';
import data from '../../../data/index.json';
export const Home = () => {
    return (
        <div className='container'>
            {
                data.map(({PHOTO, category, activity}) => 
                    <Activities {...{ picture: PHOTO, title: activity, text: category}}/> 
            )}
        </div>
    ) 
}
