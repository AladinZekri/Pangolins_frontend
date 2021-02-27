import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string,age: number,famille: string,race: string,nourriture: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      age,
      famille,
      race,
      nourriture
    }, httpOptions 

    );
  }

  // Get all users
  getAll(): Observable<any> {
    return this.http.get(AUTH_API + "show");
  }


  // Get user by id
  get(id : any): Observable<any> {
    return this.http.get(`${AUTH_API + "getUserById"}/${id}`);
  }

  // update user
  update(id :any , data : any): Observable<any> {
    return this.http.put(`${AUTH_API +"update"}/${id}`, data);
  }

  //findby username
  findByUsername(username : any): Observable<any> {
    return this.http.get(`${AUTH_API+ "show"}?username=${username}`);
  }

  // ajouter amis
  sendRequest(sender :any , reciever:any , data : any): Observable<any> {
    return this.http.post(`${AUTH_API +"friendReq"}/${sender}/${reciever}`, data);
  }

   // Get requests
   getReq(id : any): Observable<any> {
    return this.http.get(`${AUTH_API + "friendReq"}/${id}/requests`);
  }

    // accepter amis
    accept(sender :any , reciever:any , data : any): Observable<any> {
      return this.http.post(`${AUTH_API +"friendReq"}/${sender}/${reciever}/accept`, data);
      
    }

    // supp invi
    decline(sender :any , reciever:any , data : any): Observable<any> {
      return this.http.post(`${AUTH_API +"friendReq"}/${sender}/${reciever}/decline`, data);
    }

      // Get friends
   getFriends(id : any): Observable<any> {
    return this.http.get(`${AUTH_API + "friendReq"}/${id}/friends`);
  }








}
