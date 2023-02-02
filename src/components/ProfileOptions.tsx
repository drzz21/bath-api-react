import React,{useState,useContext} from 'react';
import { AuthContext } from '../App';
// import { useAuth } from '../hooks/useAuth';



export const ProfileOptions = ({refDropdown}) => {
	const { setIsAuth } = useContext(AuthContext);


	return (
		<>
			<label tabIndex={0} className="btn btn-ghost btn-circle avatar" ref={refDropdown}>
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
				<li onClick={()=>setIsAuth(false)}>
					<a>Logout</a>
				</li>
			</ul>
		</>
	);
};
