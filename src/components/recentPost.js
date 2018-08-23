import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className ="recent-post">
                <div className="recent-pots">
                <div className="recent-posts_heading"> Recent Post</div>
                 <ul className ="recent-posts_posts">
                <li>recent post 0</li>
                <li>recent post 1</li>
                <li>recent post 2</li>
                 </ul>
                </div>
            </div>
        );
    }
}
