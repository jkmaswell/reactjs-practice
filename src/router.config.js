import {pushStateLocationPlugin} from '@uirouter/react';
import {hello, world} from "./states";

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

