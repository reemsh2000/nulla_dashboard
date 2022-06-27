import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-auth-image-side',
  templateUrl: './auth-image-side.component.html',
  styleUrls: ['./auth-image-side.component.css']
})
export class AuthImageSideComponent implements OnInit {
@Input ()imageHeight:string
  constructor() { }

  ngOnInit(): void {
  }

}
