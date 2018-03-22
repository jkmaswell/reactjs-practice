import {pushStateLocationPlugin} from '@uirouter/react';
import {dashboard, video} from "../states";

export const plugins = [
    pushStateLocationPlugin
];

export const states = [
    dashboard,
    video
];

export const config = router => {
    router.urlService.rules.initial({state: 'dashboard', params: {categoryId: 'animation', page: '1', perPage: '12'}});
    router.urlService.rules.otherwise({state: 'dashboard', params: {categoryId: 'animation', page: '1', perPage: '12'}});
};

