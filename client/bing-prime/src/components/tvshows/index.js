import './tvshows.css';
import kantara from '../../Assests/cardMovie/k322.jpg';
import jgm from '../../Assests/cardMovie/jgm.jpg';
import wakandaforever from '../../Assests/cardMovie/wakandaforever.jpg';

export default function TvShows() {
    return (
        <div className="recommended-section">
            <h1>Recommended movies</h1>
            <div class="card-movie">
            <figure>
                    <img src={wakandaforever} />
                    <figcaption>
                        <h4>WAKANDA FOREVER</h4>

                    </figcaption>
                </figure>
                
                <figure>
                    <img src={kantara} />
                    <figcaption>
                        <h4>KANTARA</h4>
                    </figcaption>
                </figure>

                

                <figure>
                    <img src={jgm} />
                    <figcaption>
                        <h4>JANA GANA MANA</h4>

                    </figcaption>
                </figure>
            </div>
        </div>
    )
}
