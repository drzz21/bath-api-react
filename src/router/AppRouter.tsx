import React,{useEffect,useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { AuthContext } from '../App';


export const AppRouter = () => {

	const { isAuth } = useContext(AuthContext);
	
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
