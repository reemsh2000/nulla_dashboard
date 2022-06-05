import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { LoaderService } from '../../../services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isOpen: boolean = false;
  @Output() isMenuopen = new EventEmitter();

  onMenu() {
    this.isOpen = !this.isOpen;
    this.isMenuopen.emit(this.isOpen);
  }

  constructor(
    public store: LoaderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login = this.authService.loginValue;

  logout() {
    this.authService.logout();
    this.login = false;
  }
  profile() {
    // console.log(typeof(this.authService.item))
    console.log('this.authService.item');
    console.log();

    this.authService.getProfileData().subscribe((res: any) => {
      console.log();
      let data = res.data();
      if (Object.keys(data).length) {
        this.router.navigate(['/adminpage']);
      } else {
        this.router.navigate(['/profile']);
      }
    });
  }
}
