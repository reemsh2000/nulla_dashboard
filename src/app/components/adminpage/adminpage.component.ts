import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
})
export class AdminpageComponent implements OnInit {
  admin: any;

  constructor(private authService: AuthService) {
    this.authService.getProfileData().subscribe((data: { data: () => any }) => {
      this.admin = data.data();
    });
  }

  ngOnInit(): void {
 
  }

 
}
