import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-curse-project';
  navSelected='recipe';

  onNavigate(event:string){
    this.navSelected=event;
  }
}
