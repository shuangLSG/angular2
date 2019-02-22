import {Component} from '@angular/core';

@Component({
    selector:'app-little-tour',
    template: `
        <input #box 
            (keyup.enter)="onAdd(box.value)"
            (blur)="onAdd(box.value)"/>
        <button (click)="onAdd(box.value)">Add</button>
        <ul>
            <li *ngFor="let h of heroes">{{h}}</li>
        </ul>
    `
})

export class LittleTourComponent{
    heroes=['1','2']
    onAdd(value:string){
        this.heroes.push(value);
    }
}
 