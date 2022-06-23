import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserTypeService {
  userType: string = 'admin';
  setUserType() {
    this.userType = 'superAdmin';
    localStorage.setItem('usertype', this.userType);
  }

  getUserType(): string {
    return localStorage.getItem('usertype') || 'admin';
  }
}
