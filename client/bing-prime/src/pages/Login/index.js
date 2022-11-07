import './login.css';
import Logo from '../../Assests/Logo/bing.png';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import fbImg from "../../Assests/fb.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      })

    const navigate = useNavigate();
      function handleChange(e) {
        const { name, value } = e.target
        setUser({
          ...user,
          [name]: value
        })
      }

      async function login() {
        try {
            const res = await axios.post("http://localhost:3001/login", user)
            alert(res.data.message)
        } catch (error) {
            alert(error)
        }
      }

    return (
        <div>
            <header class="showcase">
                <div class="logo">
                    <img src={Logo} />
                </div>

                <div class="showcase-content">
                    <div class="formm">
                        <form>
                            <h1>Log In</h1>
                            <div class="info">
                                <input 
                                class="email" 
                                type="email" 
                                placeholder="Email or phone number" 
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                />
                                <input 
                                class="email" 
                                type="password" 
                                placeholder="Password" 
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                />
                            </div>
                            <div class="btn">
                                <div 
                                class="btn-primary" 
                                onClick={login}
                                >Log In</div>
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
                            <img src={fbImg} alt="Facebook" />
                        </a>
                        <p>Login with Facebook</p>
                    </div>
                    <div class="signup">
                        <p>New to BING ?</p>
                        <Link to="/" >Signup</Link>
                    </div>
                    <div class="more">
                        <p>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more.</a>
                        </p>
                    </div>
                </div>
            </header>
            {/* <Footer /> */}
            <Footer />
        </div>
        
    )
}
