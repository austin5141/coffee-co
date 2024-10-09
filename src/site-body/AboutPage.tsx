import AboutCard from "./Cards/AboutCard"
import LocationCard from "./Cards/LocationCard"
import PhoneCard from "./Cards/PhoneCard"

function AboutPage() {
    return (
        <>        
                <AboutCard 
                        heading="About Us"
                        body="The Coffee Hub is a small business formed on October 1, 2024 that sells all sorts of coffee."
                        img="coffeebeans.jpg"
                        icon="fa-solid fa-comment"
                    />
                    
                <LocationCard 
                    heading="Location"
                    body="The Coffee Hub's main building is set on 123 Main St, Hartford CT, but we're currently looking to expand to other parts of the state."
                    icon="fa-solid fa-location-dot"
                />

                <PhoneCard 
                        heading="Phone"
                        body="Call us today at (860)-123-4567."
                        icon="fa-solid fa-phone"
                    />  
        </>
    )
}

export default AboutPage