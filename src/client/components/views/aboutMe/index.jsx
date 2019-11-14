import MyPhoto from 'src/static/images/Angels_landing.png'
import ResizeImage from 'react-resize-image'
import React from "react";



class AboutMeView extends React.Component {
    constructor(props) {
        super(props)
        this.thing = 1
    }
    render() {
        return (<div>
            <div style={{display:"flex", "justify-content":"center"}} >
                <ResizeImage src={MyPhoto} style={{width:"30%", 'border-radius': "75%"}} alt="Angels Landing - It was the scariest hike of my life!"/>
            </div>
            <div style={{display:"flex", "justify-content":"center", "align-items":"center", "flex-direction":"column"}}>
                <h1 style={{display:'block'}}> Nicholas Reza Saber </h1>
                <p style={{display:'block'}}> Hi there and welcome to my website! This site is bare bones and still being worked on!</p>
            </div>
        </div>)
    }
}

export default AboutMeView 