import React from "react";
import home from './home.css'
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Feature from "./Features";
const Home = (props) => {
    const white = 'white';
    const { data, toggleShop, setToggle } = props;
    return (
        <>
            <div className="home-part">
                <Header white={white} toggleShop={toggleShop} setToggle={setToggle} />
                <div className="home-content">
                    <h1 className="home-title">Rest, Relax, Unwind</h1>
                    <p>Embrace your choices - we do</p>
                    <Link to='/products'><button>SHOW NOW</button></Link>
                </div>
            </div>
            <Feature data={data} setToggle={setToggle} /></>


    )
}
export default Home;