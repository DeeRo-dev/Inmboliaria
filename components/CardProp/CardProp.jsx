import {MdOtherHouses,MdTabUnselected,MdBathtub} from "react-icons/md";
import Image from 'next/image'
import imag from "../../public/imgCasa.jpg"
import style from "../../styles/CardProp.module.css"

export const Card = ({img, title, span, cantidadH, cantidadB, cantidadA, precio})=> {
  return(
    <div className={style.card}>
      <Image className={style.img} src={imag}/>
      <div className={style.text}>
      <h2 className={style.titleCard}>{title} Casa mongolo</h2>
      <span>{span} Esta casa esta buenarda, aca vivio fredy mercurio. Luego se la vendio a messi</span>
      <h3>En venta</h3>
      <span className={style.precio}>{precio} $E54554</span>
      </div>
     <div className={style.contentIconsData}>
     <div className={style.contentDataIcon}>
        <h3><MdOtherHouses className={style.icon} />Habitaciones</h3>
        <span className={style.spn}>  {cantidadH} 2</span>
      </div>
      <div className={style.contentDataIcon}>
        <h3><MdBathtub className={style.icon} />Banios</h3>
        <span className={style.spn}> {cantidadB} 5</span>
      </div>
      <div className={style.contentDataIcon}>
        <h3><MdTabUnselected className={style.icon} />Area</h3>
        <span className={style.spn}> {cantidadA} 500 mtrs2</span>
      </div>
     </div>
   
    </div>
  )
}