import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
	state = {
		habits: [
			{ id: 1, name: 'Reading', count: 0 },
			{ id: 2, name: 'Running', count: 0 },
			{ id: 3, name: 'Coding', count: 0 },
		],
	};

	handleIncrement = (habit) => {
		console.log(`handleIncrement ${habit.name}`);
		//리액트에서는 state를 직접 수정하면 안된다!
		// habit.count++;
		// this.setState(this.state);

		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				// deconstructing assignment
				return { ...habit, count: habit.count + 1 };
			}
			return item;
		});
		// state를 세팅하는데, object를 세팅해야하여 {} 이고,
		// 앞의 habits는 state로 업데이트할 key값 -> key값은 state의 habits라는 배열object명과 같아야 한다.
		// 뒤의 habits는 로컬변수 habits 즉, 방금생성한 배열 habits이다
		// key명와 value명이 같은경우에, 그냥 하나만 써도 된다
		this.setState({ habits: habits });
		// key명와 value명이 같은경우에, 그냥 하나로 생략이 가능하다.
		// this.setState({habits});
	};

	handleDecrement = (habit) => {
		console.log(`handleDecrement ${habit.name}`);
		const habits = this.state.habits.map((item) => {
			const count = habit.count - 1;
			if (item.id === habit.id) {
				return { ...habit, count: count < 0 ? 0 : count };
			}
			return item;
		});
		this.setState({ habits });
	};

	handleDelete = (habit) => {
		console.log(`handleDelete ${habit.name}`);
		const habits = this.state.habits.filter((item) => item.id !== habit.id);
		this.setState({ habits });
	};

	handleAdd = (name) => {
		const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
		this.setState({ habits: habits });
	};

	handleReset = () => {
		const habits = this.state.habits.map((habit) => {
			if (habit.count !== 0) {
				return { ...habit, count: 0 };
			}
			return habit;
		});
		this.setState({ habits });
	};

	render() {
		return (
			<>
				<Navbar
					totalCount={this.state.habits.filter((item) => item.count > 0).length}
				/>
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onAdd={this.handleAdd}
					onReset={this.handleReset}
				/>
			</>
		);
	}
}

export default App;
