import { useState } from 'react';
import styles from './SignupForm.module.css' ; 
import { useNavigate } from 'react-router-dom';

function SignupForm(){
  const navigate = useNavigate() ; 
  const [showPassword , setShowPassword] = useState(false) ; 

  return (
      <div className={styles.main}>
        <p>Sign up</p>
        <form>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.formControll}>
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder="Enter your name" id="name" name="name" autoComplete="off"/>
              </div>
              <div className={styles.formControll}>
                  <label htmlFor="email">Email</label>
                  <input type="text" placeholder="Enter your email" id="email" name="email" autoComplete="off"/>
              </div>
              <div className={styles.formControll}>
                  <label htmlFor="password">Password</label>
                  <input type={showPassword ?"text":"password"} placeholder="Enter your password" id="password" name="password" autoComplete="off"/>
                  <p onClick={()=>setShowPassword((e)=>!e)} className={styles.controllPass}>{showPassword ? "🙉" : "🙈"}</p>
                  <div className={styles.msg}>
                      <p>Already have an account? <span onClick={()=>navigate("/login")}>Login</span></p>
                  </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.formControll}>
                  <label htmlFor="city">City</label>
                  <input type="text" placeholder="Enter your city" id="city" name="city" autoComplete="off"/>
              </div>
              <div className={styles.formControll}>
                  <label htmlFor="address">Address</label>
                  <input type="text" placeholder="Enter your address" id="address" name="address" autoComplete="off"/>
              </div>
              <div className={styles.formControll}>
                  <label htmlFor="phone">Phone number</label>
                  <input type="text" placeholder="Enter your phone" id="phone" name="phone" autoComplete="off"/>
              </div>
            </div>
          </div>
          <button>Save</button>
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
export default SignupForm ;