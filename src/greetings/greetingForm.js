import React from 'react'


class GreetingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = event => {
            this.setState({value: event.target.value})
        }

        this.handleSubmit = event => {
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Envoyer"/>
            </form>
        )
    }
}

export default GreetingForm
