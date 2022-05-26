import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginValue: boolean;
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    public firestore: AngularFirestore
  ) {}
  userId = '';

  checkAuth() {
    this.auth.onAuthStateChanged((user: any) => {
      if (user) {
        console.log(user.uid);
        this.userId = user.uid;
      } else {
        console.log('no authentication');
      }
    });
  }

  register(email: string, password: string, name: string, phone: number) {
    this.auth['createUserWithEmailAndPassword'](email, password).then(
      (res: { user: any }) => {
        this.userId = res.user.uid;
        this.firestore
          .collection('admin')
          .doc(res.user.uid)
          .set({ email, name, phone })
          .then(() => {
            this.firestore
              .collection('profile-company')
              .doc(res.user.uid)
              .set({})
              .then(() => {
                console.log('add last');
              });
          }).then(()=>{
            this.router.navigate(['/company'])
          });
      }
    );
  }

  admin(Record: any) {
    this.firestore
      .collection('admin')
      .doc(this.userId)
      .update(Record)
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  }

  profileCompany(Record: any) {
    this.firestore
      .collection('profile-company')
      .doc(this.userId)
      .update(Record)
      .then(() => {
        this.router.navigate(['/intrest']);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  intrestQuestions(Record: any) {
    this.firestore
      .collection('intersetQuestion')
      .doc(this.userId)
      .set(Record)
      .then(() => {
        this.router.navigate(['/dashborad']);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  login(email: string, password: string) {
    this.auth['signInWithEmailAndPassword'](email, password).then(
      (res: { user: any }) => {
        localStorage.setItem('token', 'true');
        this.loginValue = true;
        if (res.user) {
          this.router.navigate(['/dashborad']);
        }
      }
    );
  }
  ResetPassword(email: string) {
    this.auth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/login']);
    });
  }
  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
      this.loginValue = false;
    });
  }
  loginWithGoogle() {
    this.auth.signInWithPopup(new GoogleAuthProvider()).then(() => {
      this.router.navigate(['/dashborad']);
    });
  }
}
