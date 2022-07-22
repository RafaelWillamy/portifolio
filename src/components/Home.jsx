import { Link } from "react-scroll";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"



export function Home(){
  return(
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center via-black to-gray-900">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-4">
            Estudante de Desenvolvimento Web Front
          </h2>
          <p className="text-gray-200 py-4 max-w-md">
            Venho estudando Front a cerca de 1 ano, venho me aprimorando a cada dia sempre buscando aprender algo novo. 
            Já tenho conhecimento em algumas técnologias como React, Tailwind, Next Js e GrapgQL.

          </p>
          <div>
            <Link to="portifolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portifolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-2"/>
              </span>
            </Link>
          </div>
        </div>
        <di>
          <img src="https://avatars.githubusercontent.com/u/93390835?s=400&u=0612591a1f585c9b4d834b4fd1f140a934b8b5c4&v=4" className="rounded-full mx-auto w-2/3 md:w-full" />
        </di>
      </div>
    </div>
  )
}