import { useEffect, useState, useContext } from 'react';
import { Post } from './Post';
import { useQuery } from '@tanstack/react-query';
import { getAllPostsFn,getMyPostsFn } from '../axios/api';
import { AuthContext } from '../App';

export const PostsList = ({ activeTab }) => {
	const { token } = useContext(AuthContext);

	const loadAllPostsQuery = useQuery({
		queryKey: ['posts'],
		queryFn: () => getAllPostsFn(token),
	});

	const loadMyPostsQuery = useQuery({
		queryKey: ['my-posts'],
		queryFn: () => getMyPostsFn(token),
	});


	const options = {
		'1': loadAllPostsQuery.data ?? [],
		'2': loadMyPostsQuery.data ?? [],
	};


	

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
			<div className="flex flex-col justify-center items-center w-full relative z-0">
				{options[activeTab].map((post) => (
					<Post key={post.id} {...post} />
				))}
			</div>
		</>
	);
};
