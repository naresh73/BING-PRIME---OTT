import React from 'react'
import Header from '../Header'
import './home.css'
import wakanda from '../../Assests/MoviesPoster/wakanda.jpg'
import avatar from '../../Assests/MoviesPoster/avatar.jpg'
import johnwick from '../../Assests/MoviesPoster/johnwick.jpg'
import joker from '../../Assests/MoviesPoster/joker.jpg'
import civilwar from '../../Assests/MoviesPoster/civilwar.jpg'
import f7 from '../../Assests/MoviesPoster/f7.jpg'

export default function HomePage() {
    return (
        <div>
            <Header />

            <div class="movies-slider">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="4"></li>
                        <li data-target="#myCarousel" data-slide-to="5"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="item active">
                            <img src={f7} />
                        </div>

                        <div class="item">
                            <img src={avatar} />
                        </div>

                        <div class="item">
                            <img src={johnwick} />
                        </div>

                        <div class="item">
                            <img src={wakanda} />
                        </div>

                        <div class="item">
                            <img src={joker} />
                        </div>
                        <div class="item">
                            <img src={civilwar} />
                        </div>


                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>

    )
}
