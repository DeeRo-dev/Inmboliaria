import style from "../../styles/Servicios.module.css"
import imag from "../../public/banner.jpg";
import {Footer} from "../../components/Footer"
import {NavBar} from "../../components/ui/index.jsx";
import Image from 'next/image';
const Servicios = ()=> {
  return(
    <div>  
    <Image className={style.imag} src={imag} alt="not found img"/>
     <NavBar/>
    <div className={style.contTitleP}>
      <h1>Servicios</h1>
    </div>
    <div className={style.content}>
     <div className={style.infoServ}>
      <div className={style.contentText}>
        <h1>Title</h1>
        <h4>Subtitle y un poco de text</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur porro distinctio accusamus ipsa sapiente hic voluptate velit adipisci ut alias autem molestias magnam voluptatibus quam expedita ipsam, suscipit nostrum!</p>
      </div>
      <Image className={style.img} src={imag}/>
     </div>
     <div className={style.infoServ}>
      <Image className={style.img} src={imag}/>
      <div className={style.contentText}>
      <h1>Title</h1>
        <h4>Subtitle y un poco de text</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur porro distinctio accusamus ipsa sapiente hic voluptate velit adipisci ut alias autem molestias magnam voluptatibus quam expedita ipsam, suscipit nostrum!</p>
      </div>
     
     </div>
     <div className={style.infoServ}>
      <div className={style.contentText}>
      <h1>Title</h1>
        <h4>Subtitle y un poco de text</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur porro distinctio accusamus ipsa sapiente hic voluptate velit adipisci ut alias autem molestias magnam voluptatibus quam expedita ipsam, suscipit nostrum!</p>
      </div>
      <Image className={style.img} src={imag}/>
     </div>
     <div className={style.infoServ}>
     <Image className={style.img} src={imag}/>
      <div className={style.contentText}>
      <h1>Title</h1>
        <h4>Subtitle y un poco de text</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur porro distinctio accusamus ipsa sapiente hic voluptate velit adipisci ut alias autem molestias magnam voluptatibus quam expedita ipsam, suscipit nostrum!</p>
      </div>
    
     </div>
    </div>

  <Footer/>
   </div>
  )
}

export default Servicios;