import React from 'react';
import {VideoList} from "../../components/video-list/video-list.component";

export class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            videos: [],
            totalVideos: 0
        }
    }

    componentWillMount() {
        this.setState({
            videos: this.props.categoryVideos
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.categoryVideos !== this.props.categoryVideos) {
            this.setState({
                videos: nextProps.categoryVideos
            });
        }
    }

    render() {
        return (
            <VideoList videos={this.state.videos} total={this.state.totalVideos} />
        );
    }
}