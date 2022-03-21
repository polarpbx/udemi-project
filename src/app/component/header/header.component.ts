import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navSelected=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  goToNav(selected:string){
    this.navSelected.emit(selected);
  }
}
