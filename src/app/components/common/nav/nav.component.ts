import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isOpen: boolean = false;
  @Output() isMenuopen = new EventEmitter();

 

  onMenu() {
    this.isOpen = !this.isOpen;
    this.isMenuopen.emit(this.isOpen);
  }

  constructor(public store: LoaderService ,private authService: AuthService) {}

  ngOnInit(): void {}
  logout(){
    this.authService.logout();
  }

}
