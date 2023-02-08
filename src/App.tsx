import { useState, createContext } from 'react';
import reactLogo from './assets/react.svg';
import { AppRouter } from './router/AppRouter';
import './App.css';
import { useAuth } from './hooks/useAuth';

export const AuthContext = createContext({});

function App() {
	const { isAuth, setIsAuth,setToken,token } = useAuth();
	
	return (
		<AuthContext.Provider value={{isAuth,setIsAuth,setToken,token}}>
			<AppRouter />
		</AuthContext.Provider>
	);
}

export default App;
