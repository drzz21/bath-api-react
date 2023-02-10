import React, { useRef,useState,useContext } from 'react';
import { Navbar } from '../components/Navbar';
import { PostsList } from '../components/PostsList';
import { AuthContext } from '../App';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { loginFn, myInfoFn } from '../axios/api';

export const Dashboard = () => {
	const tabRef = useRef(null);
	const [activeTab, setActiveTab] = useState(1);

	const { setIsAuth, setToken,setActualUser,token } = useContext(AuthContext);

	const handleTab = (e) => {
		setActiveTab(e.target.name.split('-')[1]);
		tabRef.current.querySelectorAll('.tab').forEach((tab) => {
			tab.classList.remove('tab-active');
		});
		e.target.classList.add('tab-active');
	};

	const myInfoQuery = useQuery({
		queryKey: ['todos'],
		queryFn: ()=>myInfoFn(token),
		onSuccess: (user) => {
			setActualUser(user);
		},
		onError: (error) => {},
		enabled: !!token,
	});
	
	return (
		<div className='bg-base-200 min-h-screen'>
			<Navbar />
			<div className="tabs tabs-boxed flex p-0 items-center content-center justify-center h-full">
				<div
					ref={tabRef}
					className="sticky top-[66px] z-10 p-3 bg-base-200 w-full text-center shadow-md h-full"
				>
					<a className="tab tab-active" name="tab-1" onClick={handleTab}>
						All posts
					</a>
					<a className="tab" name="tab-2" onClick={handleTab}>
						My Posts
					</a>
				</div>
				<PostsList activeTab={activeTab} />
			</div>
		</div>
	);
};
