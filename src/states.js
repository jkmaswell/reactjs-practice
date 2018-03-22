import {Dashboard} from './states/dashboard/dashboard.state';
import {Video} from "./states/video/video.state";

import {VideoService} from "./commons/services/video/video.service";

export const dashboard = {
    name: 'dashboard',
    url: '/categories/?categoryId&page&perPage',
    component: Dashboard,
    resolve: [
        {
            token: 'categoryVideos',
            deps: ['$transition$'],
            resolveFn: (transition) => {
                const videoService = new VideoService();
                const params = transition.params();
                console.log(params);
                return videoService.getVideosByCategory(params.categoryId, params.page, params.perPage);
            }
        },
        {
            token: 'totalVideos',
            deps: ['$transition$'],
            resolveFn: (transition) => {
                const videoService = new VideoService();
                const params = transition.params();
                return videoService.getTotalVideosByCategory(params.categoryId, params.page, params.perPage);
            }
        }
    ]
};

export const video = {
    name: 'video',
    url: '/video',
    component: Video
};