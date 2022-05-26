import { SnapshotService } from './../../services/snapshot.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {
  isShow:boolean=false
  constructor(public snapshotService: SnapshotService) {

  }

  ngOnInit(): void {
  }

}
