import { Injectable} from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { LoginCredentials } from '../model/login-credentials.interface';

const app = initializeApp(environment.firebase);
const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuth{
  public admin!:boolean;
  ngOnInit():void{
  }
  async loginUp(login:LoginCredentials){
    return await signInWithEmailAndPassword(auth, login.email, login.password);
  }
  signOut(){
    signOut(auth)
    .then(() => {sessionStorage.clear();
      console.log('se ha cerrado sesion');
    })
    .catch((error) => {console.log(error);});
  }
}