import { Component,Input,Output,EventEmitter }      from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
  <h4>{{name}}</h4>
    <button (click)="vote(true)" [disabled]="didVote">Agreed</button>
    <button (click)="vote(false)" [disabled]="didVote">Disagreed</button>
  `
})

export class VoterComponent{
    @Input() name:string;
    @Output() voted = new EventEmitter<boolean>();
    didVote = false;

    vote(agreed:boolean){
        this.voted.emit(agreed);
        this.didVote = true;
    }
}