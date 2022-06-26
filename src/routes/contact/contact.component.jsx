import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import Header from '../../components/header/header.component';

import './contact.styles.scss';

const defaultFormFields = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

const Contact = () => {
	const form = useRef();

	const [wasSubmitted, setWasSubmitted] = useState(false);

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { name, email, subject, message } = formFields;

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleSubmit = e => {
		e.preventDefault();

		emailjs.sendForm('service_7i9ypy5', 'contact_form', form.current, 'hNsTxorJIQwRyYOOh')
			.then(res => {
				setWasSubmitted(true);

				setTimeout(() => {
					setWasSubmitted(false);
				}, 3000);

				resetFormFields();
			}, err => {
				console.log(err.text);
			});
	}

	const handleChange = e => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="contact-wrapper">
			<Header section={ 'contact' } />
			<div className="contact-details">
				<ul>
					<li>
						<h4>email</h4>
						<p>ped.mealha@gmail.com</p>
					</li>
					<li>
						<h4>phone</h4>
						<p><span>+351</span> 916076595</p>
					</li>
					<li>
						<h4>skype</h4>
						<p>pedro.m.mealha</p>
					</li>
				</ul>
			</div>
			<form className="contact-form" name="contact-form" onSubmit={ handleSubmit } ref={ form }>
				<div className="name">
					<input placeholder="" name="name" type="text" required onChange={ handleChange } value={ name } />
					<label>name</label>
				</div>

				<div className="email">
					<input placeholder="" type="email" name="email" required onChange={ handleChange } value={ email } />
					<label>e-mail</label>
				</div>

				<div className="subject">
					<input placeholder="" name="subject" type="text" required onChange={ handleChange } value={ subject } />
					<label>subject</label>
				</div>

				<div className="message">
					<textarea placeholder="" name="message" required onChange={ handleChange } value={ message } cols="120"></textarea>
					<label>message</label>
				</div>

				<button className="submit" type="submit">Send</button>
			</form>

			<div className={ `popup ${wasSubmitted ? 'success' : ''}` }>
				<div>Email sent, I'll reply as soon as possible.<br />Thank you!</div>
			</div>
		</div>
	)
}

export default Contact;