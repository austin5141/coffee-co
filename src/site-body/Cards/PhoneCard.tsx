interface Props {
    heading: string,
    body: string,
    icon: string
}

function PhoneCard(props: Props) {
  return (
    <div className="relative inline-block h-96 bg-[#141010]">
      <div>
        <h2 className="font-light text-4xl md:text-5xl font-poppins text-white ml-5 mt-8"><i className={`${props.icon} text-3xl mr-3`}></i>{props.heading}</h2>
        <hr className="border border-white w-128 ml-5 my-5"/>
        <p className="font-poppins mt-5 w-96 text-white font-semibold ml-5">{props.body}</p>
      </div>
    </div>
  )
}

export default PhoneCard