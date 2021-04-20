import React from 'react'
import Person from './person'

class Greetings extends React.Component {

    render() {
        return (
            <div>
                {Person.greet(this.props.name)}
            </div>
        )
    }
}


export default Greetings

