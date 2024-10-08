import AboutCard from "./Cards/AboutCard"

function AboutPage() {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 xl:grid-cols-3 justify-items-center mt-20 gap-14">
            <AboutCard 
                    heading="About Us"
                    body="CoffeeCo&trade; is a small business formed on October 1, 2024 that sells coffee."
                    img="coffeebeans.jpg"
                    icon="fa-solid fa-comment"
                />
                
            <AboutCard 
                    heading="Location"
                    body="CoffeeCo's main building is set on 123 Main St, Hartford CT, but we're looking to expand to other parts of the state."
                    img="coffee.jpg"
                    icon="fa-solid fa-location-dot"
                />

            <AboutCard 
                    heading="Phone"
                    body="Call us today at (860)-123-4567."
                    img="coffee-person.jpg"
                    icon="fa-solid fa-phone"
                />  
        </div>
        </>
    )
}

export default AboutPage