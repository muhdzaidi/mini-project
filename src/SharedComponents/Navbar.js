import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper yellow darken-1">
            <div className="container">
                <a className="left">Mini-Project</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/entries">Entries</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)