
import {NavBar} from "../../components/ui/index.jsx";
import Image from 'next/image';
import imag from "../../public/banner.jpg";
import style from "../../styles/Propiedades.module.css"
import  {Card}  from "../../components/CardProp";
import {Footer} from "../../components/Footer"
 const Propiedades = ()=>{ 
  return (
    <div>  
      <Image className={style.img} src={imag} alt="not found img"/>
       <NavBar/>
      <div className={style.contTitleP}>
        <h1>Propiedades a la venta</h1>
      </div>
       <div className={style.contentForm}>
         <form action="">
         <select className={style.inputSel} name="drawfs" id="drawfs">
            <option >Tipo de propiedad</option>
             <option>Casa</option>
            <option>Dpto</option>
            <option>Atico</option>
            <option>Local</option>
          </select>
          <select className={style.inputSel} name="drawfs" id="drawfs">
            <option>Ciudades</option>
             <option>Berazategui</option>
            <option>CABA</option>
            <option>La plata</option>
            <option>City Bell</option>
          </select>
          <select className={style.inputSel} name="drawfs" id="drawfs">
            <option>Alquiler</option>
             <option>En venta</option>
          </select>
            <button className={style.btn}>Buscar</button>
         </form>
          </div>
     <div className={style.cards}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

    </div>
    <Footer/>
     </div>
  )
}


export default Propiedades;