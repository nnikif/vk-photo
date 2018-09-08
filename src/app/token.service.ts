import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: string;
  constructor() { }

  setToken(token: string){
    if (!this.token) this.token = token;
    // console.log(this.token)
  }
  getToken(){
    return this.token
  }
}
