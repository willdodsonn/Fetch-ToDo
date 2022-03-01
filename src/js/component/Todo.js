//hard coded bootstrap/ html output
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Todo({ todos, completeTodo, removeTodo }) {
	return todos.map((todo, index) => (
		<div
			className={todo.isComplete ? "todo-row complete" : "todo-row"}
			key={index}>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.label}
				{todo.text}
			</div>
			<div className="icons">
				<FontAwesomeIcon
					onClick={() => removeTodo(index)}
					icon={faX}
					className="delete-icon"
				/>
			</div>
		</div>
	));
}

export default Todo;
