import { AuthService } from 'app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AsideService } from 'app/services/aside.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.css']
})
export class CompaniesPageComponent implements OnInit {
  openMenu: boolean=false ;
  private allCompanyData = new BehaviorSubject<any>([]);
  public allCompanyData$ = this.allCompanyData.asObservable();
  
  constructor(private asideService: AsideService, public auth :AuthService ) {
    this.asideService.openAside$.subscribe((val) => {
      this.openMenu = val;
    });
    this.asideService.setSection('All Companies');
    this.auth.getAllCompanyData().subscribe(res=>{
      this.allCompanyData.next(res.docs.map(doc => doc.data()))
    })
  }
  ngOnInit(): void {


  }

}
