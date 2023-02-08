import { useEffect, useState, useContext } from 'react';
import { Post } from './Post';
import { useQuery } from '@tanstack/react-query';
import { getAllPostsFn } from '../axios/api';
import { AuthContext } from '../App';

export const PostsList = () => {
	const { token } = useContext(AuthContext);

	const loadPostsQuery = useQuery({
		queryKey: ['posts'],
		queryFn: () => getAllPostsFn(token),
	});


	// const handleScroll = () => {
	// 	const { scrollHeight, scrollTop, clientHeight } =
	// 		document.documentElement;
	// 	if (scrollHeight - scrollTop === clientHeight) {
	// 		setPosts((posts)=>([...posts, crypto.randomUUID()]));
	// 		// setPosts((posts)=>([...posts, crypto.randomUUID()]));
	// 	}
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	return (
		<>
			<div className="flex flex-col justify-center items-center w-full">
				{loadPostsQuery.data.map((post) => (
					<Post key={post.id} {...post} />
				))}
			</div>
		</>
	);
};
