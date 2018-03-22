import React from "react";
import {CategoryResource} from "../../resources/category/category.resource";

export class CategoryService extends React.Component {

    constructor() {
        super();
        this.categoryResource = new CategoryResource();
    }

    getAllCategories() {
        return this.categoryResource.getAllCategories().then(categories => {
            categories.data.data.forEach(element => {
                element.id = element.uri.split('/').pop();
            });
            return categories.data.data;
        });
    }
}

