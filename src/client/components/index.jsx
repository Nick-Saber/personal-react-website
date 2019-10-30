import React from 'react'
import ReactDOM from 'react-dom'



class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.thing = 1
    }
    render() {
        return (<div>I'm your first component! </div>)
    }
}



ReactDOM.render(<HomePage/>, document.getElementById('root'));
