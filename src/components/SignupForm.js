import { useState } from 'react';
import styles from './SignupForm.module.css' ; 
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import SocialIcons from './SocialIcons' ; 
import {useApp} from '../context/AppProvider' ; 
function SignupForm(){
  const navigate = useNavigate() ; 
  const [showPassword , setShowPassword] = useState(false) ; 
  const {dispatch} = useApp() ; 

  function handleSignup(e){
    e.preventDefault() ; 
    
    navigate("/login") ;
  }

  return (
      <div className={styles.main}>
        <p>Sign up</p>
        <form onSubmit={(e)=>handleSignup(e)}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.formControll}>
                  <label htmlFor="name">Name</label>
                  <input 
                  type="text" 
                  placeholder="Enter your name" 
                  id="name" 
                  name="name" 
                  autoComplete="off"
                  onChange={(e)=>dispatch({type: "account/name" , payload: e.target.value})}/>
              </div>
              <div className={styles.formControll}>
                  <label htmlFor="email">Email</label>
                  <input 
                  type="text" 
                  placeholder="Enter your email" 
                  id="email" 
                  name="email" 
                  autoComplete="off"
                  onChange={(e)=>dispatch({type: "account/email" , payload: e.target.value})}/>
              </div>
              <div className={styles.formControll}>
                  <label htmlFor="password">Password</label>
                  <input 
                  type={showPassword ?"text":"password"} 
                  placeholder="Enter your password" 
                  id="password" 
                  name="password" 
                  autoComplete="off"
                  onChange={(e)=>dispatch({type: "account/password" , payload: e.target.value})}/>
                  <p onClick={()=>setShowPassword((e)=>!e)} className={styles.controllPass}>{showPassword ? "🙉" : "🙈"}</p>
                  <div className={styles.msg}>
                      <p>Already have an account? <span onClick={()=>navigate("/login")}>Login</span></p>
                  </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.formControll}>
                  <label htmlFor="city">City</label>
                  <input 
                  type="text" 
                  placeholder="Enter your city" 
                  id="city" 
                  name="city" 
                  autoComplete="off"
                  onChange={(e)=>dispatch({type: "account/city" , payload: e.target.value})}/>
              </div>
              <div className={styles.formControll}>
                  <label htmlFor="address">Address</label>
                  <input 
                  type="text" 
                  placeholder="Enter your address" 
                  id="address" 
                  name="address" 
                  autoComplete="off"
                  onChange={(e)=>dispatch({type: "account/address" , payload: e.target.value})}/>
              </div>
              <div className={styles.formControll}>
                  <label htmlFor="phone">Phone number</label>
                  <input 
                  type="text" 
                  placeholder="Enter your phone" 
                  id="phone" 
                  name="phone" 
                  autoComplete="off"
                  onChange={(e)=>dispatch({type: "account/phoneNumber" , payload: e.target.value})}/>
              </div>
            </div>
          </div>
          <Button styleType="btn1">Save</Button>
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
export default SignupForm ;