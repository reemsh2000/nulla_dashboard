import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth,private router:Router) { }
  register(email:string,password:string){
   
    
    this.auth['createUserWithEmailAndPassword'](email,password).then((res: { user: any; })=>{
        
       
        this.router.navigate(['/login']);
   
    })
  }
}
