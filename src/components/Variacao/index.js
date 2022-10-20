import React from 'react'

export default function Variacao( props ){
    return(
        <p className="subItens">  
            <b>Tamanho:</b> { props.value >= 2  ? 
            <p>{props.value}</p> :
            <p>Olá</p>
            }
        </p> 
    
    )
}