import '../App.css';
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="footer-panel">
                <a className="footer-link" href="" style={{marginRight: "2%"}}>©2021 Net Zero Technology Centre</a>
                <a className="footer-link" href="https://www.netzerotc.com/general-terms-conditions-ofpurchase-for-goods-and-orservices/" style={{marginRight: "2%"}}>Terms</a>
                <a className="footer-link" href="https://www.netzerotc.com/nztc-privacy-policy-and-cookies/" style={{marginRight: "2%"}}>Privacy</a>
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-linkedin" size="lg"/>
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-twitter" size="lg"/>
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-square-youtube" size="lg"/>
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-square-facebook" size="lg"/>
            </div>
        )
    }
}

export default Footer