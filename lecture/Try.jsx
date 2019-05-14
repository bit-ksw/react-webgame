import React, { PureComponent, memo, useState } from 'react';

class Try extends  PureComponent {
    constructor(props) {
        super(props);

        //다른동작
        const filtered = this.props.filter(() => {

        });

        this.state = {
            result: this.props.result,
            try: this.props.try,
        };
    }


    render() {
        const { tryInfo } = this.props;
        return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        );
    }
}

// const Try = memo(({ tryInfo }) => {
//     const [result, setResult ] = useState(tryInfo.result);
//
//     const onClick = () => {
//         setResult('1');
//     };
//
//     return (
//         <li>
//             <div>{tryInfo.try}</div>
//             <div onClick={onClick}>{tryInfo.result}</div>
//         </li>
//     )
//
// });

// 구조분해가 아닐경우
// const Try = (props) => {
//     return (
//         <li>
//             <div>{props.tryInfo.try}</div>
//             <div>{props.tryInfo.result}</div>
//         </li>
//     )
// }

export default Try;