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
        },
        {
            token: 'categoryId',
            deps: ['$transition$'],
            resolveFn: (transition) => {
                const params = transition.params();
                return params.categoryId;
            }
        }
    ]
};

export const video = {
    name: 'video',
    url: '/video/?videoId',
    component: Video,
    resolve: [
        {
            token: 'video',
            deps: ['$transition$'],
            resolveFn: (transition) => {
                const videoService = new VideoService();
                const params = transition.params();
                return videoService.getVideoDetail(params.videoId);
            }
        },
        {
            token: 'comments',
            deps: ['$transition$'],
            resolveFn: (transition) => {
                const videoService = new VideoService();
                const params = transition.params();
                return videoService.getVideoComments(params.videoId);
            }
        }
    ]
};