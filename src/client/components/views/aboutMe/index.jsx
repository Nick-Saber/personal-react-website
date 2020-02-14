import ResizeImage from 'react-resize-image'
import { MyPhoto } from 'src/client/static/images/image_urls'

import { Avatar } from '@material-ui/core';

import React from "react";
/*<ResizeImage src={MyPhoto} style={{width:"30%", 'border-radius': "75%"}} alt="Angels Landing - It was the scariest hike of my life!"/>*/


class AboutMeView extends React.Component {
    constructor(props) {
        super(props)
        this.thing = 1
    }
    render() {
        return (<div>
            <div style={{display:"flex", "justify-content":"center", "align-items":"center", "flex-direction":"column"}}>
                <p style={{display:'block'}}> Hi there and welcome to my website! This site is bare bones and still being worked on!</p>
            </div>
        </div>)
    }
}

export default AboutMeView 