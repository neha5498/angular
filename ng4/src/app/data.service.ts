import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	private goals = new BehaviorSubject<any>(['Initial goal','Another silly goal']);
	goal = this.goals.asObservable();

  constructor() { }
  
  changeGoal(goal)
  {
  	this.goals.next(goal);
  }
}
