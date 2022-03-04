import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/davidd")
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`${response.status} - ${response.statusText}`
					);
				}
				return response.json();
			})
			.then((data) => setTodos(data))
			.catch((err) => console.error(err));
	}, []);

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			//what the fuck is this ^^^
			return;
		}

		const newTodos = [...todos, { label: todo.text, done: false }];

		updateTodos(newTodos);
	};

	const removeTodo = (index) => {
		updateTodos(todos.filter((item, i) => index != i));
		// const removeArr = [...todos].filter((todo) => todo.id !== id);
		// setTodos(removeArr);
	};

	const updateTodos = (newTodos) => {
		var requestOptions = {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(newTodos),
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/davidd",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				setTodos(newTodos);
				console.log("Success:", result);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};
	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};
	return (
		<div className="todoListBox">
			<div id="container">
				<div>
					<h1 className="todo-header">To-Dos</h1>
					<ul className="list-group">
						<TodoForm onSubmit={addTodo} />
						<li className="list-group-item">
							<Todo
								id="addToDo"
								type="text"
								placeholder="Add to do here"
								todos={todos}
								completeTodo={completeTodo}
								removeTodo={removeTodo}
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TodoList;
