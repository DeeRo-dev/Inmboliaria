
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
        <h2>Logo</h2>
        </div>
        <ul className={style.ul}>
          <li className={style.li}><Link href="/info.-">Propiedades</Link></li>
          <li className={style.li}><Link href="/">Quieres vender?</Link></li>
          <li className={style.li}><Link href="/">Servicios</Link></li>
          <li className={style.li}><Link href="/">Sobre de nosotros</Link></li>
          <li className={style.li}><Link href="/">Contacto</Link></li>
        </ul>
      </nav>
    </>
  )
}
