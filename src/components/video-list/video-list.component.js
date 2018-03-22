import React from 'react';
import {UISref} from "@uirouter/react";
import './video-list.component.css';

export class VideoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: props.videos,
            pages: Math.ceil(props.totalVideos / 12),
            categoryId: props.categoryId
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.videos !== this.props.videos) {
            this.setState({
                videos: nextProps.videos,
                pages: Math.ceil(nextProps.totalVideos / 12),
                categoryId: nextProps.categoryId
            });
        }
    }

    render() {
        return (
            <section>
                <main>
                    <div className="row">
                        {this.state.videos.map(video => {
                            return (
                                <div className="col-md-3 video" key={video.id}>
                                    <UISref to="video" params={{videoId: video.id}}>
                                        <a>
                                            <figure>
                                                <div className="image">
                                                    <img src={video.pictures.sizes[3].link} alt=""/>
                                                    <div className="hover"></div>
                                                </div>
                                                <figcaption>{video.name}</figcaption>
                                            </figure>
                                        </a>
                                    </UISref>
                                </div>
                            );
                        })}
                    </div>
                </main>
            </section>
        );
    }
}