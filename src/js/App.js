import React from "react";
import TodoList from "./component/TodoList";
import { useEffect } from "react";

function App() {
	return (
		<div className="todo-app">
			<TodoList />
		</div>
	);
}
export default App;
