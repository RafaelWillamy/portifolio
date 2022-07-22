import React from "react";
import arrayDestruct from '../assets/arrayDestruct.jpg'
import installNode from '../assets/installNode.jpg'
import navbar from '../assets/navbar.jpg'
import reactParallax from '../assets/reactParallax.jpg'
import reactSmooth from '../assets/reactSmooth.jpg'
import reactWeather from '../assets/reactWeather.jpg'
export function Portifolio(){
  const Portifolio=[
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  return(
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
    portifolio
          </p>
          <p className="py-6">
            Confira Alguns dos meus Trabalhos Aqui!!
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Portifolio.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-red-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
 </div>
    </div>
    </div>
  )
}