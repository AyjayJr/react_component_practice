import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';

const AddUser = props => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const addUserHandler = e => {
		e.preventDefault();
		if (enteredAge < 0) {
			alert('Age must be a number larger than 0!');
			return;
		}
		if (enteredUsername === '' || enteredAge === '') {
			alert('All fields must be filled!');
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

	return (
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
	);
};

export default AddUser;