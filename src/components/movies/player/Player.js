import React from 'react'


export const Player = () => {
    return (
        <div className="container">
            <section className="video-area">
                <div className="wrapper">
                    <div className="video-player">
                        <button id="btnReplay" className="btn-replay"><span className="fontawesome-refresh"></span></button>

                        <video id="video" className="video" src="https://youtu.be/F3VnY5KC_XI"
                            type="video/mp4" poster="" preload="none" />

                        <div className="video-controls">

                            <div className="video-bars">
                                <input type="range" id="barSeeker" className="bar-seeker" value="50" min="0" max="100" step="0.1" />
                                <progress value="50" max="100" step="0.1" id="barProgress" className="bar-progress"></progress>
                                <progress value="50" max="100" step="0.1" id="barBuffer" className="bar-buffer"></progress>
                                <span id="timePlayed">00:00</span>
                            </div>

                            <div className="video-buttons">
                                <button id="btnState"><span className="fontawesome-play"></span></button>
                                <button id="btnTenplus"><span className="fontawesome-undo"></span></button>
                                <button id="btnTenminus"><span className="fontawesome-undo"></span></button>
                                <button id="btnSound" className="btn-sound"><span className="fontawesome-volume-up"></span></button>
                                <input type="range" id="sliderVolume" className="slider-volume" value="10" min="0" max="10" />
                            </div>

                            <div id="timeBubble" className="time-bubble">00:00</div>

                            <span id="timeDuration">00:00</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
