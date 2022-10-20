//Components
import React from 'react'
import api from './services/api';
import { useState } from 'react'; 
import script from './script/Enter'

//Icons
import { FcSearch } from "react-icons/fc"
import { FiCopy } from "react-icons/fi"

import Palette from './assets/color.svg'
import Key from './assets/key.svg'
import Money from './assets/money.svg'
import Size from './assets/size.svg'



//Styles
import './styles/style.css'

function App() {

  const [ infos , setInfo ] = useState([])

  const [ nome , setNome ] = useState('')
  const [ img , setImg ] = useState(null)
  const [ id , setId ] = useState('')
  const [ preco , setPreco ] = useState('')
 
 
function copiarTexto(text){
  const textoSelecionado = document.createElement('textarea')
  textoSelecionado.innerText = text
  document.body.appendChild(textoSelecionado)
  textoSelecionado.select()
  document.execCommand('copy')
textoSelecionado.remove();
}



  async function achar(){
   
  
    const response = await api.get(id)
    try{
      setInfo(response.data.variations)
      setNome(response.data.title);
      setImg(response.data.pictures[0].url);
      setPreco(response.data.variations[0].price.toString().replace('.', ','))
     
      
      
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Info ML</h1>
      </header>
      <div className="container">
        <div className="search">
          <FcSearch/>
          <input autoFocus onChange={(e) => setId(e.target.value)}/>
          <button type="submit" className="button" onClick={() => achar()}>Pesquisar</button>
        </div>
      <h1>{nome}</h1>
    <div className="itemBox">
      <div className="containerImage">
        { img === null ? null : <img className="imgBox" src={img} alt="Imagem do produto" /> }
       <p className="subItens"><img src={Money} alt="Icon color" /> Preço: R$:{preco}</p>
      </div>
      <div>
        
       {infos.map(info => (
         
         <div className="containerItem" key={info.id}>
          
          
          <h1>Produto:</h1>
          <div className="Itens">
            <div className="colunmItem">
               
              <span id="subItensID"> <img src={Key} alt="Icon color" /><b>ID:</b> {info.id} <button id="buttonCopy" onClick={() => copiarTexto(info.id)}><FiCopy id="iconCopy"/></button></span>
              { info.attribute_combinations.length >= 2 ? 
               <span className="subItens"> <img src={Size} alt="Icon color" /> <b>Tamanho:</b> {info.attribute_combinations[1].value_name}</span> :
               <span></span>
            }
              <span className="subItens"> <img src={Palette} alt="Icon color" /> <b>Cor:</b> {info.attribute_combinations[0].value_name}</span>
            </div>
           
          
          </div>
        
        </div>
       ))}
      </div>
      
       
      </div>
       
    </div>
            
    <script src={script}/>
    </div>
  );
}

export default App;
