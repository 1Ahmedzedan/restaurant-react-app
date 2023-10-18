import styles from './Header.module.css' ; 
import Logo from './Logo';
import {NavLink, useNavigate} from "react-router-dom";
import Button from './Button';
import { useApp } from '../context/AppProvider';
import Profile from './Profile';

function Header(){
    const navigate = useNavigate() ; 
    const {setOpenCart , numberOfItems , state} = useApp() ; 
    const {email} = state ; 

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
                    <div className={styles.cart} onClick={()=>setOpenCart((e)=>!e)}>
                        <img src="img/cart.svg" alt="cart"/>
                        <span>{numberOfItems}</span>
                    </div>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search"/>
                        <img src="img/search.svg" alt="search"/>
                    </div>
                </div>
                {
                    !email ? 
                    <div className={`${styles.container2} ${styles.btns}`}>
                        <Button styleType="btn1" onClick={()=>navigate("/login")}>Login</Button>
                        <Button styleType="btn2" onClick={()=>navigate("/signup")}>Sign up</Button>
                    </div> :
                    <Profile/>
                }
            </div>
        </div>
    );
}
export default Header ;