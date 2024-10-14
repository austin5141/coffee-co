import { createContext, ReactNode, useContext, useState } from "react";

type Props = {
    children: ReactNode;
}

type CartItem = {
    id: number;
    quantity: number;
    price: number;
    name: string;
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseItemQuantity: (id: number, price: number, itemName: string) => void;
    decreaseItemQuantity: (id: number, price: number) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
    cartQuantity: number;
    totalPrice: number;
    cartItems: CartItem[];
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider( { children }: Props ) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    const totalPrice = cartItems.reduce((price, item) => item.price + price, 0);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }   

    function increaseItemQuantity(id: number, itemPrice: number, itemName: string ) {
        console.log(cartItems)
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                console.log(cartItems)
                return [...currItems, { id, quantity: 1, price: itemPrice, name: itemName } ]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1, price: itemPrice + item.price }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseItemQuantity(id: number, itemPrice: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1, price: itemPrice - item.price }
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

    function clearCart() {
        setCartItems([]);
    }

    return (
        <ShoppingCartContext.Provider value={{ 
            getItemQuantity, 
            increaseItemQuantity, 
            decreaseItemQuantity, 
            removeItem,
            cartItems,
            totalPrice,
            cartQuantity,
            clearCart
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}