import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/*" element={<Dashboard />} />

		</Routes>
	);
};
