import { useState } from 'react';
import './Signup.css';
import logo from '../../Assests/logo.png';
import bannerImg from "../../Assests/banner.jpg";
import got from '../../Assests/GOT/got.jpg';
import Footer from '../../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  
  function handleChange(e) {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  function register() {
    const {
      name, email, password, confirmPassword
    } = user;

    if( name && email && password ) {
      if(password === confirmPassword) {
        axios.post("http://localhost:3001/register", user)
        .then(res => alert(res.data.message))
      }
      else {
        alert("password didn't match")
      }
    }
    
    else {
      alert("invelid input")
    }
  }
  return (
    <div>
      <header class="header">
        <a class="header__logo" href="/">
          <img src={logo} alt="logo" />
        </a>

        <Link to="/login" className="sign__in__btn primary--btn" >Login</Link>
      </header>
      <section class="banner__section">
        <img class="banner" src={bannerImg} alt="" />
        <div class="banner__overlay"></div>

        <div class="banner__content">
          <h3 class="banner__title">Unlimited movies, TV shows, and more.</h3>
          <h5 class="banner__subtitle">Watch anywhere. Cancel anytime.</h5>

          <h4 class="form__cta">
            Ready to watch? Enter your email to create your account.
          </h4>

          <form class="membership__form">
            <div class="membership__input__container">
              <input 
              class="membership__input-name"
              placeholder='name'
              type="text" 
              name="name"
              value={user.name}
              onChange={handleChange}
              />
              <input 
              class="membership__input" 
              placeholder='email' 
              type="email" 
              name="email"
              value={user.email}
              onChange={handleChange}
              />
              <input 
              class="membership__input" 
              placeholder='password' 
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange} 
              />
              <input 
              class="membership__input" 
              placeholder='confirm password' 
              type="password" 
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              />
            </div>
            <div 
            class="membership__btn primary--btn" 
            onClick={register}
            >
              Get started
            </div>
          </form>

        </div>
      </section>
      <hr class="section__divider" /><div class="story__card__container">
        <section class="story__card">
          <div class="story__card__left">
            <h1>Enjoy on your TV.</h1>

            <h2>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
              players, and more.
            </h2>
          </div>

          <div class="story__card__right">
            <div class="tv__anime__container">
              <img class="tv__img" src="https://i.postimg.cc/nz1WHBW4/banner-image-left.jpg" width="900px" height="590px" alt="" />
            </div>
          </div>
        </section>

        <hr class="section__divider" />

        <section class="story__card">
          <div class="story__card__left">
            <h1>Download your shows to watch offline.</h1>

            <h2>Save your favorites easily and always have something to watch.</h2>
          </div>

          <div class="story__card__right">
            <div class="download__container">
              <img src={got} width="20px" alt="" />

              <div class="download__animation__container">
                <img class="poster" src="https://c4.wallpaperflare.com/wallpaper/709/173/262/game-of-thrones-battle-of-the-bastards-jon-snow-kit-harington-wallpaper-preview.jpg" alt="" />

                <div class="text__container">
                  <p class="title">Game of Thrones</p>
                  <p class="downloading">Downloading...</p>
                </div>

                <img src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/download-icon.gif" class="download__gif" alt="" />
              </div>
            </div>
          </div>
        </section>

        <hr class="section__divider" />

        <section class="story__card">
          <div class="story__card__left">
            <h1>Watch anywhere. Cancel anytime.</h1>
            <h2>
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and
              TV.
            </h2>
          </div>
        </section>

        <hr class="section__divider" />

        <section class="story__card">
          <div class="story__card__left">
            <h1>Create profiles for kids.</h1>
            <h2>
              Send kids on adventures with their favorite characters in a space made
              just for them—free with your membership.
            </h2>
          </div>

          <div class="story__card__right">
            <img class="kids__image" src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/kids.png" alt="" />
          </div>
        </section>

        <hr class="section__divider" />
      </div>
      <Footer />
    </div>
  )
}