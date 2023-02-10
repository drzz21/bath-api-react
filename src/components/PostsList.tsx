import { useEffect, useState, useContext } from 'react';
import { Post } from './Post';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getAllPostsFn, getMyPostsFn } from '../axios/api';
import { AuthContext } from '../App';

export const PostsList = ({ activeTab }) => {
	const { token } = useContext(AuthContext);

	const {
		data: infiniteData,
		hasNextPage,
		fetchNextPage,
	} = useInfiniteQuery({
		queryKey: ['posts'],
		queryFn: ({ pageParam = 1 }) => getAllPostsFn(token, pageParam),
		getNextPageParam: ({ page, pages_amount }) => page + 1 > pages_amount ? false : page + 1,
	});

	const {
		data: myInfiniteData,
		hasNextPage : myHasNextPage,
		fetchNextPage: myFetchNextPage,	
	} = useInfiniteQuery({
		queryKey: ['my-posts'],
		queryFn: ({ pageParam = 1 }) => getMyPostsFn(token, pageParam),
		getNextPageParam: ({ page, pages_amount }) => page + 1 > pages_amount ? false : page + 1,
	});


	const options = {
		'1': infiniteData?? [],
		'2': myInfiniteData?? [],
	};

	const handleScroll = () => {
		const { scrollHeight, scrollTop, clientHeight } =
			document.documentElement;
		if (scrollHeight - scrollTop === clientHeight) {
			fetchNextPage();
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);


	return (
		<>
			<div className="flex flex-col justify-center gap-4 p-4 items-center w-full relative z-0 min-h-[600px]:">
				{options[activeTab]?.pages?.flatMap(el=>el.poops).map((post) => (
					<Post key={post.id} {...post} />
				))}
			</div>
		</>
	);
};
