import React,{useContext} from 'react';
import { useAuth } from '../hooks/useAuth';
import { AuthContext } from '../App';

export const Login = () => {
	const { isAuth,setIsAuth } = useContext(AuthContext);

	// const setAuth = () => {
	// 	localStorage.setItem('isAuth', 'true');
	// };

	// const { isAuth, setIsAuth } = useAuth();

	console.log({isAuth},'login');

	return (
		<div className="flex flex-row  justify-center min-h-screen mx-0">
			<div className="self-center bg-base-300  mx-auto rounded-2xl w-100">
				<div className="bg-base-200 text-white rounded-t-2xl w-full text-center font-semibold py-2 text-lg">BATH API</div>
				<div className=" px-9 py-8">
					<div className="text-white font-semibold text-2xl pb-1">
						Log In
					</div>
					<div className="text-gray-500">
						Please log into your account.
					</div>
					<div className="form-control w-full py-1">
						<label className="label text-sm font-medium ">
							Email
						</label>
						<input
							type="text"
							placeholder="yourmail@mail.com"
							className="input input-bordered w-full max-w-xs input-md rounded-lg focus:outline-none focus:border-secondary"
						/>
					</div>
					<div className="form-control w-full py-1">
						<label className="label text-sm font-medium ">
							Password
						</label>
						<input
							type="password"
							placeholder="Enter your password"
							className="input input-bordered w-full max-w-xs input-md rounded-lg focus:outline-none focus:border-secondary"
						/>
					</div>
					<button onClick={()=>setIsAuth(true)} className="btn btn-wide btn-secondary mt-2 rounded-full">
						LOGIN
					</button>
				</div>
			</div>
		</div>
	);
};
