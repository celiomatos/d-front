import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'der-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() evtCloseMenu = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeSideNav() {
    this.evtCloseMenu.emit();
  }
}
