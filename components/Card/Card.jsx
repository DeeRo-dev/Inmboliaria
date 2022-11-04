
import {MdOtherHouses,MdTabUnselected,MdBathtub} from "react-icons/md";
import Image from 'next/image'
export const Card = ({img, title, span, cantidadH, cantidadB, cantidadA, precio})=> {
  return(
    <>
      <Image src={img}/>
      <h2>{title}</h2>
      <span>{span}</span>
      <div>
        <MdOtherHouses/>
        <h3>Habitaciones</h3>
        <span>{cantidadH}</span>
      </div>
      <div>
      <MdTabUnselected/>
        <h3>Banios</h3>
        <span>{cantidadB}</span>
      </div>
      <div>
      <MdBathtub/>
        <h3>Area</h3>
        <span>{cantidadA}</span>
      </div>
      <h3>En venta</h3>
      <span>{precio}</span>
    </>
  )
}