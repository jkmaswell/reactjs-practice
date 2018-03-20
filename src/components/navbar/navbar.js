import React from 'react';
import {UISrefActive, UISref} from '@uirouter/react';

const NavBar = () => {
    return (
        <div className="nav">
            <UISrefActive class="active">
                <UISref to="hello">
                    <a>Hello</a>
                </UISref>
            </UISrefActive>{' '}
            <UISrefActive class="active">
                <UISref to="world">
                    <a>World</a>
                </UISref>
            </UISrefActive>
        </div>
    );
};

export default NavBar;