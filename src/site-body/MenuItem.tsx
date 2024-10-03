import { useCart } from "../context/ShoppingCartContext";

interface Props {
    id: number,
    itemname: string,
    price: number,
    img: string
}

function MenuItem(props: Props) {

  const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItem } = useCart()
  
  let quantity = getItemQuantity(props.id);

  return (
    <div key={props.id} className="bg-rose-900 rounded-2xl p-5">
        <img src={props.img} alt="" className="w-full h-96 rounded-2xl" />
        <h2 className="font-bold font-poppins text-xl ml-10 mt-3 text-white">{props.itemname}</h2>
        <h3 className="font-light font-poppins text-lg ml-10 mt-3 text-white">{props.price}</h3>
        {quantity === 0 
          ? (<button onClick={ () => increaseItemQuantity(props.id) } className="text-white font-poppins ml-10 border-2 mt-2 border-rose-500 rounded-md p-1 transition-all hover:bg-rose-500 hover:scale-125">Add To Cart</button>) 
          : <div className="flex flex-col items-center gap-5 mt-2">
                <div className="flex gap-5">
                  <button onClick={ () => decreaseItemQuantity(props.id)} className="bg-rose-500 w-7 h-8 font-poppins font-medium rounded-md text-white">-</button>
                  <span className="text-2xl text-rose-300">{quantity} in cart</span>
                  <button onClick={ () => increaseItemQuantity(props.id)} className="bg-rose-500 w-7 h-8 font-poppins font-medium rounded-md text-white">+</button>
                </div>
                <button onClick={() => removeItem(props.id)} className="bg-red-500 p-2 rounded-md font-poppins text-rose-100">Remove</button>
            </div> }
    </div>
  )
}

export default MenuItem