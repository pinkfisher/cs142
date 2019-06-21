import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
import States from './components/states/States';
import Example from './components/example/Example';



ReactDOM.render(
    <HashRouter>

        
        <div>
            <Header />
            <ul>
                <li>
                    <Link to="/example">Example</Link>
                </li>
                <li>
                    <Link to="/states">States</Link>
                </li>
            </ul>
            <Route path="/states" component={States} />
			<Route path="/example" component={Example} />
        </div>


    </HashRouter>,

 
  document.getElementById('reactapp'),
);