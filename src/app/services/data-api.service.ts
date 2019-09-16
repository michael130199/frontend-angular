import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsInterface } from '../models/news-interface';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient,  private authService: AuthService) { }

  // Para AuthService
  // headers: HttpHeaders = new HttpHeaders({
  //   "Content-Type": "application/json"
  // });
  news:  Observable<any>;
  anews: Observable<any>;

  contact:  Observable<any>;
  contacts: Observable<any>;
  
  public selectedNews: NewsInterface = {
    id: null,
    user_id: null,
    file_id: null,
    title: "",
    content: "",
    resume: "",
    slug: "",
    status: "",
    publication_date: null,
    created_at: null,
    updated_at: null,
    deleted_at: null
  };

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });





  /** ------------------------- Modulo De Noticias---------------------- */
  getAllNews() {
    const url_api = "http://localhost:3000/api/news";
    return this.http.get(url_api);
  }

  getNewsById(id: string){
    const url_api = `http://localhost:3000/api/news/${id}`;
    return (this.news = this.http.get(url_api));
  }

  getOffers(){//filter
    const url_api = `http://localhost:3000/api/news?filter[where][status]={"id":"1","descrip":"Publicado"}`;
    return this.http.get(url_api);
  }

  saveNews(news){
    //todo: Obtenrer Token
    //todo: Not null
    let token;
    const url_api = `http://localhost:3000/api/news`;
    return this.http.post(url_api, news, {headers: this.headers}).pipe(map(data => data));
  }

  updateNews(news){
    //todo: Obtenrer Token
    //todo: Not null
    let token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/news`;
    //const url_api = `http://localhost:3000/api/news?access_token=${token}`;
    return this.http.put(url_api, news, {headers: this.headers}).pipe(map(data => data));
  }

  deleteNews(id: string){
    //todo: Obtenrer Token
    //todo: Not null
    let token;
    const url_api = `http://localhost:3000/api/news`;
    return this.http.delete(url_api, {headers: this.headers}).pipe(map(data => data));
  }

  /** -------------------------fin Modulo De Noticias---------------------- */


  /** ------------------------- Modulo De contactos---------------------- */
  getAllContact(user_id) {
    const url_api = "http://localhost:3000/api/user/{"+user_id+"}/contacts";
    return this.http.get(url_api);
  }

  postContact(user_id, contact) {
    const url_api = "http://localhost:3000/api/user/{"+user_id+"}/contacts";
    return this.http.post(url_api, contact, {headers: this.headers}).pipe(map(data=> data));
  }


  /** ------------------------- fin Modulo De contactos---------------------- */








}
