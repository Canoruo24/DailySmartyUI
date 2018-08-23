import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className ="Sesarch-bar">
              <input placeholder ="Search DailySmarty" />
            </div>
        );
    }
}

