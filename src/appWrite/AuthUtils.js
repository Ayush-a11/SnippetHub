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

	async createDocument(firstName,lastName,email,password){
		try{
			return await 
				this.database.createDocument
					(auth.database_id,auth.collection_id,ID.unique(),
					{
						firstName,
						lastName,
						email,
						password
					}
					);
		}
		catch(error){
			console.log(`Error creating document for ${error}`);
			return false
		}
	}

	async GetCurrentUser(){
        try{
			const user =await  this.account.getSession('current');
			return user
		}
		catch(error){
			console.log("Error Fetching Current User Data :: GetCurrentUser function", error);
		}
		
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
			 return await this.account.createEmailPasswordSession(email,password);
		}
		catch(error){
			console.log(`error occured at LoginWithEmail method in AuthUtil ${error}`);
			return error; 	
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
            return await this.account.createOAuth2Session('google','http://localhost:5173','http://localhost:5173/Signup');
        } catch (ex) {
            console.log(ex);
        }
    }

	async OTP_Verification(email){
		try{

			console.log(this.account)
			const userId=ID.unique();
			return await this.account.createEmailToken(userId, email,true)
		}	
		catch(error){
			console.log(`error occured at OTP_Verification method ${error}`);
			return error;
		}
	}

	async createSession(userId,secret){
		try{
			return await this.account.createSession(userId,secret);
		}
		catch(error){
			console.log(`error occured at OTP_Verification method ${error}`);
			return false;
		}
	}



}

const authObj = new AuthUtil();

export default authObj;