
import {NavBar} from "../../components/ui/index.jsx";
import Image from 'next/image';
import imag from "../../public/banner.jpg";
import img from "../../public/venta.jpg";
import style from "../../styles/Vender.module.css"

import {Footer} from "../../components/Footer"
 const Vender = ()=>{ 
  return (
    <div>  
      <Image className={style.imag} src={imag} alt="not found img"/>
       <NavBar/>
      <div className={style.contTitleP}>
        <h1>Quieres Vender</h1>
      </div>
    	<div className={style.content}>
        <div className={style.contentImgspam}>
          <div className={style.contentP}>
            <p>En Bera y tu casa entendemos lo relevante que supone la venta o la adquisición de su hogar, ya que probablemente es una de las inversiones financieras más importantes que hará en su vida.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aliquam, ratione neque minus, maxime officia dolor laborum eaque sint provident velit et magni facere natus minima, consequuntur tempora recusandae quaerat!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aliquam, ratione neque minus, maxime officia dolor laborum eaque sint provident velit et magni facere natus minima, consequuntur tempora recusandae quaerat!</p>
         </div>\
          <div className={style.contentImg}><Image src={img} className={style.img}/></div>
        </div>
        <div className={style.contentSpam}>
          <div className={style.TitleP}>
            <h1>Titulo</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aliquam, ratione neque minus, maxime officia dolor laborum eaque sint provident velit et magni facere natus minima, consequuntur tempora recusandae quaerat!</p>
          </div>
          <div className={style.contentCards}>
            <div className={style.card}></div>
            <div className={style.card}></div>
            <div className={style.card}></div>
            <div className={style.card}></div>
          </div>
        </div>
      </div>

    <Footer/>
     </div>
  )
}


export default Vender;