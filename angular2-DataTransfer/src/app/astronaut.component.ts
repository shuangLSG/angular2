import { Component, Input, OnDestroy } from '@angular/core';

import { MissionService } from './mission.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-astronaut',
    template: `
    <p>
      {{astronaut}}: <strong>{{mission}}</strong>
      <button
        (click)="confirm()"
        [disabled]="!announced || confirmed">
        Confirm
      </button>
    </p>
  `
})

export class AstronautComponent implements OnDestroy {
    @Input() astronaut: string;
    mission = '<no mission announced>';
    confirmed = false;
    announced = false;
    subscription: Subscription;

    constructor(private missionsService: MissionService) {
        this.subscription = missionsService.missionAnnounced$.subscribe(
            mission => {
                this.mission = mission;
                this.announced = true;
                this.confirmed = false;
            }
        )
    }

    confirm() {
        this.confirmed = true;
        this.missionsService.confirmMission(this.astronaut);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}