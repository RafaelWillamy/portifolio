import { Home } from "./components/Home"
import { NavBar } from "./components/NavBar"
import { Portifolio } from "./components/Portifolio"
import { Sobre } from "./components/Sobre"
import Experience from "./components/Experience";
import {Contato} from "./components/Contato"
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
<NavBar/>
 <Home/>
 <Sobre/>
 <Portifolio/>
 <Experience />
 <Contato />
 <SocialLinks/>
    </div>
 
  )
}
export default App
