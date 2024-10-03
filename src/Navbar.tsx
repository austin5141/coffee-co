import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className="bg-rose-900 p-7 flex items-center justify-between font-poppins">
                <div>
                    <i className="fa-solid fa-mug-hot text-3xl mr-3 text-white"></i>
                    <NavLink to="/" className="text-white no-underline text-4xl font-thin font-teko tracking-wider relative top-1">CoffeeCo</NavLink>
                </div>
                
                <div className="block md:hidden">
                    <button><i className="fa-solid fa-bars text-white"></i></button>
                </div>

                <div className="mr-10 font-light hidden md:block">
                    <NavLink to="/" className="text-white mr-5 transition-transform hover:font-extrabold hover:scale-125">Home </NavLink>
                    <NavLink to="/menu/" className="text-white mr-5 transition-transform hover:font-extrabold hover:scale-125">Menu</NavLink>
                    <NavLink to="/review/" className="text-white mr-5 transition-transform hover:font-extrabold hover:scale-125">Review Us</NavLink>
                    <NavLink to="/order/" className="text-white mr-5 transition-transform hover:font-extrabold hover:scale-125"><i className="fa-solid fa-cart-shopping"></i></NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar