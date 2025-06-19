import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng12';itemCount:number =4;
  btnText:string='Add an item';
  goalText:string ='my first life goal';
  currentDate:Date = new Date();
}
