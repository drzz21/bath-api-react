import { useRef, useState } from 'react';

export const Navbar = () => {
	const refFile = useRef();
	const [imagePreview, setImagePreview] = useState([]);
	const [locationCords, setLocationCords] = useState({ x: 0, y: 0 });

	function handleFile() {
		refFile.current.click();
	}

	// function onFileInputChange({ target }) {
	// 	console.log(target.files);
	// 	setFiles(target.files);
	// }

	function onFileInputChange(e) {
		setImagePreview([]);

		for (let i = 0; i < e.target.files.length; i++) {
			let reader = new FileReader();
			const selectedFile = e.target.files[i];
			if (selectedFile) {
				reader.readAsDataURL(selectedFile);
			}
			reader.onloadend = (readerEvent) => {
				if (selectedFile.type.includes('image')) {
					setImagePreview((prev) => [
						...prev,
						{
							img: readerEvent.target.result,
							key: crypto.randomUUID(),
						},
					]);
				}
			};
		}

		// console.log(arrFiles);
		// 		setImagePreview(arrFiles);
	}

	function currentLocation() {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			// Show a map centered at latitude / longitude.
console.log(latitude, longitude);
			setLocationCords({ x: latitude, y: longitude });
		});
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
							coordenadas: {locationCords.x}{locationCords.y}
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
								className="btn mt-2 mr-2 btn-sm"
								onClick={() => handleFile()}
							>
								add files
							</button>
							<button
								className="btn mt-2 btn-sm mr-2 "
								onClick={() => setImagePreview([])}
							>
								clear files
							</button>
							<button
								className="btn mt-2 btn-sm"
								onClick={() => currentLocation()}
							>
								add location
							</button>
							<iframe
								className="mt-2"
								width="340"
								height="190"
								src={`https://www.openstreetmap.org/export/embed.html?bbox=${locationCords.x}%2C-${locationCords.y}&amp;layer=mapnik&amp;marker=20.139880513540504%2C-101.15318298339844`}
								style={{ border: '1px solid black' }}
							></iframe>
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
								2
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
							className="mt-4 card card-compact dropdown-content w-80 bg-base-300 shadow translate-x-12"
						>
							<div className="p-4">
								<div className="post1 flex flex-col ">
									<div className="flex flex-row justify-evenly  mb-2">
										<div className="mr-3 w-1/4">
											<img
												className="rounded-full"
												src="https://placeimg.com/60/60/people"
											/>
										</div>
										<div className="flex flex-col justify-center w-3/4">
											<div className="text-lg w-full font-medium">
												Mike Ortega is pooping
											</div>
											<div className="badge w-full">
												5 minutes ago
											</div>
										</div>
									</div>

									<div className="btn-group w-full justify-center">
										<button className="btn gap-2 w-1/2 btn-sm btn-secondary">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
												/>
											</svg>
											LIKE
										</button>
										<button className="btn gap-2 w-1/2 btn-sm">
											COMMENT
										</button>
									</div>
								</div>

								<div className="divider"></div>

								<div className="post1 flex flex-col ">
									<div className="flex flex-row justify-evenly  mb-2">
										<div className="mr-3 w-1/4">
											<img
												className="rounded-full"
												src="https://placeimg.com/60/60/people"
											/>
										</div>
										<div className="flex flex-col justify-center w-3/4">
											<div className="text-lg w-full font-medium">
												Guillermo Sámano commented your
												post:
											</div>

											<span
												style={{ fontStyle: 'italic' }}
												className="bg-gray-600 rounded-md mb-2 text-center"
											>
												"que rica caca :9"
											</span>

											<div className="badge w-full">
												16 minutes ago
											</div>
										</div>
									</div>

									<div className="btn-group w-full justify-center">
										<button className="btn gap-2 w-full btn-sm">
											VIEW POST
										</button>
									</div>
								</div>
							</div>
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
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52 "
						>
							<li>
								<a className="justify-between">
									Profile
									
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
