import React from 'react';
import {VideoList} from "../../components/video-list/video-list.component";
import {Paginator} from "../../components/paginator/paginator.component";

export class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            totalVideos: 0,
            categoryId: '',
            pages: Math.ceil(props.totalVideos / 12)
        };
    }

    componentWillMount() {
        this.setState({
            videos: this.props.categoryVideos,
            totalVideos: this.props.totalVideos,
            categoryId: this.props.categoryId,
            pages: Math.ceil(this.props.totalVideos / 12)
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.categoryVideos !== this.props.categoryVideos) {
            this.setState({
                videos: nextProps.categoryVideos,
                totalVideos: nextProps.totalVideos,
                categoryId: nextProps.categoryId,
                pages: Math.ceil(this.props.totalVideos / 12)
            });
        }
    }

    handlePageClick = (data) => {
        const {stateService} = this.props.transition.router;
        const page = data.selected + 1;
        stateService.go('.', {page: page});
    };

    render() {
        return (
            <div>
                <VideoList videos={this.state.videos} totalVideos={this.state.totalVideos} />
                <Paginator handleFunction={this.handlePageClick} pages={this.state.pages} />
            </div>
        );
    }
}