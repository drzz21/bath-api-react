import React from 'react';
import { Navbar } from '../components/Navbar';
import { PostsList } from '../components/PostsList';

export const Dashboard = () => {
	return (
		<>
			<div className="p-3">
				<Navbar />
				<PostsList />
			</div>
		</>
	);
};
