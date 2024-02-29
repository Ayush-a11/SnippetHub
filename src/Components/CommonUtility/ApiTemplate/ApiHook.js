import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Accept, AccessToken, ClientId } from './Config';


function ApiHook(Method,RequestUrl,Body) {
	const [data,setData]=useState([]);
	
	const myHeaders = new Headers();
	myHeaders.append("Client-ID", ClientId);
	myHeaders.append("Accept", Accept);
	myHeaders.append("Content-Type", "text/plain");
	myHeaders.append("Authorization", AccessToken);

	const requestOptions = {
	method: Method,
	headers: myHeaders,
	body: Body,
	redirect: "follow"
	};

	useEffect(()=>{
		fetch(RequestUrl, requestOptions)
		.then((response) => response.json())
		.then((result) => setData(result))
		.catch((error) => console.error(error));
	},[]);	
  return data;
}

export default ApiHook
