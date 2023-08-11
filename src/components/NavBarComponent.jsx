import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles : []
        }
    }
    
    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark' style={{padding:'10px'}}>
                    <div><a href='#' className='navbar-brand'>News Portal</a></div>
                    <div className="navbar-nav">
                        <Link className="nav-link active"  to="/home">Home</Link>
                        <Link className="nav-link"  to="/login">Login</Link>
                        {/*<a className="nav-link active" aria-current="page" href="#">Home</a>*/}
                        {/*<a className="nav-link" href="#">business</a>*/}
                        {/*<a className="nav-link" href="#">entertainment</a>*/}
                        {/*<a className="nav-link" href="#">health</a>*/}
                        {/*<a className="nav-link" href="#">science</a>*/}
                        {/*<a className="nav-link" href="#">sports</a>*/}
                        {/*<a className="nav-link" href="#">technology</a>*/}
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBarComponent;