import {VimeoApiKey} from "../../../constants/constants";
import * as axios from "axios";

export {getAllCategories}

function getAllCategories() {
    return axios.get(VimeoApiKey.vimeoBaseUrl + 'categories').then(categories => {
        categories.data.data.forEach(element => {
            element.id = element.uri.split('/').pop();
        });
        return categories.data.data;
    });
}

