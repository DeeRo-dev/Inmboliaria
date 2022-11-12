
import Image from "next/image";
import {Spacer, Text, useTheme} from "@nextui-org/react";
import Link from 'next/link'
import style from "../../styles/NavBar.module.css"



export const NavBar = () => {
  // const {theme}= useTheme();
  return (
    <>
      <nav className={style.nav}>
        <div className={style.contentLogo}>
        <Link href="/">
           <h2>Logo</h2>
        </Link>
     
        </div>
        <ul className={style.ul}>
          <li className={style.li}><Link href="/propiedades">Propiedades</Link></li>
          <li className={style.li}><Link href="/vender">Quieres vender?</Link></li>
          <li className={style.li}><Link href="/">Servicios</Link></li>
          <li className={style.li}><Link href="/">Sobre de nosotros</Link></li>
          <li className={style.li}><Link href="/">Contacto</Link></li>
        </ul>
      </nav>
    </>
  )
}
