import { ModalNewRecord } from './ModalNewRecord';
import { Dropdown } from './Dropdown';
import { NotificationsList } from './NotificationsList';
import { ProfileOptions } from './ProfileOptions';

export const Navbar = () => {
	return (
		<>
			<div className="navbar bg-base-300 rounded-lg sticky top-0 z-20">
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

				
					<ModalNewRecord />

					<Dropdown>
						<NotificationsList />
					</Dropdown>

					<Dropdown>
						<ProfileOptions />
					</Dropdown>

				</div>
			</div>
		</>
	);
};
