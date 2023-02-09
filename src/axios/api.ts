import apiClient from './axios';

export const loginFn = async (credentials) => {
	const response = await apiClient.post(`users/log-in`, credentials, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return response.data;
};

export const signUpFn = async (info) => {
	const response = await apiClient.post(`users/sign-up`, info, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return response.data;
};

export const getAllPostsFn = async (token) => {
	const response = await apiClient.get(`poops/get-all`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
	});
	return response.data;
};


export const getMyPostsFn = async (token) => {
	const response = await apiClient.get(`poops/get-mine`, {
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: `Bearer ${token}`
		},
	});
	return response.data;
};

export const createPostFn = async (info,token) => {
	console.log(info);
	const response = await apiClient.post(`poops/create`,info, {
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: `Bearer ${token}`
		},
	});
	return response.data;
};