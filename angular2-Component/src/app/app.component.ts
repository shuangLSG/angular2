import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    this.resetHeroes();
    this.setCurrentClasses();
  }

  heroes: Hero[];
  currentHero: Hero;
  resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone())
    this.currentHero = this.heroes[0];
  }

  onSave(event?: KeyboardEvent) {
    let evtMsg = event ? ' Event target is ' + (<HTMLElement>event.target).textContent : '';
    console.log('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }

  deleteHero(hero?: Hero) {
    console.log(`Delete ${hero ? hero.name : 'the hero'}.`);
  }
  // interpolation
  title = 'Template Syntax';
  heroImageUrl = 'assets/images/hero.png';
  getVal(): number { return 2; }

  // mental-model
  isUnchanged = true;
  isSpecial = true;
  clicked = '';
  name: string = Hero.heroes[0].name;
  help = '';

  //  property vs. attribute
  iconUrl = 'assets/images/ng-logo.png';
  villainImageUrl = 'assets/images/villain.png';

  //  property
  canSave = true;
  classes = 'special';

  // attribute
  actionName = 'Got for it';

  // class
  badCurly = 'bad curly';

  // event
  onClickMe(event?: KeyboardEvent) {
    let evtMsg = event ? ' Event target class is ' + (<HTMLElement>event.target).className : '';
    console.log('Click me.' + evtMsg);
  }

  fontSizePx = 16;
  setUppercaseName(name: string) {
    this.currentHero.name = name.toUpperCase();
  }

  // ngClass
  currentClasses: {}
  setCurrentClasses() {
    this.currentClasses = {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special': this.isSpecial
    }
  }

  // ngStyle
  currentStyles: {}
  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px'
    }
  }

  // ngIf
  isActive = false;
  get nullHero(): Hero { return null; }

  
  // trackBy change counting
  heroesNoTrackByCount = 0;
  heroesWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;

  heroIdIncrement = 1;
  // ngFor
  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++)
    this.heroesWithTrackByCountReset = -1
  }
  clearTrackByCounts(){
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement =1;
  }
}
