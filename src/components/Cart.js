import { useApp } from '../context/AppProvider';
import Button from './Button';
import styles from './Cart.module.css' ; 
import CartItem from './CartItem' ; 
function Cart(){
    const {cartItems , numberOfItems , totalPrice , setOpenCart} = useApp() ; 
    
    return (
        <div className={styles.block}>
            <div className={styles.main}>
                <button className={styles.close} onClick={()=>setOpenCart((e)=>!e)}>❌</button>
                <div className={styles.title}>Cart</div>
                {
                    cartItems.length ? 
                    <>  
                        <div className={styles.items}>
                            {
                                cartItems.map((item)=><CartItem item={item} key={item.id}/>)
                            }
                        </div>
                        
                        <div className={styles.instructions}>
                            <h3>instructions</h3>
                            <textarea type="text" placeholder="Enter your Instructions for the chef"></textarea>
                        </div>
                
                        <div className={styles.promoCode}>
                            <h3>Promo code</h3>
                            <div>
                                <input placeholder="Enter promo code"/>
                                <Button styleType="btn2">Apply code</Button>
                            </div>
                        </div>
                        <div className={styles.itemsCounter}>
                            <p>Number Of Item : <span>{numberOfItems}</span></p>
                            <p>Total price : <span>{totalPrice}$</span></p>
                        </div>
                        <div className={styles.submit}>
                            <Button styleType="btn1">Checkout</Button>
                        </div>
                    </>
                    :
                    <div className={styles.empty}> 
                        <p>Nothing has been added to the cart 😊</p>
                        <p>Go to explore meals and dessert 😉</p>
                    </div>
                }
                
            </div>
        </div>
    );
}
export default Cart ;