import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private router: Router ,public firestore: AngularFirestore ) {
    
  }
  
  register(email: string, password: string ,name: string,phone:number) {
    this.auth['createUserWithEmailAndPassword'](email, password).then(
      (res: { user: any }) => {
    
     this.firestore.collection('admin').doc(res.user.uid).set({email,name,phone}).then(()=>{
      this.router.navigate(['/login'])
     })
  
      }
    );

  }

  admin(Record:any){
    this.firestore.collection('admin').add(Record).then(()=>{
     
    }).catch(err=>{
      console.error(err)
    })
  }
  login(email:string,password:string){
    this.auth['signInWithEmailAndPassword'](email,password).then((res: { user: any; })=>{
      localStorage.setItem('token','true')
      if(res.user){
        this.router.navigate(['/dashborad']);
      }
    })
  }
  ResetPassword(email: string) {
    this.auth.sendPasswordResetEmail(email).then(() => {

      this.router.navigate(['/login']);
    });
 
  }
  logout(){
  this.auth.signOut();
  this.router.navigate(['/login']);
  }
}
