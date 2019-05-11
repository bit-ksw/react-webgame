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
                        [{fruit: '사과',taste: '맛있다'}, {fruit: '바나나', taste: '맛없다'}, { fruit: '귤', taste: '시다'}].map((v) => {
                            return (
                                <li key={v.fruit + v.taste}><b>{v.fruit}</b>{v.taste}</li>
                            );
                        })
                    }



                </ul>
            </>
        )
    }
}

export default NumberBaseball;