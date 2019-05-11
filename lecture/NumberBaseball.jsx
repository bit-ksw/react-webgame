import React, { Component } from 'react';
import Try from './Try';

function getNumbers() {

}

class NumberBaseball extends Component {
    //
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         result: '',
    //         value: '',
    //         answer: getNumbers(),
    //         tries: [],
    //     };
    //
    //     this.onSubmitForm = this.onSubmitForm.bind(this);
    //     this.onChangeInput = this.onChangeInput.bind(this);
    // }

    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = (e) => {

    };

    // 에로우 함수로 안만들경우는 윗처럼 해준다.
    // onSubmitForm(e) {
    //
    // }

    onChangeInput = (e) => {

    };

    fruits = [
        { fruit: '사과',taste: '맛있다'},
        { fruit: '바나나', taste: '맛없다'},
        { fruit: '귤', taste: '시다'},
    ];

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
                        this.fruits.map((v, i) => {
                            return (
                                <Try key={v.fruit + v.taste} value={v} index={i} />
                            );
                        })
                    }
                </ul>
            </>
        )
    }
}

export default NumberBaseball;