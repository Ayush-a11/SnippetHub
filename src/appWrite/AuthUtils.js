import { Client,Account, Databases, ID } from "appwrite";
import auth from "./AuthConfig";

class AuthUtil{

	

	constructor(){
		this.client= new Client().setEndpoint(auth.endpoint_url).setProject(auth.project_id);

		this.account= new Account(this.client);

		this.database=new Databases(this.client);

		console.log(this.client);

		console.log(this.account)
	}	

	async singUp(email,password){
		try{

			const userId=ID.unique()

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

	

	async OAuthLogin() {
        try {
            // Use OAuthProvider instance to initiate OAuth login
            return await account.createOAuth2Session('google');
        } catch (ex) {
            console.log(ex);
        }
    }

	async OTP_Verification(email){
		try{
			const userId=ID.unique()

			return await this.account.createEmailToken(userId, email,true)
		}	
		catch(error){
			console.log(`error occured at OTP_Verification method ${error}`);
		}
	}



}

const authObj = new AuthUtil();

export default authObj;