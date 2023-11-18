import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (    
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="../../images/logo3.png" /></Link>
                <Link to="/movies/explore" style={{textDecoration: "none"}}><span>Explore</span></Link>
                <Link to="/movies/live" style={{textDecoration: "none"}}><span>Live Events</span></Link>
                {/* <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link> */}
            </div>
        </div>
    )
}

export default Header