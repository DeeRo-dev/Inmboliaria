import style from "../../styles/Servicios.module.css"
import imag from "../../public/banner.jpg";
import {Footer} from "../../components/Footer"
import {NavBar} from "../../components/ui/index.jsx";
import Image from 'next/image';
import Button from '@mui/material/Button';
 import { TextField } from '@mui/material';

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
        <h1 className={style.title}>Title</h1>
        <h4 className={style.subTitle}>Subtitle y un poco de text</h4>
        <p className={style.parrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur porro distinctio accusamus ipsa sapiente hic voluptate velit adipisci ut alias autem molestias magnam voluptatibus quam expedita ipsam, suscipit nostrum!</p>
      </div>
      <Image className={style.img} src={imag}/>
     </div>
     <div className={style.infoServ}>
      <Image className={style.img} src={imag}/>
      <div className={style.contentText}>
      <h1 className={style.title}>Title</h1>
        <h4 className={style.subTitle}>Subtitle y un poco de text</h4>
        <p className={style.parrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur porro distinctio accusamus ipsa sapiente hic voluptate velit adipisci ut alias autem molestias magnam voluptatibus quam expedita ipsam, suscipit nostrum!</p>
      </div>
     
     </div>
     <div className={style.infoServ}>
      <div className={style.contentText}>
      <h1 className={style.title}>Title</h1>
        <h4 className={style.subTitle}>Subtitle y un poco de text</h4>
        <p className={style.parrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur porro distinctio accusamus ipsa sapiente hic voluptate velit adipisci ut alias autem molestias magnam voluptatibus quam expedita ipsam, suscipit nostrum!</p>
      </div>
      <Image className={style.img} src={imag}/>
     </div>
     <div className={style.infoServ}>
     <Image className={style.img} src={imag}/>
      <div className={style.contentText}>
      <h1 className={style.title}>Title</h1>
        <h4 className={style.subTitle}>Subtitle y un poco de text</h4>
        <p className={style.parrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur porro distinctio accusamus ipsa sapiente hic voluptate velit adipisci ut alias autem molestias magnam voluptatibus quam expedita ipsam, suscipit nostrum!</p>
      </div>
    
     </div>
    </div>
    <div className={style.contentForm}>
      <h2 className={style.titleForm}>No dudes en contactarnos para obtener mas info</h2>
      <form className={style.form} action="">
              <TextField className={style.input} id="outlined-basic" label="Nombre" variant="outlined" />
              <TextField className={style.input} id="outlined-basic" label="Telefono" variant="outlined" />
              <TextField className={style.input} id="outlined-basic" label="Email" variant="outlined" />
             <div className={style.check}>
             <input type="checkbox" name="check" id="" /> 
              <label htmlFor="">He leído y acepto las politicas de uso</label>
             </div>
              <Button variant="contained" size="large">
          Enviar
        </Button>
        <span className={style.span}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, fuga velit! Consequuntur, modi quisquam fugiat illum perferendis debitis dolor autem dolorum architecto ab, accusamus nostrum. Modi sint quia neque doloribus?
        Dignissimos, eum alias amet tenetur molestias qui. Aliquam tempora consequuntur nobis fuga non, cupiditate, atque doloremque odio, iusto est ex facilis nihil esse nostrum voluptatibus alias assumenda. Voluptas, sit blanditiis.
        In dolore est sed modi culpa consequuntur tempora, quod iste debitis, voluptates excepturi mollitia fugiat. Ea obcaecati at laborum tempora, modi veniam dolorum. Velit pariatur nostrum excepturi dicta perferendis nam.
        Ullam necessitatibus rem ipsam totam suscipit quam temporibus, recusandae fuga ratione sapiente accusantium perferendis dignissimos asperiores minus pariatur quos Ullam, veritatis esse.
        Temporibus m inventore si, ab nostrum dignissimos assumenda optio recusandae, incidunt odit rem neque libero amet obcaecati soluta ea sint? Consectetur quidem culpa doloremque, quibusdam quae quam consequuntur?</span>
      </form> 

    </div>
  <Footer/>
   </div>
  )
}

export default Servicios;