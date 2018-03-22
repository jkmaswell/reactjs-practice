import Dashboard from './states/dashboard/dashboard.state';
import Video from "./states/video/video.state";

import {VideoService} from "./commons/services/video/video.service";

export const dashboard = {
    name: 'dashboard',
    url: '/category/{categoryId}?page&perPage',
    component: Dashboard,
    params: {
        categoryId: 'animation',
        page: '1',
        perPage: '12'
    },
    resolve: [
        {
            token: 'categoryVideos',
            deps: ['$transition$'],
            resolveFn: (transition) => {
                const videoService = new VideoService();
                const params = transition.params();
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