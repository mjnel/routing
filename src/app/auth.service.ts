export class AuthService {

    loggedIn = false;
    
    isAutenticated(){

        return new Promise((resolve, reject)=>{
            resolve(this.loggedIn)
        })

            
        }
    

    logIn(){
        this.loggedIn = true; 
    }

    logOut(){
        this.loggedIn = false

    }

getStatus(){
    return this.loggedIn
}

} 