import React, { useState } from "react";

function TodoForm(props) {
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});
		setInput("");
	};
	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input
				type="text"
				id="addToDo"
				placeholder="Add To-Do"
				value={input}
				name="text"
				className="todo-input"
				onChange={handleChange}
			/>
			<button
				type="text"
				placeholder="What's needs to be done?"
				value={input}
				name="text"
				className="todo-input"
				onChange={handleChange}
				className="todo-button">
				add
			</button>
		</form>
	);
}

export default TodoForm;
