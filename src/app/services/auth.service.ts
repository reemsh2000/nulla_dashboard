import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginValue: boolean;
  completeform: boolean;
  adminInfo: any;
  item: any;
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    public firestore: AngularFirestore,
    private http: HttpClient
  ) {}
  // private userId = new BehaviorSubject<string>('');
  // public userId$ = this.userId.asObservable();

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

  register(form: any) {
    this.auth['createUserWithEmailAndPassword'](form.email, form.password).then(
      (res: { user: any }) => {
        this.userId = res.user.uid;
        this.firestore
          .collection('admin')
          .doc(res.user.uid)
          .set({})
          .then(() => {
            this.firestore
              .collection('profile-company')
              .doc(res.user.uid)
              .set({})
              .then(() => {
                console.log('add last');
              })
              .then(() => {
                this.firestore
                  .collection('profile')
                  .doc(res.user.uid)
                  .set({})
                  .then(() => {
                    console.log('add last');
                  });
              });
          })
          .then(() => {
            this.router.navigate(['/welcome']);
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
        this.completeform = true;
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
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  apiUrl = 'https://us-central1-nulla-316b1.cloudfunctions.net/app/';
  login(form: any) {
    console.log('send loginD');

    this.http.post(`${this.apiUrl}/login`, form).subscribe((res) => {
      console.log(res);
    });
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
  profile(Record: any) {
    this.firestore
      .collection('profile')
      .doc(this.userId)
      .set(Record)
      .then(() => {
        this.completeform = true;
        this.router.navigate(['/adminpage']);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  getProfileData() {
    return this.firestore.collection('profile').doc(this.userId).get();
  }
}
