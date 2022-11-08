import style from "../../styles/Footer.module.css"
import { FaFacebookSquare,FaInstagram,FaWhatsapp } from "react-icons/fa";
import Link from 'next/link'
export const Footer = () =>{
  return(
    <div className={style.footer}>
       <div>
        <h1>Logo</h1>
        <span>C Todos los derechos reservados X</span>
        <p>Bera@ffdas.com</p>
        <ul>
          <li><Link href="#"> <FaFacebookSquare/></Link></li> 
          <li><Link href="#"><FaInstagram/></Link></li>
          <li><Link href="#"><FaWhatsapp/></Link></li>
        </ul>
       </div>
       <div>
        <ul>
          <li>Propiedades</li>
          <li>Quires Vender?</li>
          <li>Servicios</li>
          <li>Sobre Nosotros</li>
          <li>Contacto</li>
        </ul>
       </div>
       <div>Creado por Free Devs</div>
    </div>
  )
}