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
    <div className={style.container}>
    <div>
        <p className={style.spn}>Bera Y Tu Casa nace de la idea de asesorar y encontrar la vivienda indicada para cada persona en función de sus necesidades, y presupuesto.<br/>
Nuestra experiencia como agentes de la propiedad inmobiliaria y especialmente como coachs inmobiliarios, nos hace entender y analizar bien cada inmueble que tenemos en cartera, y el perfil de comprador idóneo para esa propiedad. La parte vendedora recibe siempre visitas útiles y filtradas. Así practicamos el win to win (ganar-ganar) donde tanto la parte compradora como la vendedora queden satisfechos y sin pérdidas de tiempo.<br/>
Para nosotros cada inmueble que tenemos para gestionar su venta es un ejemplar único al que cuidamos y le damos un trato personalizado, y tenemos comunicación constante con el propietario para informarle de todo lo acontece respecto a su propiedad.<br/>
<br/>
Bera Y Tu Casa aporta un enfoque fresco e innovador al mercado inmobiliario, profesional, cercano, transparente. Nuestro éxito es lograr tu satisfacción.<br/>
<br/>
Trabajamos en Berazategui, ciudad capital y área metropolitana. (Baix Llobregat-Vallés Oriental- Vallés Occidental- Maresme).</p><br/>
      </div>
      <div>
        <Image className={style.img} src={imag}/>
      </div>
    </div>
    </div>

  <Footer/>
   </div>
  )
}

export default Nosotros;