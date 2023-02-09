import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';

export const AuthRouter = () => {
	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route path="sign-up" element={<SignUp />} />

			<Route path="/*" element={<Navigate to="/auth/login" />} />
		</Routes>
	);
};

