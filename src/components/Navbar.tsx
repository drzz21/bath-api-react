import { ModalNewRecord } from './ModalNewRecord';
import { Dropdown } from './Dropdown';
import { NotificationsList } from './NotificationsList';

export const Navbar = () => {
	return (
		<>
			<div className="navbar bg-base-300 rounded-lg">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl">
						Bath API
					</a>
				</div>
				<div className="flex-none">
					<label htmlFor="my-modal-6" className="btn mr-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 25 25"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 12H18"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 18V6"
							/>
						</svg>
					</label>

					<input
						type="checkbox"
						id="my-modal-6"
						className="modal-toggle"
					/>
					<ModalNewRecord />
					<Dropdown>
						<NotificationsList />
					</Dropdown>

					<div className="dropdown dropdown-end">
						<label
							tabIndex={0}
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img src="https://placeimg.com/80/80/people" />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52 "
						>
							<li>
								<a className="justify-between">Profile</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
