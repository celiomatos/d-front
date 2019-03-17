import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'der-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('snav') snav: MatSidenav;  

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.snav.close();
  }

}
