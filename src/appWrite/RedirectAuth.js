import authObj from "./AuthUtils";



const Redirect =()=>{

	const user =  authObj.GetCurrentUser()
	console.log(user);
	return user;
}


export default Redirect;