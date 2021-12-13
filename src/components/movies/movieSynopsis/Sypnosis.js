import React from 'react'

export const Sypnosis = ({data}) => {
    return (
        <div id="datos">
            <div id="titulo">
                <span class="font_32_bold">Sin tiempo para morir</span>    
            </div>
            <div id="sipnosis">
                <ul>
                    <li class="font_16 sin_borde_izq">HD</li>
                    <li class="font_16">B15</li>
                    <li class="font_16">2021</li>
                    <li class="font_16">1h 32 min</li>
                    <li class="font_16 sin_borde_der">Idiomas: Ingles, Español</li>                        
                </ul>
            </div> 
            
            <div id="descripcion">
                <span class="font_18_bold" id="desc">Descripción</span>                      
                <span class="font_16" id="informacion">
                    Seis personas se encuentran encerradas de manera inesperada en una nueva serie de escape rooms, revelando paulatinamente aquello que tienen en común para sobrevivir…
                </span>
            </div>
            
            <div id="precio">
                <span class="font_18_bold">HD $50.00</span>
            </div>
                <div id="iva">
                <span class="font_13">IVA incluido.</span>
            </div>

            <div id="rentar">
                <a href="#"><span class="font_16">Rentar</span></a>
            </div>
        </div>
    )
}
