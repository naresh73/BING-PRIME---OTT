import './login.css';
import Logo from '../../Assests/Logo/bing.png';
import Footer from '../../components/Footer';

export default function Login() {
    return (
        <div>
            <header class="showcase">
                <div class="logo">
                    <img src={Logo} />
                </div>

                <div class="showcase-content">
                    <div class="formm">
                        <form>
                            <h1>Sign In</h1>
                            <div class="info">
                                <input class="email" type="email" placeholder="Email or phone number" /> <br />
                                <input class="email" type="password" placeholder="Password" />
                            </div>
                            <div class="btn">
                                <button class="btn-primary" type="submit">Sign In</button>
                            </div>
                            <div class="help">
                                <div>
                                    <input value="true" type="checkbox" /><label>Remember me</label>
                                </div>

                                <a href="">Need Help ?</a>

                            </div>

                        </form>

                    </div>

                    <div class="fcbk">
                        <a href="https://facebook.com">
                            <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
                        </a>
                        <p>Login with Facebook</p>
                    </div>
                    <div class="signup">
                        <p>New to BING ?</p>
                        <a href="http://localhost:3000/signup">Sign up now</a>
                    </div>
                    <div class="more">
                        <p>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more.</a>
                        </p>
                    </div>


                </div>


                {/* <footer>

                    <div class="ftr-content">
                        <div class="contact">
                            <a href="#">Quesions? Contact us.</a>
                        </div>
                        <div class="ftr">
                                <a class="fodoter__link" href="#">FAQ</a>
                                <a class="fodoter__link" href="#">Help Center</a>
                                <a class="fodoter__link" href="#">Media Center</a>
                                <a class="fodoter__link" href="#">Ways to Watch</a>
                                <a class="fodoter__link" href="#">Speed Test</a>
                                <a class="fodoter__link" href="#">Investor Relations</a>
                                <a class="fodoter__link" href="#">Terms of Use</a>
                                <a class="fodoter__link" href="#">Corporate Information</a>
                                <a class="fodoter__link" href="#">Legal Notices</a>
                                <a class="fodoter__link" href="#">Account</a>
                                <a class="fodoter__link" href="#">jobs</a>
                                <a class="fodoter__link" href="#">privacy</a>
                                <a class="fodoter__link" href="#">contact us</a>
                                <a class="fodoter__link" href="#">only on BING cinema</a>
                                <a class="fodoter__link" href="#">Cookie Preferences</a>
                        </div>
                        <div class="select">
                            <select>
                                <option>English</option>
                                <option>العربية</option>
                                <option>Français</option>

                            </select>
                        </div>
                    </div>

                </footer> */}

                

            </header>
            {/* <Footer /> */}
            <Footer />
        </div>
        
    )
}
