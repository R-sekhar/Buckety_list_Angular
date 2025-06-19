import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  currenntDate:Date=new Date();
  goals:string[]=[];


  constructor(private dataService: DataService,) { }

  ngOnInit(): void {
    this.dataService.goal.subscribe((res: string[]) =>this.goals=res);
    

  }

}

