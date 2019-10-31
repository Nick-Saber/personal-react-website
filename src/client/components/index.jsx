import React from 'react'
import ReactDOM from 'react-dom'



class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.thing = 1
    }
    render() {
        return (<div>Hi There, this site is bare bones and still being worked on! </div>)
    }
}



ReactDOM.render(<HomePage/>, document.getElementById('root'));
