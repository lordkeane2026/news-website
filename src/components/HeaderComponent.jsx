import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark' style={{padding:'10px'}}>
                        <div><a href='#' className='navbar-brand'>News Portal</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;