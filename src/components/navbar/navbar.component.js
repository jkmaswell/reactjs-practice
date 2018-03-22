import React from 'react';
import {UISrefActive, UISref} from '@uirouter/react';
import {CategoryService} from "../../commons/services/category/category.service";
import logo from '../../assets/vimeotest-logo.svg'
import './navbar.component.css'

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.categoryService = new CategoryService();
        this.state = {
            categories: []
        };
    }

    componentWillMount() {
        this.categoryService.getAllCategories().then(categories => {
            this.setState({
                categories: categories
            });
        });
    }

    render() {
        return (
            <div className="sidebar padding">
                <nav>
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <ul className="nav">
                        {this.state.categories.map(category => {
                            return (
                                <UISrefActive class="active" key={category.id}>
                                    <UISref to="dashboard" params={{categoryId: category.id, page: '1'}}>
                                        <li><a>{category.name}</a></li>
                                    </UISref>
                                </UISrefActive>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        );
    }
}




