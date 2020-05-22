import { Component, OnInit } from '@angular/core';

//interfaces
import { Hero } from '../hero';


//Mocks 
import { HEROES } from '../mock-heroes';

//Services
import { HeroService } from '../services/hero/hero.service';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public selectedHero: Hero; 
  public heroes: Hero[];

  constructor( private heroServices: HeroService,
    private messageServices: MessageService) {
    this.heroes = []; 
   }

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void{
    this.heroServices.getHeroes().subscribe(heroes => this.heroes = heroes)
  } 

  // public onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageServices.add(`HeroService: Selected hero id=${hero.id}`);
  // }
}
