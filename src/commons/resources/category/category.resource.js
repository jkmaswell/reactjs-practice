import React from "react";
import {VimeoApiKey} from "../../../constants/app.constants";
import * as axios from "axios";

export class CategoryResource extends React.Component {

    getAllCategories() {
        return axios.get(VimeoApiKey.vimeoBaseUrl + 'categories');
    }

}

