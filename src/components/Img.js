import { useState } from 'react';
import styles from './Img.module.css' ; 
import Button from './Button';
import {useApp} from '../context/AppProvider' ; 

function Img({img}){
    const {cartItems , setCartItems , handleDeleteItem} = useApp() ; 
    const [addCart , setAddCart] = useState(0) ; 
    const [description , setDescription] = useState("") ; 

    function handleAddToCart(){
        const newItem = {
            id : img.id , 
            src : img.src,
            name : img.name,
            price: img.price,
            description,
            count:1,
        };

        setCartItems((items)=>[...items , newItem]) ;
    }

    function handleClick(e , type){
        e.preventDefault() ; 

        if(type==="add"){
            handleAddToCart() ;  
            setAddCart(2) ; 
        }  
        else{ 
            handleDeleteItem(img.id) ; 
            setAddCart(1) ; 
        } 
    }

    function handleHover(){
        const exist = cartItems.some((item)=>item.id===img.id) ; 
        const state = (exist ? 2 : 1) ; 
        setAddCart(state) ; 
    }

    return (
        <div className={styles.main}>
            <img src={img.src} alt={`img ${img.id}`} 
            onMouseEnter={handleHover}
            onMouseLeave={()=>setAddCart(0)}/>
            {
                addCart!==0 && 
                <div className={styles.addCart} 
                onMouseEnter={handleHover} 
                onMouseLeave={()=>setAddCart(0)}> 
                    <form>
                        <div className={styles.desc}> 
                            <p className={styles.productName}>{img.name}</p>
                            <p className={styles.productPrice}>{img.price}$</p>
                        </div>
                        {
                            addCart===1 && <textarea type="text" placeholder="Item Descrription..." 
                            onChange={(e)=>setDescription(e.target.value)}></textarea>
                        }
                        {
                            addCart===1? <Button styleType="btn1" onClick={(e)=>handleClick(e , "add")}>Add to cart</Button>
                            : <Button styleType="btn1" onClick={(e)=>handleClick(e , "delete")}>Remove from cart</Button>
                        }
                        
                    </form>
                </div>
            }
        </div>
    );
}

export default Img ;