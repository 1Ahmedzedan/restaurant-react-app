import { useState } from 'react';
import styles from './CartItem.module.css' ; 
import { useApp } from '../context/AppProvider';

function CartItem({item}){
    const [count , setCount] = useState(item.count) ; 
    const {handleDeleteItem , getItemsCounters} = useApp() ; 
    
    function handleInc(){
        setCount((e)=>e+1) ;
        item.count += 1 ; 
        getItemsCounters() ; 
    }

    function handleDec(){
        if(count===1) return ; 
        setCount((e)=>e-1) ; 
        item.count -= 1 ; 
        getItemsCounters() ;  
    }

    

    return (
        <div className={styles.main}>
            <img  src={item.src} alt={item.name}/>
            <div className={styles.details}>
                <div className={styles.desc}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemPrice}>{item.price}$</p>
                </div>
                <div className={styles.count}>
                    <button onClick={handleDec}>-</button>
                    <p>{count}</p>
                    <button onClick={handleInc}>+</button>
                </div>
            </div>
            <button className={styles.deleteBtn} onClick={()=>handleDeleteItem(item.id)}>❌</button>
        </div>
    );
}

export default CartItem ;