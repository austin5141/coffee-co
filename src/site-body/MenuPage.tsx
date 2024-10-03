import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

function Menu() {
    const [menuItems, setMenuItems] = useState([] as any[]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("/menu.json", {
                    headers: {
                        Accept: "application/json",
                    },
                });
                const data = await response.json();
                setMenuItems(data);
            } catch (error) {
                console.error("Error fetching:", error)
            }
        }; 
        fetchItems()
    },[]);

    let items = menuItems

    return (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 w-128 md:w-[45rem] mb-10 xl:w-256 mx-auto">
            {items.map(function(item) {
                return (
                    <MenuItem
                        key={item.id}
                        id={item.id} 
                        itemname={item.name}
                        price={item.price}
                        img={item.img}
                    />
                )
            })}
        </div>
    )
}

export default Menu