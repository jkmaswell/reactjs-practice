import React from 'react';

export default class Video extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <h3>Video</h3>
            </div>
        );
    }
}