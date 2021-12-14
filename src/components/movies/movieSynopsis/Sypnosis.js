import React from 'react'
import { useState } from 'react';
import { PagosModal } from './../../modals/pagos/PagosModal';
import { Player } from './../player/Player';

export const Sypnosis = ({data}) => {
    const [estaado, estadomodal1] = useState(false)
    
     const pagar = () => {
        console.log("hola")
    }
    return (
        <>
            <div id="datos">
                <div id="titulo">
                    <span className="font_32_bold">Sin tiempo para morir</span>
                </div>
                <div id="sipnosis">
                    <ul>
                        <li className="font_16 sin_borde_izq">HD</li>
                        <li className="font_16">B15</li>
                        <li className="font_16">2021</li>
                        <li className="font_16">1h 32 min</li>
                        <li className="font_16 sin_borde_der">Idiomas: Ingles, Español</li>
                    </ul>
                </div>

                <div id="descripcion">
                    <span className="font_18_bold" id="desc">Descripción</span>
                    <span className="font_16" id="informacion">
                        Seis personas se encuentran encerradas de manera inesperada en una nueva serie de escape rooms, revelando paulatinamente aquello que tienen en común para sobrevivir…
                    </span>
                </div>

                <div id="precio">
                    <span className="font_18_bold">HD $50.00</span>
                </div>
                <div id="iva">
                    <span className="font_13">IVA incluido.</span>
                </div>

                <div id="rentar">
                    <button href="#" onClick={pagar()}><span className="font_16">Rentar</span></button>
                </div>
            </div>

            <PagosModal >
                <Player />
            </PagosModal>
        </>
    )
}
