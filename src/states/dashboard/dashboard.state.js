import React from 'react';
import VideoList from "../../components/video-list/video-list.component";

export default class Dashboard extends React.Component {
    render() {
        return (
            <VideoList videos={this.props.categoryVideos} total={this.props.totalVideos} />
        );
    }
}