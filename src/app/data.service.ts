import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal','Another silly life goal']);
  goal=this.goals.asObservable();
  
  Assignment=new BehaviorSubject<string[]>(['The initial goal','Another silly life goal']);
  
  

  
  constructor() {}
    changeGoal(goal: any){
      this.goals.next(goal);
      

    }
    addRxGoal(goal:any){
      this.Assignment.next(goal);
    }

    
    
   
   
   
}
