import React, { useEffect, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { AuthContext } from '../App';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
	const { isAuth } = useContext(AuthContext);

	return (
		<Routes>
			{isAuth ? (
				<Route path="/*" element={<Dashboard />} />
			) : (
				<Route path="auth/*" element={<AuthRouter />} />
			)}
			{/* <Route path="/sign-up" element={<SignUp />} /> */}

			<Route path="/*" element={<Navigate to="auth/login" />} />
		</Routes>
	);
};
