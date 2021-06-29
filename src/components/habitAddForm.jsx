import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
	const formRef = React.createRef();
	const inputRef = React.createRef();

	const onSubmit = (event) => {
		// 기본적으로 브라우저가 하는 기능 막기 // 여기서는 form전송시, 브라우저가 페이지를 새롭게 여는 기능 막기
		event.preventDefault();
		const name = inputRef.current.value;
		name && props.onAdd(name);

		// input입력하여 add버튼 클릭하여 form전송 후, 태그 내용 비우기
		// this.inputRef.current.value = '';
		formRef.current.reset();
	};
	return (
		<form ref={formRef} className="add-from" onSubmit={onSubmit}>
			<input
				ref={inputRef}
				type="text"
				className="add-input"
				placeholder="Habit"
			/>
			<button className="add-button">Add</button>
		</form>
	);
});

export default HabitAddForm;
