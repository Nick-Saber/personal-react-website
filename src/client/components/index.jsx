import React from 'react'
import ReactDOM from 'react-dom'
import AboutMeView from "src/client/components/views/aboutMe";
import {Tabs, Tab, Avatar} from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { MyPhoto } from 'src/client/static/images/image_urls'

const randomFacts = [
    'A bolt of lightning contains enough energy to toast 100,000 slices of bread',
    'The average person will spend six months of their life waiting for red lights to turn green',
    'You can hear a blue whale\'s heartbeat from two miles away',
    'Nearly 30,000 rubber ducks were lost a sea in 1992 and are still being discovered today',
    'Sears used to sell houses.',
    'Cap\'N\'Crunch\'s full name is Horatio Magellan Crunch',
    'Continental plates drift at about the same rate as fingernails grow',
    'The scientific term for brain freeze is “sphenopalatine ganglioneuralgia”.'
]

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabSelected: 'AboutMeView'
        }
        this.renderTabChoice = this.renderTabChoice.bind(this)

    }

    renderTabChoice() {
        var selectedTab = this.state.tabSelected
        switch (selectedTab) {
            case 'AboutMeView':
                return (<AboutMeView/>)
            case 'Misc':
                return <div style={{margin: '10px', display: 'flex', "justify-content": "center"}}>
                    {randomFacts[ Math.floor(Math.random() * randomFacts.length)]}
                </div>
            default:
                return "ERRROROROR"
        }
    }



    render() {
        return (
            <MuiThemeProvider>
            <div>
                <h1 style={{margin: '5px', display:'flex', "justify-content":"center"}}> Nicholas Reza Saber </h1>

                <div style={{margin: '5px', display:'flex', "justify-content":"center"}} >
                    <Avatar style ={{width:'50%', height:'50%'}} alt="Me trying to look professionally into the camera" src={MyPhoto}/>
                </div>
                <div style={{margin: '5px', display:'flex', "justify-content":"center"}}>
                    <Tabs value={this.state.tabSelected}
                          onChange={(event, newTabValue)=>{this.setState({tabSelected: newTabValue})}}>
                        <Tab value={'AboutMeView'}
                             label={'About Me'}
                             style={{margin: '5px', defaultTab:{'color': '#ffe2bf', backgroundColor:'#FFFBF5'}}}>
                        </Tab>
                        <Tab value={'Misc'}
                             label={'Random Fact'}
                             style={{margin: '5px', defaultTab:{'color': '#ffe2bf', backgroundColor:'#FFFBF5'}}}>
                        </Tab>
                    </Tabs>
                </div>

                <div>
                    {this.renderTabChoice()}
                </div>
            </div>
            </MuiThemeProvider>
        )
    }
}



ReactDOM.render(<LandingPage/>, document.getElementById('root'));
