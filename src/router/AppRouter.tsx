import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			{/* <Route path="/*" element={<Dashboard />} /> */}
		</Routes>
	);
};
