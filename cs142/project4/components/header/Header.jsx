import React from 'react';
import './Header.css';
//import logo from './main.jpg';


class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="cs142-personalizedHeader">
                <span className="text">"Where Amazing Happens"</span>
                
                <img src='main.jpg' alt="" />

            </div>
        );
    }
}

export default Header;