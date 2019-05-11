import React from 'react';
const { useState, useRef } = React;

const WordRelay = () => {
	const [word, setWord] = useState('원빈');
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');
	const inputRef = useRef(null);

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (word[word.length - 1] === value[0]) {
			setResult('딩동댕');
			setWord(value);
			setValue('');
			inputRef.current.focus();
		} else {
			setResult('땡');
			setValue('');
			inputRef.current.focus();
		}
	};

	const onChangeInput = (e) => {
		setValue(e.target.value);
	};


	return (
		<>
			<div>{word}</div>
			<form onSubmit={onSubmitForm}>
                <label id="label" htmlFor="wordInput">글자를 입력하세요.</label>
				<input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
				<button>입력!!!</button>
			</form>
			<div>{result}</div>
		</>
	);

}

// export const hello = 'hello'
// import { hello }

// export const bye = bye'
// import { bye }

// export default NumberBaseball;
// import NumberBaseball;

// const React = require('react);
// export.hello = 'hello'
// module.exports = NumberBaseball;

export default WordRelay;