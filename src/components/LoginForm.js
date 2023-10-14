import { useState } from 'react';
import styles from './LoginForm.module.css' ; 
import { useNavigate } from 'react-router-dom';

function LoginForm(){
    const navigate = useNavigate() ; 
    const [showPassword , setShowPassword] = useState(false) ; 

    return (
        <div className={styles.main}>
            <p>Login</p>
            <form>
                <div className={styles.formControll}>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Enter your email" id="email" name="email"/>
                </div>
                <div className={styles.formControll}>
                    <label htmlFor="password">Password</label>
                    <input type={showPassword ?"text":"password"} placeholder="Enter your password" id="password" name="password"/>
                    <p onClick={()=>setShowPassword((e)=>!e)} className={styles.controllPass}>{showPassword ? "🙉" : "🙈"}</p>
                    <div className={styles.msg}>
                        <span>Forget your password?</span>
                        <p>Don't have an account? <span onClick={()=>navigate("/signup")}>Sign up</span></p>
                    </div>
                </div>
                <button>Done</button>
            </form>
            <div className={styles.footer}>
                <div>
                 <img src="img/Line.svg" alt="line" className={styles.line}/> Or login with <img src="img/Line.svg" alt="line" className={styles.line}/>
                </div>

                <div className={styles.social}>
                    <img src="img/facebook.svg" alt="facebook" />
                    <img src="img/gmail.svg" alt="gmail" />
                    <img src="img/cloud.svg" alt="cloud" />
                </div>
            </div>
        </div>
    );
}
export default LoginForm ;