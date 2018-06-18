import React,{Component} from 'react';
import {Redirect} from 'react-router';

import axios from '../../axios-dawa';

import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import Input from '../UI/Input/Input';

import { updateObject, checkValidity } from '../../shared/utility';

class Login extends Component{
	state = {
		loginForm: {
			username: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'UserName'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				validation: {
					required: true,
					minLength: 6
				},
				valid: false,
				touched: false
			}
		},
		error: false,
		loading: false,
		formIsValid: false,
		isAuthenticated:false
	}
	submitHandler = ( event ) => {
		event.preventDefault();

		const formData = {};
		for (let formElementIdentifier in this.state.loginForm) {
			formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
		}
		this.setState({loading: true,error: false});
		axios.post('user/signin',formData)
			.then( response => {
				localStorage.setItem('name', response.data.data.name);
				localStorage.setItem('token', response.data.token);
				this.setState({
					loading: false,
					error: false,
					isAuthenticated: true
				});
			})
			.catch( error => {
				this.setState({
					loading: false,
					error: error.response.data
				});
			});
	}
	inputChangedHandler = (event, inputIdentifier) => {
		const updatedFormElement = updateObject(this.state.loginForm[inputIdentifier], {
			value: event.target.value,
			valid: checkValidity(event.target.value, this.state.loginForm[inputIdentifier].validation),
			touched: true
		});
		const updatedloginForm = updateObject(this.state.loginForm, {
			[inputIdentifier]: updatedFormElement
		});

		let formIsValid = true;
		for (let inputIdentifier in updatedloginForm) {
			formIsValid = updatedloginForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({loginForm: updatedloginForm, formIsValid: formIsValid});
	}
	render(){
		const formElementsArray = [];
		for (let key in this.state.loginForm) {
			formElementsArray.push({
				id: key,
				config: this.state.loginForm[key]
			});
		}
		let form = (
			<form onSubmit={this.submitHandler}>
				{formElementsArray.map(formElement => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						invalid={!formElement.config.valid}
						shouldValidate={formElement.config.validation}
						touched={formElement.config.touched}
						changed={(event) => this.inputChangedHandler(event, formElement.id)} />
				))}
				<Button btnType="Success" disabled={!this.state.formIsValid}>Iniciar Sesión</Button>
			</form>
		);
		if ( this.state.loading ) {
			form = <Spinner />;
		}
		let errorMessage = null;

		if ( this.state.error ) {
			errorMessage = (
				<p>{this.state.error.message}</p>
			);
		}
		let authRedirect = null;
		if ( this.state.isAuthenticated ) {
			authRedirect = (<Redirect to={'/'} />);
		}
		return (
			<div>
				{authRedirect}
				{errorMessage}
				{form}
			</div>
			);
	}
}

export default Login;