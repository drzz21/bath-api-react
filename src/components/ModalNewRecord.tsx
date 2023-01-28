import { useRef, useState } from 'react';

export const ModalNewRecord = () => {
	const refFile = useRef();
	const [imagePreview, setImagePreview] = useState([]);

	const [locationCords, setLocationCords] = useState({ x: 0, y: 0 });

	function handleFile() {
		refFile.current.click();
	}

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
			<input type="checkbox" id="my-modal-6" className="modal-toggle" />
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
					coordenadas: {locationCords.x}
					{locationCords.y}
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
		</>
	);
};
