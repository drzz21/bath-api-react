import {  createContext } from 'react';

import { AppRouter } from './router/AppRouter';
import './App.css';
import { useAuth } from './hooks/useAuth';

export const AuthContext = createContext({});

function App() {
	const { isAuth, setIsAuth,setToken,token,actualUser, setActualUser } = useAuth();
	
	return (
		<AuthContext.Provider value={{isAuth,setIsAuth,setToken,token,actualUser, setActualUser }}>
			<AppRouter />
		</AuthContext.Provider>
	);
}

export default App;
