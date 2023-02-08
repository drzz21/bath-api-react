import { useRef, useState, cloneElement } from 'react';

export const Dropdown = ({ children }) => {
	const [stateDropdown, setStateDropdown] = useState(false);

	const refDropdown = useRef(null);

	const handleClick = () => {
		// console.log(cloneElement(children,refDropdown));
		setStateDropdown(!stateDropdown);

		if (!stateDropdown) {
			refDropdown.current.blur();
		}
	};

	return (
		<div
			className="dropdown dropdown-end mr-2 relative z-20"
			onClick={handleClick}
			onFocus={() => setStateDropdown(true)}
			onBlur={() => setStateDropdown(false)}
		>
			{cloneElement(children, { refDropdown: refDropdown })}
		</div>
	);
};
