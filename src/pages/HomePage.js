import styles from './HomePage.module.css' ; 

import Header from "../components/Header";
import Intro from '../components/Intro';
import About from '../components/About';
import BestSeller from '../components/BestSeller';
import Footer from '../components/Footer';
import Img from '../components/Img';
import Categories from '../components/Categories';

import {bestSellerDessert , bestSellerMeals} from '../data/photos' ; 
import Cart from '../components/Cart';
import { useApp } from '../context/AppProvider';

function HomePage(){
    const {openCart} = useApp() ; 
    
    return (
        <div className={styles.main}>
            <img src="img/plate.svg" alt="plate" className={styles.cornerImg}/>
            <Header/>
            {openCart && <Cart/>}
            <div className={styles.content}>
                <Intro />
                <About/>
                <BestSeller title="Best seller dessert">
                    {
                        bestSellerDessert.map((img)=><Img img={img} key={img.id}/>)
                    }
                </BestSeller>
                <BestSeller title="Best seller meals">
                    {
                        bestSellerMeals.map((img , idx)=><Img img={img} key={img.id}/>)
                    }
                </BestSeller>
                <Categories/>
            </div>
            <Footer/>
        </div>
    );
}
export default HomePage ;