import React, {useRef, useState} from "react";
import './header.css';
import user from "./logo.svg";

function Header(props){
const inputval=useRef("");

    const [value, setValue] = useState('');
const handleSearch=(e)=>{
    e.preventDefault();

    props.searchfunc(inputval.current.value);

}

    return(
        <div className="container">
            <div className="header">
            <div className="logo left">
                <i id="menu" className="material-icons">menu</i>
                <a href="/"><img src={user} alt=""></img></a>
            </div>

            <div className="search center">
                <form action="">
                    <input type="text" placeholder="Search" ref={inputval}  />
                    <button onClick={handleSearch} ><i className="material-icons">search</i></button>
                </form>
                <i className="material-icons mic">mic</i>
            </div>

            <div className="icons right">
                <i className="material-icons">videocam</i>
                <i className="material-icons">apps</i>
                <i className="material-icons">notifications</i>
                <i className="material-icons display-this">account_circle</i>
            </div>
            </div>
        </div>
    )}
export default Header;