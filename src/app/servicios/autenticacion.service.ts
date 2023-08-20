import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="https://portfolio43.onrender.com/auth/login";
  currentUserSubject:BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

  iniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url,credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(data))
      this.currentUserSubject.next(data)
      return data;
    }))
  }
  public usuarioAutenticado(){
    return this.currentUserSubject.value;
  }
}
