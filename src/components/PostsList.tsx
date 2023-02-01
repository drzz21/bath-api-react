import React from 'react';
import { Post } from './Post';

export const PostsList = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center w-full">
				<Post />
				<Post />
			</div>
		</>
	);
};
