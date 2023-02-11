import React, { useEffect, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import {DashboardRouter} from './DashboardRouter';
import { AuthContext } from '../App';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
	const { isAuth } = useContext(AuthContext);

	return (
		<Routes>
			{isAuth ? (
				<Route path="/*" element={<DashboardRouter />} />
			) : (
				<Route path="auth/*" element={<AuthRouter />} />
			)}
			{/* <Route path="/sign-up" element={<SignUp />} /> */}

			<Route path="/*" element={<Navigate to="auth/login" />} />
		</Routes>
	);
};
