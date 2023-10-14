import styles from './HomePage.module.css' ; 

import Header from "../components/Header";

function HomePage(){
    return (
        <div className={styles.main}>
            <img src="img/plate.svg" alt="plate" className={styles.cornerImg}/>
            <Header/>
        </div>
    );
}
export default HomePage ;