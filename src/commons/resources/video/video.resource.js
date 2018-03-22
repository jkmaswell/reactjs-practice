import React from "react";
import {VimeoApiKey} from "../../../constants/app.constants";
import * as axios from "axios";

export class VideoResource extends React.Component {

    getTotalVideosByCategory(categoryId, page, perPage) {
        if (0 > page || 0 > perPage) {
            page = 1;
            perPage = 12;
        }
        return axios.get(VimeoApiKey.vimeoBaseUrl + 'categories/' + categoryId + '/videos?page=' + page + '&per_page=' + perPage);
    }

    getVideosByCategory(categoryId, page, perPage) {
        return axios.get(VimeoApiKey.vimeoBaseUrl + 'categories/' + categoryId + '/videos?page=' + page + '&per_page=' + perPage);
    }

    getVideoDetail(videoId) {
        return axios.get(VimeoApiKey.vimeoBaseUrl + 'videos/' + videoId);
    }

    getVideoComments(videoId) {
        return axios.get(VimeoApiKey.vimeoBaseUrl + 'videos/' + videoId + '/comments');
    }

    searchVideos(page, perPage, query) {
        if (0 > page || 0 > perPage) {
            page = 1;
            perPage = 12;
        }
        return axios.get(VimeoApiKey.vimeoBaseUrl + 'videos?page=' + page + '&per_page=' + perPage + '&query=' + query);
    }

}
