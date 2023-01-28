import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';



export const AppRouter = () => {
	const isAuth = JSON.parse(localStorage.getItem('isAuth')!) ?? false;
	// console.log(isAuth);
	return (
		<Routes>
			{isAuth ? (
				<Route path="/*" element={<Dashboard />} />
			) : (
				<Route path="/login" element={<Login />} />
			)}

			<Route path="/*" element={<Navigate to="/login" />} />


		</Routes>
	);
};
