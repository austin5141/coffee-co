import { useCart } from "../context/ShoppingCartContext";

function Order() {
    const { cartItems } = useCart()
    return (
        <>
            {cartItems.map(item => {
                return (
                    <div key={item.id}>

                    </div>
                )
            })}
        </>
    )
}

export default Order