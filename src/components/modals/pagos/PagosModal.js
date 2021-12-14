import React from 'react'

export const PagosModal = ({children, estado, cambiarEstado}) => {

    return (
        <>
        {estado &&
            <div className="overlay">
                <div className="contenedor-modal">
                <button className="btn-cerrarModal">cerrar</button>
                    <div className="contenido">
                    {children}
                    </div>
                <button className='btn-aceptar'>Aceptar</button>
                <button className='btn-cancelar'>Cancelar</button>
                </div>
            </div>
        }
        </>
    )
}
