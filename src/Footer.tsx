import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-rose-900 w-full h-32 mt-auto">
        <div className="flex items-center justify-between">
            <div className="text-center mt-10 ml-10">
                <i className="fa-solid fa-mug-hot text-3xl mr-3 text-white"></i>
                <NavLink to="/" className="text-white no-underline text-4xl font-thin font-teko tracking-wider relative top-1">The Coffee Hub</NavLink>
            </div>

            <div className='mr-10 mt-10 flex gap-5'>
                <div className="bg-rose-500 p-30 rounded-[50%] w-[75px] h-[75px] text-center align-middle leading-[85px]">
                    <a href="#"><i className="fa-brands fa-twitter text-4xl text-white leading-[50px] text-center"></i></a>
                </div>
                <div className="bg-rose-500 p-30 rounded-[50%] w-[75px] h-[75px] text-center align-middle leading-[85px]">
                    <a href="#"><i className="fa-brands fa-facebook text-4xl text-white leading-[50px] text-center"></i></a>
                </div>
                <div className="bg-rose-500 p-30 rounded-[50%] w-[75px] h-[75px] text-center align-middle leading-[85px]">
                    <a href="#"><i className="fa-brands fa-instagram text-4xl text-white leading-[50px] text-center"></i></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer