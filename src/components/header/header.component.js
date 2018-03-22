import React from 'react';
import './header.component.css';

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="header">
                    <button className="menu"></button>
                    <div className="search">
                        <input type="search"/>
                        <button onClick={this.goToVideo}></button>
                    </div>
                </div>
            </header>
        );
    }
}




