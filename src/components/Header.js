import { useState } from 'react';
import styles from './Header.module.css' ; 
import Logo from './Logo';
import {NavLink, useNavigate} from "react-router-dom";

function Header(){
    const navigate = useNavigate() ; 
    const [numberOfCartProduct , setNumberOfCartProduct] = useState(0) ; 

    return (
        <div className={styles.main}>
            <Logo />
            <div className={styles.container2}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="menu">Menu</NavLink>
                <NavLink to="offers">Offers</NavLink>
                <NavLink to="book">Book Table</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </div>
            <div className={styles.container1}>
                <div className={styles.container2}>
                    <div className={styles.cart}>
                        <img src="img/cart.svg" alt="cart"/>
                        <span>{numberOfCartProduct}</span>
                    </div>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search"/>
                        <span>🔍</span>
                    </div>
                </div>

                <div className={styles.container2}>
                    <button className={styles.btnLogin} onClick={()=>navigate("/login")}>Login</button>
                    <button className={styles.btnSignup} onClick={()=>navigate("/signup")}>Sign up</button>
                </div>
            </div>
        </div>
    );
}
export default Header ;