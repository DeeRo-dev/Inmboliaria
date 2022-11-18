import style from "../../styles/Nosotros.module.css"
import imag from "../../public/banner.jpg";
import {Footer} from "../../components/Footer"
import {NavBar} from "../../components/ui/index.jsx";
import Image from 'next/image';
const Nosotros = ()=> {
  return(
    <div>  
    <Image className={style.imag} src={imag} alt="not found img"/>
     <NavBar/>
    <div className={style.contTitleP}>
      <h1>Sobre nosotros</h1>
    </div>
    <div className={style.content}>
    sssd
    </div>

  <Footer/>
   </div>
  )
}

export default Nosotros;