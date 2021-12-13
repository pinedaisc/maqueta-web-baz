import axios from 'axios';

export const testNode = async () => {

	const url = '/api/test/testGet?folio='+localStorage.getItem('token-init-date');
	const options = {
		method: "get",
		url,
		headers: {
			'Content-Type': 'application/json',
			'x-token': localStorage.getItem('token')
		},
		data:{folio:localStorage.getItem('token-init-date')}
	};
	const response = await axios(options);
	return response;
}

export const testRoute = async (data) => {
	let body =  {data, folio:localStorage.getItem('token-init-date')};
	const url = '/api/test/testPost';
	const options = {
		method: "post",
		data: body,
		url,
		headers: {
			'Content-Type': 'application/json',
			'x-token': localStorage.getItem('token')
		}
	};
	const response = await axios(options);
	return response;
}

export const testApi = async () => {
	const url = '/api/test';
	const options = {
		method: "post",
		url,
		headers: {
			'Content-Type': 'application/json',
			'x-token': localStorage.getItem('token')
		},
		data: {folio:localStorage.getItem('token-init-date')}
	};
	const response = await axios(options);
	return response;
}


