import React,{useEffect,useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
// import { useAuth } from '../hooks/useAuth';
import { AuthContext } from '../App';


export const AppRouter = () => {
	// const isAuth = JSON.parse(localStorage.getItem('isAuth')!) ?? false;
	
	// const { isAuth } = useAuth();
	// console.log({isAuth},'approuter');
	// useEffect(() => {
	//   console.log('change')
	// }, [isAuth])
	const { isAuth,setIsAuth } = useContext(AuthContext);
	
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
