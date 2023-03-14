import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';

import classes from './AddUser.module.css';

const AddUser = props => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	const addUserHandler = e => {
		e.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;
		if (+enteredUserAge < 0) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (>0).'
			});
			return;
		}
		if (enteredName === '' || enteredUserAge === '') {
			setError({
				title: 'Invalid input',
				message: 'Please enter a vaild name and age (non-empty values).'
			});
			return;
		}
		props.onAddUsers(enteredName, enteredUserAge);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	}

	const errorHandler = () => {
		setError(null);
	};

	return (
		 <Wrapper>
			{error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
			<Card className={classes.input}>
				<form>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						ref={nameInputRef}
					/>
					<label htmlFor='age'>Age</label>
					<input
						id='age'
						type='number'
						ref={ageInputRef}
					/>
					<Button onClick={addUserHandler} type='submit'>Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;