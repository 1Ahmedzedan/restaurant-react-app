import { useState } from 'react';
import { useApp } from '../context/AppProvider';
import styles from './Profile.module.css' ; 

function Profile(){
    const {state , dispatch} = useApp() ; 
    const {name , img} = state ; 

    const [addImg , setAddImg] = useState(false); 

    function handleAddImg(e){
        const url = URL.createObjectURL(e.target.files[0]) ; 
        dispatch({type: "account/img" , payload: url})
    }

    return (
        <div className={styles.main}>
            <div className={styles.imgContainer}>
                <img src={img} alt="accountImg" 
                onMouseEnter={()=>setAddImg(true)}
                onMouseLeave={()=>setAddImg(false)}/>
                {
                    addImg && 
                    <>
                        <input 
                        type="file" 
                        name="file" 
                        id="file" 
                        accept="image/jpeg, image/png, image/jpg" 
                        onChange={(e)=>handleAddImg(e)}/>
                        
                        <label htmlFor="file" 
                        onMouseEnter={()=>setAddImg(true)} 
                        onMouseLeave={()=>setAddImg(false)}>+</label>
                    </>

                }
            </div>
            <p>{name}</p>
        </div>
    );
}
export default Profile ;