import styles from './About.module.css' ; 
import Button from './Button';
import Logo from './Logo';

function About(){
  return (
    <div className={styles.main}>
      <p className={styles.title}>About us</p>
      <div className={styles.panners}>
        <div className={styles.panner1}></div>
        <div className={styles.panner2}>
            <Logo/>
            <p>Indulge in the flavors of a delectable dishes and exceptional service create an unforgettable dining experience.</p>
            <Button styleType="btn2">View more</Button>
        </div>
        <div className={styles.panner3}></div>
      </div>
    </div>
  );
}
export default About ;