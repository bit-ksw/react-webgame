import React, { Component } from 'react';

class ResponseCheck extends  Component {
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result: []
    };

    onClickScreen = () => {

    };

    renderAverage = () => {
        const { result } = this.state
        return result.length === 0
            ? null
            : <div>평균시간: {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms</div>
    };

    render() {
        const { state, message } = this.state
        return (
            <>
                <div id="screen" className={state} onClick={this.onClickScreen}>{message}</div>
                { this.renderAverage() }

                {/* 보호 연산자 */}
                {/*{ this.state.result.length !== 0 &&  <div>평균시간: {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms</div>}*/}
            </>
        )
    }
}

export default ResponseCheck;