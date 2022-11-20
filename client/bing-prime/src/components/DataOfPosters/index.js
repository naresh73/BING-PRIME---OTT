import React from 'react'
import './DataOfPosters.css';
import rrr from '../../Assests/HeadPosters/rrr.jpg'
import avatar from '../../Assests/HeadPosters/avatar.jpg'
import johnwick from '../../Assests/HeadPosters/johnwick.jpg'
import joker from '../../Assests/HeadPosters/joker.jpg'
import civilwar from '../../Assests/HeadPosters/civilwar.jpg'
import f7 from '../../Assests/HeadPosters/f7.jpg'

export default function PosterSection({
    Posters
}) {
    return (
        <div className='trending-movies-section'>
            <h1 id="myList">{Posters[0]}</h1>
            <div class="box">
                {
                    Posters[1].map((item) => (
                        <a href="#"><img src={item.img} /></a>   
                    ))
                }
            </div>
        </div>
    )
}
