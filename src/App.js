/** @format */

import { useState, useRef } from "react";
import FormInput from "./components/FormInput";
// import inputParameter from "././components/input";
import "./App.css";

function App() {
	const [values, setValues] = useState({
		firstname: "",
		lastname: "",
		username: "",
		email: "",
		birthday: "",
		password: "",
		confirmPassword: "",
	});

	const inputParameter = [
		{
			id: 1,
			name: "firstname",
			type: "text",
			placeholder: "First Name",
			errorMessage: "Firstname is required",
			label: "First Name",
			required: true,
		},
		{
			id: 2,
			name: "lastname",
			type: "text",
			placeholder: "Last Name",
			errorMessage: "Lastname is required",
			label: "Last Name",
			required: true,
		},
		{
			id: 3,
			name: "username",
			type: "text",
			placeholder: "Username",
			errorMessage:
				"Username should be 3-16 characters and shouldn't include any special character",
			label: "Username",
			pattern: "^[A-Za-z0-9]{3,16}$",
			required: true,
		},
		{
			id: 4,
			name: "email",
			type: "email",
			placeholder: "Email",
			errorMessage: "It should be an email address",
			label: "Email",
			required: true,
		},
		{
			id: 5,
			name: "birthday",
			type: "date",
			placeholder: "Birthday",
			label: "Birthday",
			required: true,
		},
		{
			id: 6,
			name: "password",
			type: "password",
			placeholder: "Password",
			errorMessage:
				"Password should be 8-20 characters and include at least 1 letter, 1 number, 1 uppercase",
			label: "Password",
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true,
		},
		{
			id: 7,
			name: "confirmpassword",
			type: "password",
			placeholder: "Confirm Password",
			errorMessage: "Password not match",
			label: "Confirm Password",
			pattern: values.password,
			required: true,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const onChnage = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	console.log(values);

	return (
		<div className="app">
			<form onSubmit={handleSubmit}>
				<h1>Register</h1>
				{inputParameter.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChnage}
					/>
				))}
				<button className="btn">Submit</button>
			</form>
		</div>
	);
}

export default App;
