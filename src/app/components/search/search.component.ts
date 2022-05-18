import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
link: string=''
  constructor() { }

  ngOnInit(): void {
  }
  getLink(link:string){
   
  let linkId= link.split('forms/')[1]

 }
 getLinkclick(){
  return this.getLink(this.link)

 }


}
