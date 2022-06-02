import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
})
export class AdminpageComponent implements OnInit {
  admin: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  getdata() {
    this.authService.getProfileData().subscribe((data: { data: () => any }) => {
      this.admin = data.data();
      console.log('data', typeof this.admin);
      console.log('data', Object.keys(this.admin).length);
      console.log(data.data());
    });
  }
}
