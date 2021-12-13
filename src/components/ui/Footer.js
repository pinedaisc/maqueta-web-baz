import React from 'react'
import qrcode from 'assets/images/qr.png'
import appStore from 'assets/images/appstore.png'
import playStore from 'assets/images/playstore.png'

export const Footer = () => {
    return (
        <footer>
            <div className="holder">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="logo col-xl-4"></div>
                                <div className="col-xl-6 col-xs-4">
                                    <div className="network">
                                        <a href="#"><div className="fb"></div></a>
                                        <a href="#"><div className="in"></div></a>
                                        <a href="#"><div className="tw"></div></a>
                                        <a href="#"><div className="yt"></div></a>
                                    </div>
                                    <div className="mail-help"><a href="mailto:ayuda@baz.app">ayuda@baz.app</a></div>
                                    <div className="phone-help">55 63 77 44 47</div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xs-8 terms">
                            <ul>
                                <li><a href="">Términos y condiciones</a></li>
                                <li><a href="">Aclaraciones</a></li>
                                <li><a href="">Aviso de privacidad</a></li>
                            </ul>
                        </div>
                        <div className=" col links">
                            <div className="row">
                                <div className="col qrcore">
                                    <a href="#"><img src={qrcode} alt="descarga superapp baz" /></a>
                                </div>
                                <div className="col app-stores">
                                    <p>Escanea el código <br /> con tu celular</p>
                                    <a href="#"><img className="play-store" src={playStore} alt="" /></a>
                                    <a href="#"><img className="app-store" src={appStore} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row rights">
                        <div className="col line">
                            <hr />
                        </div>
                        <p>Derechos Reservados &copy; 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
