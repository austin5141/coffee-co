interface Props {
    heading: string,
    body: string,
    icon: string
}

function LocationCard(props: Props) {
  return (
    <div className="relative inline-block h-96 text-end bg-[#1a1313]">
      <div>
        <h2 className="font-light text-4xl md:text-5xl font-poppins text-white ml-auto text-end w-128 mr-5 mt-8"><i className={`${props.icon} text-3xl mr-3`}></i>{props.heading}</h2>
        <hr className="border border-white w-128 ml-auto mr-5 my-5"/>
        <p className="font-poppins mt-5 text-white font-semibold ml-auto mr-5 w-[35rem] text-end">{props.body}</p>
      </div>
    </div>
  )
}

export default LocationCard