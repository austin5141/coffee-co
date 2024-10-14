import { FormEventHandler, useState } from "react";
import { useCart } from "../context/ShoppingCartContext";

function Order() {
    const { cartItems, totalPrice, clearCart } = useCart()
    const [modalOpen, setModalOpen] = useState(false);

    function submitOrder(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setModalOpen(true);
        clearCart()
    }

    return (
        <>

            <div className={modalOpen ? "fixed bg-white z-10 left-2/4 -translate-x-2/4 mt-40 p-5 transition-all rounded-md" : "fixed bg-white z-10 left-2/4 -translate-x-2/4 p-5 -top-20 scale-0 transition-all rounded-md"}>
                <h2 className="font-bold text-xl font-poppins"><i className="fa-solid fa-circle-check text-green-600 mr-5"></i>Success!</h2>
                <p className="font-poppins mt-4">Your order has been submitted.</p>
            </div>

            <div className={modalOpen ? "fixed w-screen h-screen bg-modalbg" : "hidden"} onClick={() => setModalOpen(false) }></div> 

            <div className="flex flex-col w-128 mx-auto mt-20">
                {cartItems.map(item => {
                    return (
                        <div key={item.id} className="flex justify-between border-b-2 border-black">
                            <p className="font-semibold text-xl font-poppins mb-5 mt-5 text-rose-800">{item.name}<span className="font-light font-poppins ml-1 text-sm">({item.quantity})</span></p>
                            <p className="font-poppins mb-5 mt-5 text-rose-700">{item.price.toFixed(2)}</p>
                        </div>
                    )
                })}
            {
                !Array.isArray(cartItems) || !cartItems.length 
                ?   <div>
                    <h2 className="text-4xl font-bold text-rose-900 text-center mt-32 font-poppins">You do not have anything in your cart!</h2>
                    <h2 className="text-6xl font-bold text-rose-900 text-center mt-12 font-poppins">:(</h2>
                </div> 
            :   <div>
                    <h2 className="font-bold text-4xl font-poppins mt-5 text-rose-900">{totalPrice.toFixed(2)}</h2>
                    <form onSubmit={submitOrder}>
                        <button type="submit" className="font-poppins mt-5 bg-gradient-to-r font-semibold from-red-500 to-orange-600 h-10 p-1 w-full rounded-md text-white">Send Order</button>
                    </form>
                </div>
            }
            </div>
        </>
    )
}

export default Order