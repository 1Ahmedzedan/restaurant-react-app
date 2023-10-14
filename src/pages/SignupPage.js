import Logo from '../components/Logo';
import SignupForm from '../components/SignupForm';
import styles from './FormPage.module.css' ; 

function SignupPage(){
  return (
    <div className={styles.main}>
        <Logo/>
        <div className={styles.form}>
            <SignupForm/>
        </div>
    </div>
  );
}
export default SignupPage ;