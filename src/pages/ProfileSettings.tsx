import { Navbar } from '../components/Navbar';

export const ProfileSettings = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 m-7 rounded-lg bg-base-200 flex flex-col justify-center shadow-lg items-center gap-4">
				<h1 className="text-3xl font-bold">Profile Settings</h1>
				<div className="bg-base-300 p-7 rounded-lg ">
					<span className="text-2xl">Update Profile Pic</span>
					<div className="form-control py-4 w-96 flex flex-col justify-center items-center">
						<img
							className="mask mask-circle h-48 w-48 hover:opacity-50"
							src="https://fastly.picsum.photos/id/237/300/300.jpg?hmac=9iUR3VHqf0Y9abGyuPZTpEIxHJL0sSvyNtJtDIMSylM"
						/>
					</div>
				</div>
				<div className="bg-base-300 p-7 rounded-lg">
					<span className="text-2xl">Update Name and Last Name</span>
					<div className="py-1 flex flex-row justify-around">
						Current Name:{' '}
						<div className="badge badge-md p-3">Francisco</div>
					</div>
					<div className="py-1 flex flex-row justify-around">
						Current Last Name:{' '}
						<div className="badge badge-md p-3">Diosdado</div>
					</div>
					<div className="flex-row gap-2">
						<div className="form-control py-1">
							<label className="label text-sm font-medium ">
								Name
							</label>
							<input
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
								type="text"
								placeholder="Doe"
								className="input input-bordered w-full  input-md rounded-lg focus:outline-none focus:border-secondary"
							/>
						</div>
					</div>
				</div>
				<div className="bg-base-300 p-7 rounded-lg">
					<span className="text-2xl">Update Email</span>
					<div className="py-1 flex flex-row justify-around">
						Current Email:{' '}
						<div className="badge badge-md p-3">
							drz.y2k@gmail.com
						</div>
					</div>
					<div className="form-control py-1 w-96">
						<label className="label text-sm font-medium ">
							New Email
						</label>
						<input
							// value="lddcb_5@hotmail.com"

							type="text"
							placeholder="yourmail@mail.com"
							className="input input-bordered  input-md w-full rounded-lg focus:outline-none focus:border-secondary"
						/>
					</div>
				</div>
				<div className="bg-base-300 p-7 rounded-lg">
					<span className="text-2xl">Update Password</span>
					<div className="form-control py-1 w-96">
						<label className="label text-sm font-medium ">
							New Password
						</label>
						<input
							type="password"
							placeholder="New Password"
							className="input input-bordered  input-md w-full rounded-lg focus:outline-none focus:border-secondary"
						/>
					</div>
					<div className="form-control py-1 w-96">
						<label className="label text-sm font-medium ">
							Confirm New Password
						</label>
						<input
							type="password"
							placeholder="Confirm New Password"
							className="input input-bordered  input-md w-full rounded-lg focus:outline-none focus:border-secondary"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
