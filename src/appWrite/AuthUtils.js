import { Client,Account } from "appwrite";
import auth from "./AuthConfig";

class AuthUtil{

	

	constructor(){
		console.log(auth)
		this.client= new Client().setEndpoint(auth.endpoint_url).setProject(auth.project_id);

		this.account= new Account(this.client);

		console.log(this.client);

		console.log(this.account)
	}	

	async singUp(userId,email,password){
		try{

			return await this.account.create(userId,email,password);
			
		}
		catch(error){

			console.log(`error occured at singUp method in AuthUtil ${error}`);
			return false;
		}
	}
	async loginWithEmail(email,password){
		try{
			 return await this.account.createEmailSession(email,password);
		}
		catch(error){
			console.log(`error occured at LoginWithEmail method in AuthUtil ${error}`);
			return false; 	
		}
	}

	async deleteSession(sessionId){
		
		try{
		return await this.account.deleteSession(sessionId);
		}
		catch(error){
			console.log(`error occured at DeleteSession method in AuthUtil`);
			return error;
		}
	}

	// async getSession(sessionId){
	// 	try{
	// 		return await this.account.getSession(sessionId);


	// 	}catch(error){
	// 		console.log(`error occured at GetSession method in AuthUtil`);
	// 		return error;
	// 	}
	// }


}

const authObj = new AuthUtil();

export default authObj;