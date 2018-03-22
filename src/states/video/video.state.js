import React from 'react';
import {VideoDetails} from "../../components/video-details/video-details.component";

export class Video extends React.Component {

    constructor() {
        super();
        this.state = {
            video: [],
            comments: []
        }
    }

    componentWillMount() {
        this.setState({
            video: this.props.video,
            comments: this.props.comments
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.video !== this.props.video) {
            this.setState({
                videos: nextProps.video,
                comments: nextProps.comments
            });
        }
    }

    render() {
        return (
            <VideoDetails video={this.state.video} comments={this.state.comments} />
        );
    }
}