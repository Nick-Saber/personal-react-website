import React from 'react'
import ReactDOM from 'react-dom'
import TabNavigator from 'src/client/components/tabNavigator/TabNavigator'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

//This class takes all components to build the SPA personal website itself
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MuiThemeProvider>
            <TabNavigator/>
            </MuiThemeProvider>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById('root'));
