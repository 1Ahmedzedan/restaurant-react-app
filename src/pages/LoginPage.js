import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';
import styles from './FormPage.module.css' ; 

function LoginPage(){
    return (
        <div className={styles.main}>
            <Logo/>
            <div className={styles.form}>
                <LoginForm/>
            </div>
        </div>
    );
}
export default LoginPage ;