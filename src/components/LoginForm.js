import { useState } from 'react';
import styles from './LoginForm.module.css' ; 
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import SocialIcons from './SocialIcons';
import { useApp } from '../context/AppProvider';

function LoginForm(){
    const navigate = useNavigate() ; 
    const [showPassword , setShowPassword] = useState(false) ; 
    const [email , setEmail] = useState("") ; 
    const [password , setPassword] = useState("") ; 
    const {state} = useApp() ; 

    function handleLogin(e){
        e.preventDefault() ; 
        if(email !== state.email){
            alert("Email is wrong!") ; 
            return ; 
        } 
        if(password !== state.password){
            alert("Password is wrong!") ; 
            return ; 
        }
        
        navigate("/") ; 
    }
    return (
        <div className={styles.main}>
            <p>Login</p>
            <form onSubmit={(e)=>handleLogin(e)}>
                <div className={styles.formControll}>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="text" 
                    placeholder="Enter your email" 
                    id="email" 
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className={styles.formControll}>
                    <label htmlFor="password">Password</label>
                    <input 
                    type={showPassword ?"text":"password"} 
                    placeholder="Enter your password" 
                    id="password" 
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <p onClick={()=>setShowPassword((e)=>!e)} className={styles.controllPass}>{showPassword ? "🙉" : "🙈"}</p>
                    <div className={styles.msg}>
                        <span>Forget your password?</span>
                        <p>Don't have an account? <span onClick={()=>navigate("/signup")}>Sign up</span></p>
                    </div>
                </div>
                <Button styleType="btn1">Done</Button>
            </form>
            <div className={styles.footer}>
                <div>
                 <img src="img/line.svg" alt="line" className={styles.line}/> Or login with <img src="img/line.svg" alt="line" className={styles.line}/>
                </div>

                <SocialIcons styleType="social"/>
            </div>
        </div>
    );
}
export default LoginForm ;