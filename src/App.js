/** @format */

import { useState, useRef } from "react";
import FormInput from "./components/FormInput";
import "./App.css";

function App() {
	const [username, setUsername] = useState("");
	const usernameRef = useRef();

	const handleSubmit = (e) => {};
	return (
		<div className="app">
			<form onSubmit={handleSubmit}>
				<FormInput placeholder="First Name" />
				<FormInput placeholder="Last Name" />
				<FormInput placeholder="Username" />
				<FormInput placeholder="Email" />
				<FormInput placeholder="Password" />
				<FormInput placeholder="Confirm Password" />
				<button className="btn">Submit</button>
			</form>
		</div>
	);
}

export default App;
