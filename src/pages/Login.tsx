import React, { useRef,useContext } from 'react';
import { AuthContext } from '../App';
import { useMutation } from '@tanstack/react-query';
import { loginFn } from '../axios/api';

export const Login = () => {
	const { setIsAuth } = useContext(AuthContext);
	const refEmail = useRef<HTMLInputElement>('');
	const refPassword = useRef<HTMLInputElement>(null);

	const loginQuery = useMutation({
		mutationFn: (objCredentials) => loginFn(objCredentials),
		onSuccess: () => {
			setIsAuth(true);
		},
		onError: (error) => {
			
		},
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email = refEmail.current?.value;
		const password = refPassword.current?.value;
		loginQuery.mutate({ email, password });
	};

	return (
		<div className="flex flex-row  justify-center min-h-screen mx-0">
			<div className="self-center bg-base-300  mx-auto rounded-2xl w-100">
				<div className="bg-base-200 text-white rounded-t-2xl w-full text-center font-semibold py-2 text-lg">
					BATH API
				</div>
				<form className=" px-9 py-8" onSubmit={handleSubmit}>
					<div className="text-white font-semibold text-2xl pb-1">
						Log In
					</div>
					<div className="text-gray-500">
						Please log into your account.
					</div>
					{!loginQuery.isLoading && (
						<>
							<div className="form-control w-full py-1">
								<label className="label text-sm font-medium ">
									Email
								</label>
								<input
									value="lddcb_5@hotmail.com"
									ref={refEmail}
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
									value="secret"
									ref={refPassword}
									type="password"
									placeholder="Enter your password"
									className="input input-bordered w-full max-w-xs input-md rounded-lg focus:outline-none focus:border-secondary"
								/>
							</div>
						</>
					)}

					{loginQuery.isLoading && (
						<div
							className="radial-progress text-secondary animate-spin block mx-auto"
							style={{ '--value': 80, '--size': '12rem' }}
						></div>
					)}

					<button
						type="submit"
						// onClick={() => setIsAuth(true)}
						className="btn btn-wide btn-secondary mt-2 rounded-full"
					>
						LOGIN
					</button>
				</form>
			</div>
		</div>
	);
};
