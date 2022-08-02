/** @format */

import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
	const handleChange = (e) => {
		props.setUsername(e.target.value);
	};
	return (
		<div className="form-input">
			<input
				type="text"
				placeholder={props.placeholder}
				onChange={handleChange}
			/>
		</div>
	);
};

export default FormInput;
