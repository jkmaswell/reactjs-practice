import React from 'react';
import {UISrefActive, UISref} from '@uirouter/react';
import {getAllCategories} from "../../commons/resources/category/category.resource";

export default class NavBar extends React.Component {

    constructor() {
        super();
        this.state = {
            categories: []
        };
    }

    componentWillMount() {
        getAllCategories().then(categories => {
            this.setState({
                categories: categories
            });
        });
    }

    render() {
        return (
            <ul className="nav">
                {this.state.categories.map( category => {
                    return (
                        <UISrefActive class="active">
                            <UISref to="hello">
                                <li><a>{category.name}</a></li>
                            </UISref>
                        </UISrefActive>
                    );
                })}
            </ul>
        );
    }
}




