import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());

    this.state = {
      input: '',
      result: window.cs142models.statesModel(),
      isFound: false,
    }

    //generate new functions that handle the event by just calling
    // the method that handles the event.
    this.handleChangeBound = event => this.handleChange(event);
  }

    // Method called when the input box is typed into.
  handleChange(event) {
    this.setState({ input: event.target.value});
  }

  

  render() {
    let isFound;
    for(let i = 0; i < this.state.result.length; i++){
      if (this.state.result[i].toUpperCase().includes(this.state.input.toUpperCase())){
        isFound = true;
        break;
      } else {
        isFound = false;
      }
    }



    return (
      <div className="cs142-states">
        <h1>CS142 Project#4 problem2</h1>
        
        <div className = "cs142-states-searching">
          <label htmlFor="inId"> Enter Keywords:</label>
          <input
            id = "inId"
            type = "text"
            value = {this.state.input}
            onChange = {this.handleChangeBound}
          />
        </div>

        <div className="cs142-states-results">
          <p>Searching Results:</p>
            {[this.state.result.map( (i) => {
              return (
                i.toUpperCase().includes(this.state.input.toUpperCase()) && (
                  <li key = {i}> {i} </li>
                )
              );
            }
            )]}
          

          {/*no matching states*/}
          {
            !isFound && (
              <p className="nothing"> No matching results.</p>
            )
          }
        </div>

      </div>
    );
  }
}

export default States;
