import { createContext, ReactNode, useContext, useState } from "react";

type Props = {
    children: ReactNode;
}

type CartItem = {
    id: number;
    quantity: number;
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseItemQuantity: (id: number) => void;
    decreaseItemQuantity: (id: number) => void;
    removeItem: (id: number) => void;
    cartQuantity: number;
    cartItems: CartItem[];
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider( { children }: Props ) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseItemQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 } ]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseItemQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeItem(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ 
            getItemQuantity, 
            increaseItemQuantity, 
            decreaseItemQuantity, 
            removeItem,
            cartItems,
            cartQuantity 
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}