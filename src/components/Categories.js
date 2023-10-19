import styles from './Categories.module.css' ; 

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {categories} from '../data/photos' ; 



function Categories(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        ]
    };

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Categories</h1>
            <Slider {...settings}>
               {categories.map((img , idx)=>(
                <div className={styles.box} key={idx}>
                    <img src={img.src} alt={img.name}/>
                    <h2>{img.name}</h2>
                </div>
               ))}
            </Slider>
        </div>
    );
}
export default Categories ;