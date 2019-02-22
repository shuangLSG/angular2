import { Component } from '@angular/core';

@Component({
    selector: 'app-key-up1',
    template: `
        <input type="text" (keyup)="onKey($event)"/>
        {{msg}}
    `
})
export class KeyUpComponent_v1 {
    msg = '';
    // onKey(event:any){
    //    this.msg+= event.target.value+'|';
    // }

    onKey(event: KeyboardEvent) {
        this.msg += (<HTMLInputElement>event.target).value + '|';
    }
}

@Component({
    selector: 'app-key-up2',
    template: `
        <input #box type="text" (keyup)="onKey(box.value)"/>
        {{msg}}
    `
})
export class KeyUpComponent_v2 {
    msg = '';

    onKey(value: string) {
        this.msg += value + '|';
    }
}

@Component({
    selector: 'app-key-up3',
    template: `
        <input #box (keyup.enter)="onEnter(box.value)"/>
        {{msg}}
    `
})
export class KeyUpComponent_v3 {
    msg = '';

    onEnter(value: string) {
        this.msg += value;
    }
}

@Component({
    selector: 'app-key-up4',
    template: `
        <input #box (keyup.enter)="update(box.value)" (blur)="update(box.value)"/>
        {{msg}}
    `
})
export class KeyUpComponent_v4 {
    msg = '';

    update(value: string) {
        this.msg = value;
    }
}
