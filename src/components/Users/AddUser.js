import React from 'react';

const AddUser = props => {
	const addUserHandler = e => {
		e.preventDefault();
	}

	return (
		<form>
			<label htmlFor='username'>Username</label>
			<input id='username' type='text' />
			<label htmlFor='age'>Age</label>
			<input id='age' type='number' />
			<button onClick={addUserHandler} type='submit'>Add User</button>
		</form>
	);
};

export default AddUser;