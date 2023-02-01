import React from 'react';

export const Post = () => {
	return (
		<div className="card m-5 w-3/5 flex-auto bg-base-200 shadow-xl">
			<figure>
				<img src="https://picsum.photos/900/300" alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Mike Ortega is pooping</h2>
				<p>Una rica calabaza</p>
				<div className="btn-group w-full justify-start">
					<button className="btn gap-2 w-1/2 btn-sm btn-secondary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
						LIKE
					</button>
					<button className="btn gap-2 w-1/2 btn-sm">COMMENT</button>
				</div>
				<div className="bg-base-300 p-4 rounded-xl">
					<div className="flex content-center items-center gap-2">
						<div className="avatar">
							<div className="w-8 h-8 rounded-full">
								<img src="https://picsum.photos/6/6" />
							</div>
						</div>
						<input
							type="text"
							placeholder="Insert comment..."
							className="input input-bordered input-sm focus:outline-none input-secondary w-full bg-base-300"
						/>
					</div>
					<div className="chat chat-start">
						<div className="chat-image avatar">
							<div className="w-8 h-8 rounded-full">
								<img src="https://picsum.photos/6/6" />
							</div>
						</div>

						<div className="chat-bubble py-0.5">
							<span className="text-xs font-bold mr-1">
								Guillermo Sámano
							</span>
							<span className="text-xs font-bold opacity-50">
								12:45
							</span>
							<div className="text-sm">Y no invitas 😔</div>
						</div>
					</div>
					<div className="chat chat-start">
						<div className="chat-image avatar">
							<div className="w-8 h-8 rounded-full">
								<img src="https://picsum.photos/6/6" />
							</div>
						</div>

						<div className="chat-bubble py-0.5">
							<span className="text-xs font-bold mr-1">
								Miguel Ortega
							</span>
							<span className="text-xs font-bold opacity-50">
								12:45
							</span>
							<div className="text-sm">Cuando quieras 💩</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
