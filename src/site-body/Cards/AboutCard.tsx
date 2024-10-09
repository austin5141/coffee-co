interface Props {
    heading: string,
    body: string,
    img: string,
    icon: string
}

function AboutCard(props: Props) {
  return (
    <div className="relative inline-block">

      <img src={props.img} alt="" className="block w-full h-[20rem] md:h-[40rem] -z-10 brightness-95 saturate-150"/>
      
      <div className="absolute top-14 left-5 right-3 bg-red-950 rounded-lg p-5 w-[35rem]">
        <h2 className="font-light text-4xl md:text-6xl font-poppins text-red-700 text-start"><i className={`${props.icon} text-3xl md:text-5xl mr-3`}></i>{props.heading}</h2>
        <hr className="border border-red-700 w-128 my-5"/>
        <p className="font-poppins mt-5 text-start text-lg md:text-xl w-128 text-red-700 font-semibold">{props.body}</p>
      </div>
    </div>
  )
}

export default AboutCard