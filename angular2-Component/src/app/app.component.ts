import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  constructor() { }
  ngOnInit(){
    this.resetHeroes();
  }

  heroes:Hero[];
  currentHero:Hero;
  resetHeroes(){
    this.heroes = Hero.heroes.map(hero=>hero.clone())
    this.currentHero = this.heroes[0];
  }

  // interpolation
  title = 'Template Syntax';
  heroImageUrl = 'assets/images/hero.png';
  getVal():number{ return 2;}
}
