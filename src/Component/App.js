import React from 'react';
import {connect} from 'react-redux';
import {inputChange} from '../Redux/Actions';

class App extends React.Component{
    onChange = (e) => {
        this.props.inputChange(e.target.value)
    }
    render() {
        console.log()
        return (
            <>
                <input type = 'text' onChange = {this.onChange}/>
                    <p> {this.props.input.input}</p>
            </>
            )
    }
}

const mapStateToProps = state => {
    return {
        input : state.input
    }
}


const mapDispatchToProps = dispatch => {
    return {
        inputChange : (input) => dispatch(inputChange(input))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);