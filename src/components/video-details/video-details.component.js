import React from 'react';
import './video-details.component.css'

export class VideoDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video: props.video,
            comments: props.comments
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.video !== this.props.video) {
            this.setState({
                video: nextProps.video,
                comments: nextProps.comments
            });
        }
    }

    iframeHtml() {
        return {__html: this.state.video.embed.html}
    }

    render() {
        return (
            <section>
                <main>
                    <div className="row">
                        <div className="col-md-12">
                            <div dangerouslySetInnerHTML={this.iframeHtml()} className="player"></div>
                            <div className="stats">
                                <div className="plays">{this.state.video.stats.plays}</div>
                                <div className="likes">{this.state.video.metadata.connections.likes.total}</div>
                                <div className="comments">{this.state.video.metadata.connections.comments.total}</div>
                            </div>
                            <div className="info padding">
                                <div className="video-title">
                                    <div className="user-img">
                                        <img src={this.state.video.user.pictures.sizes[1].link} alt=""/>
                                    </div>
                                    <div className="title">
                                        <h1>{this.state.video.name}</h1>
                                        <p>of <span>{this.state.video.user.name}</span>
                                            <span className="date">{this.state.video.release_time}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="description">
                                    {this.state.video.description}
                                </div>
                            </div>
                            <div className="comments">
                                <h2 className="comments-title">Comments</h2>
                                <ul>
                                    {this.state.comments.map(comment => {
                                        return (
                                            <li key={comment.id}>
                                                <span><strong>{comment.user.name}</strong> {comment.text}</span>
                                                <span className="date">{comment.created_on}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        );
    }
}