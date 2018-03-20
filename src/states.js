import Hello from './states/hello/hello';
import World from "./states/world/world";

export const hello = {
    name: 'hello',
    url: '/hello',
    component: Hello
};

export const world = {
    name: 'world',
    url: '/world',
    component: World
};