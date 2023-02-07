import { useEffect,useState } from 'react';
import { Post } from './Post';

export const PostsList = () => {

	const [posts, setPosts] = useState([1,2,3]);

	const handleScroll = () => {
		const { scrollHeight, scrollTop, clientHeight } =
			document.documentElement;
		if (scrollHeight - scrollTop === clientHeight) {
			setPosts((posts)=>([...posts, crypto.randomUUID()]));
			// setPosts((posts)=>([...posts, crypto.randomUUID()]));
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
			<div className="flex flex-col justify-center items-center w-full">
				{/* <Post /> */}
				{posts.map((post) => (<Post key={post}/>))}
			</div>
		</>
	);
};
