import { useState } from "react";

import './contact.styles.scss';

const defaultFormFields = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

const Contact = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { name, email, subject, message } = formFields;

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleSubmit = e => {
		e.preventDefault();
		resetFormFields();
	}

	const handleChange = e => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<form className="contact-form" name="contact-form" onSubmit={ handleSubmit }>
			<div className="name">
				<input placeholder="" name="name" type="text" required onChange={ handleChange } value={ name } />
				<label htmlFor="name">name</label>
			</div>

			<div className="email">
				<input placeholder="" type="email" name="email" required onChange={ handleChange } value={ email } />
				<label htmlFor="email">e-mail</label>
			</div>

			<div className="subject">
				<input placeholder="" name="subject" type="text" required onChange={ handleChange } value={ subject } />
				<label htmlFor="subject">subject</label>
			</div>

			<div className="message">
				<textarea placeholder="" name="message" required onChange={ handleChange } value={ message }></textarea>
				<label htmlFor="message">message</label>
			</div>

			<button className="submit" type="submit">Submit</button>
		</form>
	)
}

export default Contact;