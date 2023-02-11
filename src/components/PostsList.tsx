import { useEffect, useState, useContext } from 'react';
import { Post } from './Post';
import { useInfiniteQuery } from '@tanstack/react-query';
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
		getNextPageParam: ({ page, pages_amount }) => {
			if (page + 1 > pages_amount) {
				return undefined;
			}
			return page + 1;
		},
	});



	const {
		data: myInfiniteData,
		hasNextPage: myHasNextPage,
		fetchNextPage: myFetchNextPage,
	} = useInfiniteQuery({
		queryKey: ['my-posts'],
		queryFn: ({ pageParam = 1 }) => getMyPostsFn(token, pageParam),
		getNextPageParam: ({ page, pages_amount }) => {
			return page + 1 > pages_amount ? undefined : page + 1;
		},
	});

	const options = {
		'1': infiniteData ?? [],
		'2': myInfiniteData ?? [],
	};


	useEffect(() => {
		let fetching = false;
		const handleScroll = async (e) => {
		  const {scrollHeight, scrollTop, clientHeight} = e.target.scrollingElement;
		  if(!fetching && scrollHeight - scrollTop === clientHeight) {
			fetching = true
			if(activeTab==1 && hasNextPage) await fetchNextPage()
			if(activeTab==2 && myHasNextPage) await myFetchNextPage()
			fetching = false
		  }
		}
		document.addEventListener('scroll', handleScroll)
		return () => {
		  document.removeEventListener('scroll', handleScroll)
		}
	  }, [fetchNextPage, hasNextPage])


	return (
		<>
			<div className="flex flex-col justify-center gap-4 p-4 items-center w-full relative z-0 min-h-[600px]:">
				{options[activeTab]?.pages
					?.flatMap((el) => el.poops)
					.map((post) => (
						<Post key={post.id} {...post} />
					))}
			</div>
		</>
	);
};
