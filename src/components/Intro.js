import styles from './Intro.module.css';
import Button from './Button' ; 

function Intro(){
  return (
    <div className={styles.main}>
        <div className={styles.desc}>
            <p className={styles.title1}>meals and desserts with our special flavors</p>
            <p className={styles.title2}>Dine in style and indulge your taste buds at our exquisite restaurant, where every dish is a masterpiece of culinary delight.</p>
            <div className={styles.btns}>
                <Button styleType="btn1">Go to menu</Button>
                <Button styleType="btn2">Our locations</Button>
            </div>
        </div>
        <div className={styles.panner}></div>
    </div>
  );
}
export default Intro ;