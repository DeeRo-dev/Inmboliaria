
import Head from "next/head";
import { NavBar } from "../ui";
import style from '../../styles/Layout.module.css';
import { Footer } from "../Footer";
import { FiCodesandbox, FiUsers, FiDollarSign} from "react-icons/fi";
import { Card } from "../Card";


export const Layout = ({title, children})=> {

  return(
    <>
      <Head>
        <link rel="icon" href="/icon.png"/>
        <title>{title }</title>
        <meta name="author" content="Free Devs"/>
      </Head>
      <div className={style.containerMain}>

      <NavBar/>
       <main >
        <div className={style.content}>
          <div>
          <h1>Bera y tu casa</h1>
           <h2>La nueva era inmobiliaria</h2>
          </div>
          <div>
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
        </div>  
   
      </main>
</div>
<div className={style.venta}>
        <h2 className={style.titleDpt}>Propiedades en venta</h2>
        <span lassName={style.subtitleDpt}>Listado con las ultimas propiedades puestas en venta</span>
        <div className={style.cards}>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </div>
        <button className={style.btnServ}>Ver mas propiedades en venta</button>
      </div>


      <div className={style.venta}>
        <h2 className={style.titleDpt}>Propiedades en Alquiler</h2>
        <span lassName={style.subtitleDpt}>Listado con las ultimas propiedades que estan en alquiler</span>
        <div className={style.cards}>
        <Card/>
        <Card/>
        <Card/>
     
        </div>
        <button className={style.btnServ}>Ver mas propiedades en alquiler</button>
      </div>

      <div className={style.vInmueble}>
        <h1>Queires Vender un inmueble?</h1>
        <p> En Bera y tu casa queresmos ayudarte a vender tu casa sin que  tu tengas que preocuparte de nada. Haz click en el siguiente boton para ver mas info</p>
        <button className={style.btnvInm}>Quiero vender mi inmueble</button>
      </div>

      <div className={style.servicio}>
        <h1  className={style.titleDpt}>Nuestros Servicios</h1>
        <div className={style.contentCardServ}>
        <div className={style.cardsServicio}>
          <FiCodesandbox className={style.icon}/>
       <h1 className={style.titleSirvicio}>Arquitectura</h1>
        <p className={style.subtitleSirvicio}> En Bera y tu casa queresmos ayudarte a vender tu casa sin que  tu tengas que preocuparte de nada. Haz click en el siguiente boton para ver mas info</p>
       </div>
       <div className={style.cardsServicio}>
       <FiUsers className={style.icon}/>
       <h1 className={style.titleSirvicio}>Coaching Inmobiliario</h1>
        <p className={style.subtitleSirvicio}> En Bera y tu casa queresmos ayudarte a vender tu casa sin que  tu tengas que preocuparte de nada. Haz click en el siguiente boton para ver mas info</p>
       </div>
       <div className={style.cardsServicio}>
        <FiDollarSign className={style.icon}/>
       <h1 className={style.titleSirvicio}>Asesoramiento Financiero</h1>
        <p className={style.subtitleSirvicio}> En Bera y tu casa queresmos ayudarte a vender tu casa sin que  tu tengas que preocuparte de nada. Haz click en el siguiente boton para ver mas info</p>
       </div>
        </div>
        <button className={style.btnServ}>Mas informacion acerca de los servicios</button>
      </div>
     
      <Footer/>
    </>
  )
}