import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
	formRef = React.createRef();
	inputRef = React.createRef();

	onSubmit = (event) => {
		// 기본적으로 브라우저가 하는 기능 막기 // 여기서는 form전송시, 브라우저가 페이지를 새롭게 여는 기능 막기
		event.preventDefault();
		const name = this.inputRef.current.value;
		name && this.props.onAdd(name);

		// input입력하여 add버튼 클릭하여 form전송 후, 태그 내용 비우기
		// this.inputRef.current.value = '';
		this.formRef.current.reset();
	};

	render() {
		return (
			<form ref={this.formRef} className="add-from" onSubmit={this.onSubmit}>
				<input
					ref={this.inputRef}
					type="text"
					className="add-input"
					placeholder="Habit"
				/>
				<button className="add-button">Add</button>
			</form>
		);
	}
}

export default HabitAddForm;
