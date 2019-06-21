import React from 'react';
import ReactDOM from 'react-dom';
import Example from './example/Example';
import Header from './header/Header';
import States from './states/States';


class Switch extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            buttonWasClicked: true,
        }

        //this binding is necessary to make 'this' work in the callback
        this.handleButtonClick = this.handleButtonClick.bind(this);


    }

    // Method called when the button is pushed
    /* eslint-disable-next-line no-unused-vars */
    handleButtonClick() {
        this.setState( state => ({ buttonWasClicked: !state.buttonWasClicked }));
    }

    render(){
       
        return(
            <div className = "cs142-p4">
                <div className = "cs142-p4-button">
                    <button 
                        type = "button"
                        onClick = {this.handleButtonClick}
                    >
                        {this.state.buttonWasClicked ? 'Switch to State' : 'Switch to Example'}
                    </button>

                </div>
                <div>
                    {this.state.buttonWasClicked ? <Example /> : <States /> } 
                </div>

            </div>
        );
    }
}

export default Switch;