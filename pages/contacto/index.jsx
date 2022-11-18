import style from "../../styles/Contacto.module.css"
import imag from "../../public/banner.jpg";
import {Footer} from "../../components/Footer"
import {NavBar} from "../../components/ui/index.jsx";
import Image from 'next/image';
const Contacto = ()=> {
  return(
    <div>  
    <Image className={style.imag} src={imag} alt="not found img"/>
     <NavBar/>
    <div className={style.contTitleP}>
      <h1>Contacto</h1>
    </div>
    <div className={style.content}>
    sssd
    </div>

  <Footer/>
   </div>
  )
}

export default Contacto;