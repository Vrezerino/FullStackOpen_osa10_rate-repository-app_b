import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
//import { Link } from 'react-router-native';
import theme from '../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
	view: {
		//fontSize: theme.fontSizes.body
		padding: theme.padding.basic,
		backgroundColor: 'white'
	},
	button: {
		padding: theme.padding.basic,
		backgroundColor: 'red',
		fontSize: theme.fontSizes.body,
		color: 'white',
		borderRadius: 5,
		textAlign: 'center'
	}
});

const validationSchema = yup.object().shape({
	username: yup
	.string()
	.min(3, 'Minimum length is 3.')
	.required('Username is required.'),
	password: yup
	.string()
	.min(8, 'Minimum length is 8.')
	.required('Password is required.')
});

const SignInForm = ({ onSubmit }) => {
	return (
		<View style={styles.view}>
			<View>
				<FormikTextInput
					name='username'
					placeholder='Username' />
				<FormikTextInput
					secureTextEntry
					name='password'
					placeholder='Password' />
			</View>
			<View>
				<Pressable
					onPress={onSubmit}>
					{/*<Link to='/'>*/}
						<Text style={styles.button}>
							Sign In
						</Text>
					{/*</Link>*/}
				</Pressable>
			</View>
		</View>
	);
};

const initialValues = {
	username: '',
	password: ''
};

const SignIn = () => {
	const onSubmit = values => {
		const user = values.username;
		const pass = values.password;
		console.log(user && pass ? `${user}, ${pass}` : 'Fill all fields!');
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;