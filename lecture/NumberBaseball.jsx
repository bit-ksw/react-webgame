import React, { Component } from 'react';

function getNumbers() {

}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: []
    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                    {/*<input maxLength={4} defaultValue={this.state.value} />*/}
                </form>
                <div>시도{this.state.tries.length}</div>
                <ul>
                    {
                        ['사과', '바나나', '포도', '귤', 'like', 'like', 'like'].map((v) => {
                            return (
                                <li>{v}</li>
                            );
                        })
                    }

                </ul>
            </>
        )
    }
}

export default NumberBaseball;