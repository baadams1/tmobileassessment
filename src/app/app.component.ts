import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timer-app';
  minutes = 0;
  seconds = 0;
  hours = 0;
  interval: any;
  timeLeft = 0;


  public startTimer(){
    this.interval = setInterval(() => {
      if(this.timeLeft == 60) {
        this.timeLeft = 0;
        this.seconds = 0;
        this.minutes++
      } 
      else if(this.minutes == 60){
        this.minutes = 0;
        this.hours++
      }
      else {
        this.timeLeft++;
        this.seconds++
      }
    },1000);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }

}



