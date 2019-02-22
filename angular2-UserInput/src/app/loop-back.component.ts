import {Component} from '@angular/core';

@Component({
    selector:'app-loop-back',
    template: `
        <input #box type="text" (keyup)="0"/>
        {{box.value}}
    `
})
export class LoopBackComponent{
   
}