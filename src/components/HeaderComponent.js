import '../App.css';
import React, { Component } from 'react'
import backgroundImage from '../assets/HeaderImage.jpg';
import MainMenuButton from './MainMenuButton';

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <header style={{
                backgroundImage: `url(${backgroundImage})`
            }}>
                <MainMenuButton/>
                <div className="left-panel">
                    <div style={{ marginBottom:'40%' }}>
                        <div>
                            <h1>LOGO</h1>
                        </div>
                        <hr/>
                    </div>
                    <div style={{ marginBottom:'40%' }}>
                        <h1>The future of energy starts here.</h1>
                        <p>We help develop and deploy technology for an affordable Net Zero energy.</p>
                        <button className="btn">Discover More</button>
                    </div>
                    <div style={{display: "flex"}}>
                        Prev <div style={{borderBottom:"1px solid", margin: "8px", width:"120px"}}/> Next
                    </div>
                </div>
                
            </header>
        )
    }
}

export default Header