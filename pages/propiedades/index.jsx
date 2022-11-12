
import {NavBar} from "../../components/ui/index.jsx";
import Image from 'next/image';
import imag from "../../public/banner.jpg";
import style from "../../styles/Vender.module.css"
 const Propiedades = ()=>{ 
  return (
    <div>  
      <Image className={style.img} src={imag} alt="not found img"/>
       <NavBar/>
     <div className={style.contentData}>
      <h1>Holaa que te vende,os</h1>
    </div>
     </div>
  )
}


export default Propiedades;