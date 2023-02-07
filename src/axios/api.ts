import apiClient from './axios';

export const loginFn = async (credentials) => {
	const response = await apiClient.post(`users/log-in`, credentials, {
	  headers: {
		'Content-Type': 'multipart/form-data',
	  },
	});
	return response.data;
  };