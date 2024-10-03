function AboutPage() {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 xl:grid-cols-3 justify-items-center mt-20 gap-14">
            <div className="text-center bg-rose-900 rounded-lg p-5 shadow-lg shadow-slate-950 flex flex-col justify-between">
                <h2 className="font-light text-4xl md:text-5xl font-poppins text-red-500"><i className="fa-solid fa-comment text-3xl mr-3"></i>About Us</h2>
                <hr className="border border-red-800 mt-2"/>
                <p className="font-poppins mt-5 w-96 text-red-500">CoffeeCo&trade; is a small business formed on October 1, 2024 that sells coffee.</p>
                <img src="coffeebeans.jpg" className="w-80 mx-auto rounded-3xl shadow-xl shadow-red-950" alt="" />
            </div>

            <div className="text-center mt-20 md:mt-0 bg-rose-900 rounded-lg p-5 shadow-lg shadow-slate-950">
                <h2 className="font-light text-4xl md:text-5xl font-poppins text-red-500"><i className="fa-solid fa-location-dot text-3xl mr-3"></i>Location</h2>
                <hr className="border border-red-800 mt-2"/>
                <p className="font-poppins w-96 mt-5 text-red-500">CoffeeCo's main building is set on 123 Main St, Hartford CT, but we're looking to expand to other parts of the state.</p>
                <img src="coffee.jpg" className="w-80 mx-auto rounded-3xl shadow-xl shadow-red-950" alt="" />
            </div>

            <div className="text-center mb-10 xl:mb-0 mt-20 md:mt-0 bg-rose-900 rounded-lg p-5 shadow-lg shadow-slate-950 flex flex-col justify-between">
                <h2 className="font-light text-4xl md:text-5xl font-poppins text-red-500"><i className="fa-solid fa-phone mr-3 text-3xl"></i>Phone</h2>
                <hr className="border border-red-800 mt-2"/>
                <p className="font-poppins w-96 mt-5 text-red-500">Call us today at (860)-123-4567.</p>
                <img src="coffee-person.jpg" alt="" className="w-80 mx-auto rounded-3xl shadow-xl shadow-red-950" />
            </div>
        </div>
        </>
    )
}

export default AboutPage