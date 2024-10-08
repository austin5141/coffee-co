import { useState, useEffect } from "react";
import MenuItem from "./Cards/MenuItem";

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
        <>
            <h1 className="font-teko text-6xl text-white stroke-neutral-950 shadow-sm shadow-black text-center font-thin border-4 w-52 border-rose-950 border-w mx-auto mt-5 bg-rose-800 tracking-wider">Our Menu</h1>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 w-128 md:w-[45rem] mb-10 xl:w-[80rem] mx-auto">
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
        </>
    )
}

export default Menu