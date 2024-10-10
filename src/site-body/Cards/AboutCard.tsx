interface Props {
    heading: string,
    body: string,
    img: string,
    icon: string
}

function AboutCard(props: Props) {
  return (
    <div className="relative inline-block bg-[#240c0c]">

      <img src={props.img} alt="" className="block w-full h-[20rem] md:h-[35rem] -z-10 brightness-95 saturate-150 shadow-2xl"/>
      
      <div className="absolute top-20 left-9 w-[35rem]">
        <h1 className="font-light text-4xl md:text-6xl font-poppins text-black text-start"><i className={`${props.icon} text-3xl md:text-5xl mr-3`}></i>{props.heading}</h1>
        <hr className="border border-black w-128 my-5"/>
        <p className="font-poppins mt-5 text-start text-xl md:text-xl w-128 text-black font-semibold">{props.body}</p>
      </div>
    </div>
  )
}

export default AboutCard