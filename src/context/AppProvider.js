import {createContext , useCallback, useContext, useEffect, useReducer, useState } from "react";
const AppContext = createContext() ; 

const intielStateAcount = {
    name: "" , 
    email: "" ,
    password: "",
    city: "",
    address: "",
    phoneNumber: "",
    img: "img/defaultAccount.png" ,
    login : false,
};

function accountProvider(state , action){
    switch(action.type){
        case "account/name":
            return{
                ...state,
                name : action.payload,
            }
        case "account/email":
            return{
                ...state,
                email : action.payload,
            }
        case "account/password":
            return{
                ...state,
                password : action.payload,
            }
        case "account/city":
            return{
                ...state,
                city : action.payload,
            }
        case "account/address":
            return{
                ...state,
                address : action.payload,
            }
        case "account/phoneNumber":
            return{
                ...state,
                phoneNumber : action.payload,
            }
        case "account/img":
            return{
                ...state,
                img : action.payload,
            }
        case "account/login":
            return{
                ...state,
                login : true,
            }
        default: 
            throw new Error("Unknow action type") ; 
    }
}

function AppProvider({children}){
    const [state , dispatch] = useReducer(accountProvider , intielStateAcount) ; 
    const [cartItems , setCartItems] = useState([]) ; 
    const [openCart , setOpenCart] = useState(false) ; 
    const [totalPrice , setTotalPrice] = useState(0) ;
    const [numberOfItems , setNumberOfItems] = useState(0) ;  

    function handleDeleteItem(id){
        const newItems = cartItems.filter((item)=>item.id!==id) ; 
        setCartItems(newItems) ; 
    }
    
    const getItemsCounters = useCallback(()=>{
        const price = cartItems.reduce((total , item)=>total+(item.price*item.count) , 0) ; 
        setTotalPrice(price) ; 

        const itemCount =  cartItems.reduce((total , item)=>total+item.count , 0) ;
        setNumberOfItems(itemCount) ;
    } , [cartItems]);

    useEffect(function(){
        getItemsCounters() ; 
    } , [cartItems, getItemsCounters]) ; 


    return (
        <AppContext.Provider
        value={{
            cartItems,
            setCartItems,
            handleDeleteItem,
            numberOfItems,
            totalPrice,
            getItemsCounters,
            openCart,
            setOpenCart,
            state,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    );
}

function useApp(){
    let context = useContext(AppContext) ; 
    if(context === undefined) throw new Error("provider Error") ; 
    return context ;
}

export {AppProvider , useApp} ;