export class SignInTokenStatus {
    username:string;
    acces_token: string;
  
    constructor(username: string,acces_token: string) {
      this.username = username;
      this.acces_token = acces_token;
    }
    getusername(): string {
      return this.username;
    }
  
    getAcces_token(): string {
      return this.acces_token;
    }
  }
  