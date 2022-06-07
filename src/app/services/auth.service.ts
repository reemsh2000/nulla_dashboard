import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
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
    public firestore: AngularFirestore
  ) {}
  private errorMsg = new BehaviorSubject<string>('');
  public errorMsg$ = this.errorMsg.asObservable();
private email = new BehaviorSubject<any>('');
public email$=this.email.asObservable()
  public get getErrorMsg(): string {
    return this.errorMsg.getValue();
  }

  userId = '';

  checkAuth() {
    this.auth.onAuthStateChanged((user: any) => {
      if (user) {
        console.log(user.uid);
        console.log(user.email);
        this.email.next(user.email)

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

  addAdminNameAndPhone(Record: any) {
    this.firestore
      .collection('admin')
      .doc(this.userId)
      .update(Record)
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  }

  addProfileCompany(Record: any) {
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

  addIntrestQuestions(Record: any) {
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
  login(form: any) {
    this.auth['signInWithEmailAndPassword'](form.email, form.password)
      .then((res: { user: any }) => {
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        this.errorMsg.next('Invalid Email or Password');
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
      this.router.navigate(['/dashboard']);
    });
  }
  addProfileInformation(Record: any) {
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
  getUserEmail() {
    console.log('go to get email', this.auth.currentUser);
    return this.auth.currentUser;
  }
  getUserName() {
    console.log('user id', this.userId);
    return this.firestore.collection('admin').doc(this.userId).get();
  }
}
