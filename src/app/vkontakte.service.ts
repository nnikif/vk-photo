import { Injectable } from '@angular/core';
import { TokenService } from "./token.service"
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable, of} from "rxjs/index";
import { Pictures } from "./pictures"


@Injectable({
  providedIn: 'root'
})
export class VkontakteService {
  public picture: Pictures;
  constructor(private http: HttpClient, private tokenService: TokenService) { }
  getUsers() {
    let token = this.tokenService.getToken();
    return this.http.jsonp(`https://api.vk.com/method/users.get?user_ids=210700286&fields=bdate&access_token=${token}&v=5.84`, 'callback')
  }
  getPhotos(): Observable <any>{
    if (this.tokenService.getToken()) return this.http.jsonp(`https://api.vk.com/method/photos.getAll?access_token=${this.tokenService.getToken()}&count=20&v=5.84`, 'callback')
    else return of(null)
  }
  getPhoto(id: number, album_id: number): Observable <any>{
    console.log(this.tokenService.getToken());
    return this.http.jsonp(`https://api.vk.com/method/photos.get?photo_ids=${id}&album_id=${album_id}&access_token=${this.tokenService.getToken()}&v=5.84`, 'callback')
  }
  setPhoto(picture: Pictures){
    this.picture = picture;
    // console.log(picture)
  }
  gettPhoto(): Observable <Pictures>{
    return of(this.picture);
  }
  editComment(id: number, comment: string){
    return this.http.jsonp(`https://api.vk.com/method/photos.edit?photo_id=${id}&caption=${comment}&access_token=${this.tokenService.getToken()}&v=5.84`, 'callback')
  }
}
