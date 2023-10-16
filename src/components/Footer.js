import styles from './Footer.module.css' ; 
import Logo from './Logo';
import SocialIcons from './SocialIcons' ; 

function Footer(){
  return (
    <div className={styles.main}>
      <Logo/>
      <SocialIcons styleType="socialFooter"/>
    </div>
  );
}
export default Footer ;