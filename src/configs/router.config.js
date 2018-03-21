import {pushStateLocationPlugin} from '@uirouter/react';
import {hello, world} from "../states";
import * as axios from "axios/index";

axios.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    return Promise.reject(error);
});

export const plugins = [
    pushStateLocationPlugin
];

export const states = [
    hello,
    world
];

export const config = router => {
    router.urlRouter.otherwise({ state: 'hello' });
};

