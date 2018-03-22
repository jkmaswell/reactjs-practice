import React from "react";
import {VideoResource} from "../../resources/video/video.resource";

export class VideoService extends React.Component {

    constructor() {
        super();
        this.videoResource = new VideoResource();
    }

    getTotalVideosByCategory(categoryId, page, perPage) {
        return this.videoResource.getTotalVideosByCategory(categoryId, page, perPage).then(videos => {
            return videos.data.total;
        });
    }

    getVideosByCategory(categoryId, page, perPage) {
        return this.videoResource.getVideosByCategory(categoryId, page, perPage).then(videos => {
            const categoryVideos = [];
            const totalVideos = videos.total;
            videos.data.data.forEach(dto => {
                dto.total = totalVideos;
                dto.id = dto.uri.split('/').pop();
                categoryVideos.push(dto);
            });
            return categoryVideos;
        });
    }

    getVideoDetail(videoId) {
        return this.videoResource.getVideoDetail(videoId).then(video => {
            return video.data;
        });
    }

    getVideoComments(videoId) {
        return this.videoResource.getVideoComments(videoId).then(comments => {
            const videoComments = [];
            comments.data.data.forEach(dto => {
                videoComments.push(dto);
            });
            return videoComments;
        });
    }

    searchVideos(page, perPage, query) {
        return this.videoResource.searchVideos(page, perPage, query).then(comments => {
            const videoComments = [];
            comments.data.forEach(dto => {
                videoComments.push(dto);
            });
            return videoComments;
        });
    }

}
