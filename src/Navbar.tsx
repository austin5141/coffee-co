import { NavLink } from "react-router-dom"
import { useCart } from "./context/ShoppingCartContext"
import { useState } from "react"

function Navbar() {
    const { cartQuantity } = useCart()
    const [navMenuOpen, setNavMenuOpen] = useState(false)
    return (
        <>
            <nav className="bg-rose-900 p-7 flex items-center justify-between font-poppins">
                <div>
                    <i className="fa-solid fa-mug-hot text-3xl mr-3 text-white"></i>
                    <NavLink to="/" className="text-white no-underline text-4xl font-thin font-teko tracking-wider relative top-1">The Coffee Hub</NavLink>
                </div>
                
                <div className="block md:hidden">
                    <button onClick={() => setNavMenuOpen(true)}><i className="fa-solid fa-bars text-white"></i></button>
                    <NavLink to="/order/" className="text-white mt-10 ml-5 mr-5 transition-transform hover:font-extrabold hover:scale-125 relative">
                        {cartQuantity != 0 ? (<span className="bg-pink-700 rounded-full text-white absolute top-2 right-3 w-[1rem] h-[1rem] text-center text-[0.7rem] font-semibold">{cartQuantity}</span>) : null }
                        <i className="fa-solid fa-cart-shopping"></i>
                    </NavLink>
                </div>

                <div className="mr-10 font-light hidden md:block">
                    <NavLink to="/" className="text-white mr-5 transition-all hover:font-extrabold hover:scale-125">Home </NavLink>
                    <NavLink to="/menu/" className="text-white mr-5 transition-all hover:font-extrabold hover:scale-125">Menu</NavLink>
                    <NavLink to="/review/" className="text-white mr-5 transition-all hover:font-extrabold hover:scale-125">Review Us</NavLink>
                    <NavLink to="/order/" className="text-white mr-5 transition-all hover:font-extrabold hover:scale-125 relative">
                        {cartQuantity != 0 ? (<span className="bg-pink-700 rounded-full text-white absolute top-2 right-3 w-[1.3rem] h-[1.3rem] text-center text-[0.9rem] font-semibold">{cartQuantity}</span>) : null }
                        <i className="fa-solid fa-cart-shopping"></i>
                    </NavLink>
                </div>
            </nav>
            {navMenuOpen 
            ? (<div className="flex flex-col items-end bg-rose-500 w-60 fixed right-0 h-screen z-10 md:hidden">
                <button className="mr-5 mt-10 text-rose-950 font-bold text-3xl" onClick={() => setNavMenuOpen(false)}>X</button>
                    <NavLink to="/" className="text-rose-950 text-2xl mt-10 mr-5 transition-all hover:font-extrabold hover:scale-125">Home </NavLink>
                    <NavLink to="/menu/" className="text-rose-950 text-2xl mt-10 mr-5 transition-all hover:font-extrabold hover:scale-125">Menu</NavLink>
                    <NavLink to="/review/" className="text-rose-950 text-2xl mt-10 mr-5 transition-all hover:font-extrabold hover:scale-125">Review Us</NavLink>
            </div>) 
            : null}
        </>
    )
}

export default Navbar