import React from 'react';
import Card from '../UI/Card';

import classes from './AddUser.module.css';

const AddUser = props => {
	const addUserHandler = e => {
		e.preventDefault();
	}

	return (
		<Card className={classes.input}>
			<form>
				<label htmlFor='username'>Username</label>
				<input id='username' type='text' />
				<label htmlFor='age'>Age</label>
				<input id='age' type='number' />
				<button onClick={addUserHandler} type='submit'>Add User</button>
			</form>
		</Card>
	);
};

export default AddUser;