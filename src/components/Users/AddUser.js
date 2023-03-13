import React, { useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';

import classes from './AddUser.module.css';

const AddUser = props => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = e => {
		e.preventDefault();
		if (+enteredAge < 0) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (>0).'
			});
			return;
		}
		if (enteredUsername === '' || enteredAge === '') {
			setError({
				title: 'Invalid input',
				message: 'Please enter a vaild name and age (non-empty values).'
			});
			return;
		}
		props.onAddUsers(enteredUsername, enteredAge);
		setEnteredAge('');
		setEnteredUsername('');
	}

	const usernameChangeHandler = e => {
		setEnteredUsername(e.target.value);
	};

	const ageChangeHandler = e => {
		setEnteredAge(e.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
			<Card className={classes.input}>
				<form>
					<label htmlFor='username'>Username</label>
					<input
						value={enteredUsername}
						id='username'
						type='text'
						onChange={usernameChangeHandler}
					/>
					<label htmlFor='age'>Age</label>
					<input
						value={enteredAge}
						id='age'
						type='number'
						onChange={ageChangeHandler}
					/>
					<Button onClick={addUserHandler} type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;