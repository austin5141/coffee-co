import React from 'react'

interface Props {
    heading: string,
    body: string,
    img: string,
    icon: string
}

function AboutCard(props: Props) {
  return (
    <div className="text-center bg-rose-900 rounded-lg p-5 shadow-lg shadow-slate-950 flex flex-col justify-between">
        <h2 className="font-light text-4xl md:text-5xl font-poppins text-red-500"><i className={`${props.icon} text-3xl mr-3`}></i>{props.heading}</h2>
        <hr className="border border-red-800 mt-2"/>
        <p className="font-poppins mt-5 w-96 text-red-500">{props.body}</p>
        <img src={props.img} className="w-80 mx-auto rounded-3xl shadow-xl shadow-red-950" alt="" />
    </div>
  )
}

export default AboutCard