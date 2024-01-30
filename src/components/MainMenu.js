import '../App.css';
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MainMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Main-menu">
                <div className="Main-menu-buttons">
                    <div className="menu-btn" onClick={this.props.onSearchClick}>
                        <b>Search</b> <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg"/>
                    </div>
                    <div className="menu-btn" onClick={this.props.onMenuClose}>
                        <b>Menu</b> <FontAwesomeIcon icon="fa-solid fa-x" size="lg"/>
                    </div>
                </div>
                <div>
                    <div> Home </div>
                    <hr/>
                    <div> About us <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="lg" style={{float: "right"}}/></div> 
                    <hr/>
                    <div> Mission & Ambition <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="lg" style={{float: "right"}}/></div> 
                    <hr/>
                    <div> Technology <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="lg" style={{float: "right"}}/></div>
                    <hr/>
                    <div> Projects <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="lg" style={{float: "right"}}/></div>
                    <hr/>
                    <div> Programmes <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="lg" style={{float: "right"}}/></div> 
                    <hr/>
                    <div> Research & Acedmia <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="lg" style={{float: "right"}}/></div>
                    <hr/>
                    <div> Reports & Publications <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="lg" style={{float: "right"}}/></div> 
                    <hr/>
                    <div> News </div>
                    <hr/>
                    <div> Events </div>
                    <hr/>
                    <div> Partnerships </div>
                    <hr/>
                    <div> Contact </div>
                    <hr/>
                </div>
                <div style={{paddingTop: "5%"}}>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" size="lg" style={{marginRight: "8%"}}/>
                    <FontAwesomeIcon icon="fa-brands fa-twitter" size="lg" style={{marginRight: "8%"}}/>
                    <FontAwesomeIcon icon="fa-brands fa-square-youtube" size="lg" style={{marginRight: "8%"}}/>
                    <FontAwesomeIcon icon="fa-brands fa-square-facebook" size="lg" style={{marginRight: "8%"}}/>
                </div>
            </div>
        )
    }
}

export default MainMenu