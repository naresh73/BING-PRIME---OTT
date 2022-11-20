import React from 'react'
import Header from '../Header'
import './home.css'
import kgf2 from '../../Assests/HeadPosters/kgf2.jpg'
import PosterSection from '../DataOfPosters'
import Footer from '../Footer'
import TrendingPosters from '../DATA/trending'
import TrendingWebseries from '../DATA/TrendingWebseries'
import TvShows from '../tvshows'
export default function HomePage({
    HeadPosters
}) {
    return (
        <div>
            <Header />
            <div class="movies-slider">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        {
                            HeadPosters.map((poster, index) => (
                                <li data-target="#myCarousel" data-slide-to={index + 1}></li>
                            ))
                        }
                    </ol>

                    <div class="carousel-inner">
                        <div class="item active">
                            <img src={kgf2} alt="f7"/>
                        </div>
                    {
                        HeadPosters.map((poster) => (
                            <div class="item">
                            <img className={poster.className} src={poster.img} alt="avatar"/>
                        </div>
                        ))
                    }

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
            <PosterSection Posters = {TrendingPosters()} />
            <PosterSection Posters = {TrendingWebseries()} />
            <TvShows />
            {/*<PosterSection />
            <PosterSection />
            <PosterSection /> */}
            <Footer />
        </div>

    )
}
