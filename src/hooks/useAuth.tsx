import  { useState } from 'react';

export const useAuth = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [token, setToken] = useState(null);
	const [actualUser, setActualUser] = useState(null);

	return { isAuth, setIsAuth,setToken,token,actualUser, setActualUser };
};
