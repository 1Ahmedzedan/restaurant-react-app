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
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Categories</h1>
            <Slider {...settings}>
               {categories.map((img)=>(
                <div className={styles.box}>
                    <img src={img.src} alt={img.name}/>
                    <h2>{img.name}</h2>
                </div>
               ))}
            </Slider>
        </div>
    );
}
export default Categories ;