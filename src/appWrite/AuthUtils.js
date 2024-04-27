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

	async singUp(userId,firstName,lastName,username,email,password){
		try{
			await this.account.create(userId,firstName,lastName,username,email,password).
			then((msg)=> msg).
			catch(err=>err);
		}
		catch(error){
			console.log(`error occured at singUp method in AuthUtil ${error}`);
			return false;
		}
		return true;
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



}

const authObj = new AuthUtil();

export default authObj;