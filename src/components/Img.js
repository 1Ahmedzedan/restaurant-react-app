import { useState } from 'react';
import styles from './Img.module.css' ; 
import Button from './Button';

function Img({img}){
    const [addCart , setAddCart] = useState(false) ; 

    return (
        <div className={styles.main}>
            <img src={img.src} alt={`img ${img.id}`} 
            onMouseEnter={()=>setAddCart(true)}
            onMouseLeave={()=>setAddCart(false)}/>
            {
                addCart && 
                <div className={styles.addCart} 
                onMouseEnter={()=>setAddCart(true)} 
                onMouseLeave={()=>setAddCart(false)}> 
                    <form>
                        <div className={styles.desc}> 
                            <p className={styles.productName}>{img.name}</p>
                            <p className={styles.productPrice}>{img.price}</p>
                        </div>
                        <textarea type="text" placeholder="Item Descrription..."></textarea>
                        <Button styleType="btn1">Add to cart</Button>
                    </form>
                </div>
            }
        </div>
    );
}

export default Img ;