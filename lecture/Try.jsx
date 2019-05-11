import React, { Component } from 'react';

class Try extends  Component {
    render() {
        return (
            <li>
                <b>{this.props.value.fruit}</b>{this.props.value.taste} - {this.props.index}
                <div>컨텐츠</div> - {this.props.index}
                <div>컨텐츠1</div> - {this.props.index}
                <div>컨텐츠2</div> - {this.props.index}
                <div>컨텐츠3</div> - {this.props.index}
            </li>
        )
    }
}

export default Try;