import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarRow } from 'src/app/Interfaces/interfaces';
import { PrimeIcons} from 'primeng/api';
import { AsideService } from 'src/app/services/aside.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isSection: string = 'survey';
  @Input() isSideSmall: boolean = false;

  constructor(public section: AsideService) {
    // console.log(section.sectionName);
  }
 
   sideBarArray: SideBarRow[] = [
     {
        icon: PrimeIcons.HOME,
        label: 'Dashboard'
     },
     {
       icon:PrimeIcons.TH_LARGE,
       label: 'Past Surveys'
     },
     {
      icon: PrimeIcons.DOWNLOAD,
      label: 'Import Survey'
    },
    {
      icon: PrimeIcons.USERS,
      label: 'Teams'
    },
    {
      icon: PrimeIcons.REPLY,
      label: 'Recommendations'
    },
  {
      icon:PrimeIcons.BOOK,
      label: 'Reports'
    },
    {
      icon:PrimeIcons.USER,
      label: 'Profile'
    },


   ];


}
