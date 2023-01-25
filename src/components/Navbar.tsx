import { useRef, useState } from 'react';

export const Navbar = () => {
	const refFile = useRef();
	const [imagePreview, setImagePreview] = useState([]);

	function handleFile() {
		refFile.current.click();
	}

	// function onFileInputChange({ target }) {
	// 	console.log(target.files);
	// 	setFiles(target.files);
	// }

	function onFileInputChange(e) {
		const reader = new FileReader();
		const selectedFile = e.target.files[0];
		if (selectedFile) {
			reader.readAsDataURL(selectedFile);
		}
		reader.onload = (readerEvent) => {
			if (selectedFile.type.includes('image')) {
				setImagePreview([{ img: readerEvent.target.result, key: '1' }]);
			}
		};
	}

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
					<div className="modal modal-bottom sm:modal-middle">
						<div className="modal-box">
							<h3 className="font-bold text-lg">Add new poop</h3>
							<textarea
								className="textarea textarea-secondary w-full mt-2"
								placeholder="Description"
							></textarea>
							<input
								ref={refFile}
								onChange={onFileInputChange}
								type="file"
								multiple
								hidden
							/>{' '}
							<div className="grid gap-4 grid-cols-4">
								{imagePreview.map((el) => (
									<img
										key={el.key}
										className="rounded-lg"
										src={el.img}
										alt=""
									/>
								))}
							</div>
							<button
								className="btn mt-2"
								onClick={() => handleFile()}
							>
								add files
							</button>
							<div className="modal-action">
								<label htmlFor="my-modal-6" className="btn">
									{' '}
									Cancel{' '}
								</label>
								<label
									htmlFor="my-modal-6"
									className="btn btn-secondary
								"
								>
									{' '}
									Ok!{' '}
								</label>
							</div>
						</div>
					</div>

					<div className="dropdown dropdown-end mr-2">
						<div className="indicator">
							<span className="indicator-item badge badge-sm badge-secondary">
								3
							</span>
							<button className="btn">
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
										d="M12.0196 2.91016C8.7096 2.91016 6.0196 5.60016 6.0196 8.91016V11.8002C6.0196 12.4102 5.7596 13.3402 5.4496 13.8602L4.2996 15.7702C3.5896 16.9502 4.0796 18.2602 5.3796 18.7002C9.6896 20.1402 14.3396 20.1402 18.6496 18.7002C19.8596 18.3002 20.3896 16.8702 19.7296 15.7702L18.5796 13.8602C18.2796 13.3402 18.0196 12.4102 18.0196 11.8002V8.91016C18.0196 5.61016 15.3196 2.91016 12.0196 2.91016Z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601"
									/>
								</svg>
							</button>
						</div>

						<div
							tabIndex={0}
							className="mt-4 card card-compact dropdown-content w-52 bg-base-300 shadow"
						>
							<div className="card-body">content here</div>
						</div>
					</div>
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
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
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
