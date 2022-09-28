import React from 'react';
import './Signup.css';
import logo from '../../Assests/Logo/bing.png';
import got from '../../Assests/GOT/got.jpg';

export default function Signup() {
  return (
    <>
    <header class="header">
      <a class="header__logo" href="#">
        <img  src={logo}  alt="logo" />
      </a>

      <a class="sign__in__btn primary--btn" href="#"> Sign in </a>
    </header>
    <section class="banner__section">
        <img class="banner" src="https://i.postimg.cc/T17HbGfh/banner-image.jpg" alt="" />
        <div class="banner__overlay"></div>

        <div class="banner__content">
          <h1 class="banner__title">Unlimited movies, TV shows, and more.</h1>
          <h2 class="banner__subtitle">Watch anywhere. Cancel anytime.</h2>

          <h4 class="form__cta">
            Ready to watch? Enter your email to create or restart your membership.
          </h4>

          <form class="membership__form">
            <div class="membership__input__container">
              <input class="membership__input" placeholder='Enter your email address' type="email" />
              
            </div>
            <label class="membership__input__message"> </label>

            <button class="membership__btn primary--btn" type="submit">
              Get started
            </button>  
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

              {/* <img class="tv_f_anime" src="https://i.postimg.cc/nz1WHBW4/banner-image-left.jpg"  alt="" /> */}
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
      <footer class="footer">
        <a class="footer__link contact--link" href="#"> Questions?Contact Us.</a>
        <div class="footer__link__container">
          <a class="footer__link" href="#">FAQ</a>
          <a class="footer__link" href="#">Help Center</a>
          <a class="footer__link" href="#">Media Center</a>
          <a class="footer__link" href="#">Ways to Watch</a>
          <a class="footer__link" href="#">Speed Test</a>
          <a class="footer__link" href="#">Investor Relations</a>
          <a class="footer__link" href="#">Terms of Use</a>
          <a class="footer__link" href="#">Corporate Information</a>
          <a class="footer__link" href="#">Legal Notices</a>
          <a class="footer__link" href="#">Account</a>
          <a class="footer__link" href="#">jobs</a>
          <a class="footer__link" href="#">privacy</a>
          <a class="footer__link" href="#">contact us</a>
          <a class="footer__link" href="#">only on BING cinema</a>
          <a class="footer__link" href="#">Cookie Preferences</a>
        </div>
      </footer></>
  )
}
