import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.css']
})
export class LeftSideMenuComponent implements OnInit {

  @Input() toggleMenu:boolean;

  constructor() { }

  ngOnInit() {
  }



}
