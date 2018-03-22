import * as axios from "axios/index";

export const VimeoApiKey = {
    vimeoBaseUrl: 'https://api.vimeo.com/',
    vimeoAccessToken: 'c44e7b42eadcdc9c870e59452b1dfb9c',
    per_page: 12,
    max_size: 4
};

axios.defaults.headers.common['Authorization'] = `Bearer ${VimeoApiKey.vimeoAccessToken}`;