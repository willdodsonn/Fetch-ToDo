import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			//what the fuck is this ^^^
			return;
		}
		const newTodos = [todo, ...todos];
		setTodos(newTodos);
	};

	const removeTodo = (id) => {
		const removeArr = [...todos].filter((todo) => todo.id !== id);

		setTodos(removeArr);
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
