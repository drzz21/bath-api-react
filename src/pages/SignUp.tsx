import { useRef, useContext } from 'react';
import { AuthContext } from '../App';
import { useMutation } from '@tanstack/react-query';
import { signUpFn,loginFn } from '../axios/api';
import { Link } from 'react-router-dom';

export const SignUp = () => {
	const { setIsAuth, setToken } = useContext(AuthContext);
	const refName = useRef<HTMLInputElement>('');
	const refLastName = useRef<HTMLInputElement>('');
	const refEmail = useRef<HTMLInputElement>('');
	const refPassword = useRef<HTMLInputElement>(null);
	const refConfirmPassword = useRef<HTMLInputElement>(null);

	const signUpQuery = useMutation({
		mutationFn: (objCredentials) => signUpFn(objCredentials),
		onSuccess: ({ token }) => {
			loginQuery.mutate({
				email: refEmail.current.value,
				password: refPassword.current.value,
			});
		},
		onError: (error) => {},
	});

	const loginQuery = useMutation({
		mutationFn: (objCredentials) => loginFn(objCredentials),
		onSuccess: ({ token }) => {
			setToken(token);
			setIsAuth(true);
		},
		onError: (error) => {},
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email = refEmail.current?.value;
		const password = refPassword.current?.value;
		const name = refName.current?.value;
		const lastname = refLastName.current?.value;
		const passwordConfirm = refConfirmPassword.current?.value;

		signUpQuery.mutate({
			email,
			password,
			name,
			lastname,
			'password-confirmation': passwordConfirm,
		});
	};

	return (
		<div className="flex flex-row  justify-center min-h-screen mx-0">
			<div className="self-center bg-base-300  mx-auto rounded-2xl w-100">
				<div className="bg-base-200 text-white rounded-t-2xl w-full text-center font-semibold py-2 text-lg">
					BATH API
				</div>
				<form className=" px-9 py-8" onSubmit={handleSubmit}>
					<div className="text-white font-semibold text-2xl pb-1">
						Sign Up
					</div>
					<div className="text-gray-500">You can register below</div>
					{!loginQuery.isLoading && (
						<>
							<div className="flex-row gap-2">
								<div className="form-control py-1">
									<label className="label text-sm font-medium ">
										Name
									</label>
									<input
										ref={refName}
										type="text"
										placeholder="John"
										className="input input-bordered w-full  input-md rounded-lg focus:outline-none focus:border-secondary"
									/>
								</div>
								<div className="form-control py-1">
									<label className="label text-sm font-medium ">
										Last Name
									</label>
									<input
										ref={refLastName}
										type="text"
										placeholder="Doe"
										className="input input-bordered w-full  input-md rounded-lg focus:outline-none focus:border-secondary"
									/>
								</div>
							</div>
							<div className="form-control w-full py-1">
								<label className="label text-sm font-medium ">
									Email
								</label>
								<input
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
									className="input input-bordered w-full input-md rounded-lg focus:outline-none focus:border-secondary"
								/>
							</div>
							<div className="form-control w-full py-1">
								<label className="label text-sm font-medium ">
									Confirm Password
								</label>
								<input
									value="secret"
									ref={refConfirmPassword}
									type="password"
									placeholder="Enter your password"
									className="input input-bordered w-full input-md rounded-lg focus:outline-none focus:border-secondary"
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
						className="btn w-full btn-secondary mt-2 rounded-full"
					>
						SIGN UP
					</button>
					<div className="text-center pt-4">
						Already have an account?{' '}
						<Link
							to="/auth/login"
							className="text-secondary font-semibold"
						>
							Login
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
