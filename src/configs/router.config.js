import {pushStateLocationPlugin} from '@uirouter/react';
import {dashboard, video} from "../states";
import {trace} from "@uirouter/react/lib/index";

export const plugins = [
    pushStateLocationPlugin
];

export const states = [
    dashboard,
    video
];

export const config = router => {
    //router.urlService.rules.initial({state: 'dashboard'});
    router.urlService.rules.otherwise({state: 'dashboard'});
};

