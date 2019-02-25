import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component';

@Component({
    selector: 'app-countdown-parent-lv',
    template: `
  <h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <app-countdown-timer #timer></app-countdown-timer>
  `
})
// 调用子组件里面的方法、变量

export class CountdownLocalVarParentComponent{}

@Component({
  selector: 'app-countdown-parent-vc',
  template: `
<h3>Countdown to Liftoff (via local variable)</h3>
<button (click)="start()">Start</button>
<button (click)="stop()">Stop</button>
<div class="seconds">{{seconds()}}</div>
<app-countdown-timer></app-countdown-timer>
`
})
// ViewChild

export class CountdownViewChildParentComponent implements AfterViewInit{
  @ViewChild(CountdownTimerComponent)
  timerComponent:CountdownTimerComponent;

  seconds(){ return 0;}

  ngAfterViewInit(){
    setTimeout(()=>{
      this.seconds=()=>this.timerComponent.seconds
    },0)
  }

  start(){this.timerComponent.start();}  
  stop(){this.timerComponent.stop();}
}

