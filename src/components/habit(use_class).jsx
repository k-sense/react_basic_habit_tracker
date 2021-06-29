import React, { PureComponent } from 'react';

class Habit extends PureComponent {
	componentDidMount() {
		console.log(`habit: ${this.props.habit.name} mounted`);
	}

	componentWillUnmount() {
		console.log(`habit: ${this.props.habit.name} will unmounted`);
	}

	handleIncrement = () => {
		this.props.onIncrement(this.props.habit);
	};

	handleDecrement = () => {
		this.props.onDecrement(this.props.habit);
	};

	handleDelete = () => {
		this.props.onDelete(this.props.habit);
	};

	render() {
		console.log('habit');
		// habits컴포넌트(부모)로부터 전달된 props
		// name과 count는 habits컴포넌트에서 전달되어 오는 배열의 키 값과 동일하게 해야
		// 아래처럼 사용 가능

		// const { name, count } = this.props.habit;
		const { name } = this.props;
		const { count } = this.props; // const { count } = this.props.count; 아래와 같은 것임. props의 이름대로 로컬변수로 설정하려면 이렇게 가능. (destructiong Assignment)

		return (
			<li className="habit">
				<span className="habit-name">{name}</span>
				<span className="habit-count">{count}</span>
				<button
					className="habit-button habit-increase"
					onClick={this.handleIncrement}
				>
					<i className="fas fa-plus-square"></i>
				</button>
				<button
					className="habit-button habit-decrease"
					onClick={this.handleDecrement}
				>
					<i className="fas fa-minus-square"></i>
				</button>
				<button
					className="habit-button habit-delete"
					onClick={this.handleDelete}
				>
					<i className="fas fa-trash"></i>
				</button>
			</li>
		);
	}
}

export default Habit;
