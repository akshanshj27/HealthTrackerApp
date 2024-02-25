import { useContext } from "react";
import {createContext,useState} from "react"

const cartContext=createContext()

export const CartContextAPI=({children})=>{
    const [cart, setCart] = useState([]);
    return(
        <cartContext.Provider value={{cart,setCart}}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart=()=>{
    return useContext(cartContext)
}
