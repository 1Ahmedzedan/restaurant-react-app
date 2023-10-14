import { useNavigate } from 'react-router-dom';
import styles from './Logo.module.css' ; 

function Logo(){
  const navigate = useNavigate() ; 
  return (
    <div className={styles.logo}>
      <img src="img/logo.svg" alt="logo" onClick={()=>navigate("/")}/>
    </div>
  );
}
export default Logo ;