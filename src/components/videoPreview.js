import '../App.css';
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class VideoPreview extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            image: null,
            title: ""
        };
    }

    render() {
        return (
            <div 
                className="background-image" 
                style={{backgroundImage: `url(${this.props.image})`}}>
                <div className="left-panel">
                    <p className='image-title'>{this.props.title}</p>
                   {this.props.children}
                    <div style={{display: "flex", marginBottom: "0", marginTop: "100%"}}>
                        Prev <div style={{borderBottom:"1px solid", margin: "8px", width:"120px"}}/> Next
                    </div>
                </div>
                <FontAwesomeIcon style={{display: "flex", marginLeft: "auto", marginRight: "0"}} icon="fa-solid fa-play" size="4x"/>
            </div>
        )
    }
}

export default VideoPreview