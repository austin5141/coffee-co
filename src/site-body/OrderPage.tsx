import { useCart } from "../context/ShoppingCartContext";

function Order() {
    const { cartItems } = useCart()
    return (
        <>
            {cartItems.map(item => {
                return (
                    <div>

                    </div>
                )
            })}
        </>
    )
}

export default Order