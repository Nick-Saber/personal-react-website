import React from 'react'
import ReactDOM from 'react-dom'
import AboutMeView from "src/client/components/views/aboutMe";
import {Tabs, Tab} from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


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
                return <AboutMeView/>
            case 'Misc':
                return (
                    <div>
                        BLah Blah Blah
                    </div>
                )
            default:
                return "ERRROROROR"
        }
    }



    render() {
        return (
            <MuiThemeProvider>
            <div>
                <div>
                    <Tabs value={this.state.tabSelected}
                          onChange={(tab)=>{this.setState({tabSelected: tab})}}
                    >
                        <Tab value={'AboutMeView'}
                             label={'About Me'}
                             style={{defaultTab:{'color': '#ffe2bf', backgroundColor:'#FFFBF5'}}}>
                        </Tab>
                        <Tab value={'Misc'}
                             label={'Random'}
                             style={{defaultTab:{'color': '#ffe2bf', backgroundColor:'#FFFBF5'}}}>
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
